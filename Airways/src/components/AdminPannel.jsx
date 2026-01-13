// AdminPanel.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || "http://localhost:4500";

export default function AdminPanel() {
  const navigate = useNavigate();

  // 'dashboard' | 'enquiry' | 'courseEnquiry' | 'jobApplications'
  const [activeView, setActiveView] = useState("dashboard");
  const [enquiries, setEnquiries] = useState([]);
  const [courseEnquiries, setCourseEnquiries] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE_URL}/enqFrom`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success !== false) {
        setEnquiries(data.enquiries || data.data || []);
      } else {
        console.error("Enquiries fetch error:", data);
      }
    } catch (err) {
      console.error("Enquiries fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourseEnquiries = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE_URL}/course/enq`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success !== false) {
        setCourseEnquiries(data.enquiries || data.data || []);
      } else {
        console.error("Course enquiries fetch error:", data);
      }
    } catch (err) {
      console.error("Course enquiries fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobApplications = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`${API_BASE_URL}/job/apply`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setJobApplications(data.applications || []);
      } else {
        console.error("Job applications fetch error:", data);
      }
    } catch (err) {
      console.error("Job applications fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Jab view change ho, relevant data load karo
  useEffect(() => {
    if (activeView === "enquiry") {
      fetchEnquiries();
    } else if (activeView === "courseEnquiry") {
      fetchCourseEnquiries();
    } else if (activeView === "jobApplications") {
      fetchJobApplications();
    }
  }, [activeView]);

  return (
    <div className="admin-layout marign-top">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h3>Admin Menu</h3>
        <button
          className={activeView === "dashboard" ? "active" : ""}
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeView === "enquiry" ? "active" : ""}
          onClick={() => setActiveView("enquiry")}
        >
          Enquiry Forms
        </button>
        <button
          className={activeView === "courseEnquiry" ? "active" : ""}
          onClick={() => setActiveView("courseEnquiry")}
        >
          Course Enquiries
        </button>
        <button
          className={activeView === "jobApplications" ? "active" : ""}
          onClick={() => setActiveView("jobApplications")}
        >
          Job Applications
        </button>
      </div>

      {/* Content */}
      <div className="admin-content">
        <div className="admin-header">
          <h2>Admin Panel</h2>
          <button className="admin-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {activeView === "dashboard" && (
          <>
            <p>
              Welcome to the admin dashboard. Select a section from the sidebar.
            </p>
          </>
        )}

        {activeView === "enquiry" && (
          <>
            <h3>Enquiry Forms</h3>
            {loading ? (
              <p>Loading...</p>
            ) : enquiries.length === 0 ? (
              <p className="admin-empty">No enquiries found.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Message / Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((item) => (
                    <tr key={item._id}>
                      <td>{item.fullName || item.name}</td>
                      <td>{item.mobile1 || item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.message || item.enquiryType}</td>
                      <td>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {activeView === "courseEnquiry" && (
          <>
            <h3>Course Enquiries</h3>
            {loading ? (
              <p>Loading...</p>
            ) : courseEnquiries.length === 0 ? (
              <p className="admin-empty">No course enquiries found.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {courseEnquiries.map((item) => (
                    <tr key={item._id}>
                      <td>{item.fullName}</td>
                      <td>{item.mobile1}</td>
                      <td>{item.email}</td>
                      <td>{item.courseName}</td>
                      <td>{item.enquiryType}</td>
                      <td>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {activeView === "jobApplications" && (
          <>
            <h3>Job Applications</h3>
            {loading ? (
              <p>Loading...</p>
            ) : jobApplications.length === 0 ? (
              <p className="admin-empty">No job applications found.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile 1</th>
                    <th>Email 1</th>
                    <th>Position</th>
                    <th>Location</th>
                    <th>Resume</th>
                    <th>Aviation Cert</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {jobApplications.map((item) => (
                    <tr key={item._id}>
                      <td>{item.fullName}</td>
                      <td>{item.mobile1}</td>
                      <td>{item.email1}</td>
                      <td>{item.position}</td>
                      <td>{item.location}</td>
                      <td>
                        {item.resumePath ? (
                          <a
                            href={`${API_ORIGIN}${item.resumePath}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        {item.aviationCertificatePath ? (
                          <a
                            href={`${API_ORIGIN}${item.aviationCertificatePath}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
}
