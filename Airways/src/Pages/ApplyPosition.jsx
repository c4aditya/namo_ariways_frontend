import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function Applypage() {
  const Nevigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [form, setForm] = useState({
    fullName: "",
    mobile1: "",
    email1: "",
    mobile2: "",
    email2: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [aviationCertFile, setAviationCertFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile || !aviationCertFile) {
      alert("Please upload both Resume and Aviation Certificate");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("mobile1", form.mobile1);
      formData.append("email1", form.email1);
      formData.append("mobile2", form.mobile2);
      formData.append("email2", form.email2);
      formData.append("position", data.position);
      formData.append("location", data.location);
      formData.append("positionType", data.positionType);
      formData.append("resume", resumeFile);
      formData.append("aviationCertificate", aviationCertFile);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/job/apply`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      console.log("Apply response:", result);

      if (res.ok && result.success) {
        alert("Application submitted successfully");
        setForm({
          fullName: "",
          mobile1: "",
          email1: "",
          mobile2: "",
          email2: "",
        });
        setResumeFile(null);
        setAviationCertFile(null);
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Apply form error:", err);
      alert("Server error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="marign-top"></div>
      <div className="top-position">
        <div className="position-page-main-heading">
          <div className="position">
            <p>{data.position}</p>
          </div>

          <div className="about-the-postion">
            <p>
              <span>{data.on} / </span>
              <span>{data.location} / </span>
              <span>{data.positionType}</span>
            </p>
          </div>
        </div>

        <div className="wrapper">
          <p className="paara">
            We require your basic details to proceed with the application. This
            information helps us evaluate your application.
          </p>
          <p className="paara">All fields are mandatory</p>

          <div className="application-form-carrer-page">
            {/* DESKTOP FORM */}
            <form className="main-form" onSubmit={handleSubmit}>
              <input
                className="input-data"
                type="text"
                placeholder="Full Name *"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
              <input
                className="input-data"
                type="number"
                placeholder="Mobile Number *"
                name="mobile1"
                value={form.mobile1}
                onChange={handleChange}
              />
              <input
                className="input-data"
                type="email"
                placeholder="Email id *"
                name="email1"
                value={form.email1}
                onChange={handleChange}
              />

              <div className="two-input-feild">
                <input
                  className="input-data"
                  type="number"
                  placeholder="Mobile Number *"
                  name="mobile2"
                  value={form.mobile2}
                  onChange={handleChange}
                />
                <input
                  className="input-data"
                  type="email"
                  placeholder="Email id *"
                  name="email2"
                  value={form.email2}
                  onChange={handleChange}
                />
              </div>

              <div className="uploade-file">
                <div className="resume">
                  <p className="file-type"> Resume *</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />
                  <p className="file-type">Only jpg, png, doc, pdf </p>
                </div>

                <div className="Avation-Certificate">
                  <p className="file-type">Avation Certificate *</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    onChange={(e) => setAviationCertFile(e.target.files[0])}
                  />
                  <p className="file-type">Only jpg, png, doc, pdf.</p>
                </div>
              </div>

              <div className="buttons">
                <button
                  type="button"
                  className="reset"
                  onClick={() => {
                    setForm({
                      fullName: "",
                      mobile1: "",
                      email1: "",
                      mobile2: "",
                      email2: "",
                    });
                    setResumeFile(null);
                    setAviationCertFile(null);
                  }}
                >
                  Reset
                </button>
                <button className="submit" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* BELOW: same as your original content (back, about, eligibility, responsibilities, mobile form) */}

      <div className="all-content-for-job">
        <div className="backbutton">
          <button onClick={() => Nevigate("/carrer")}> Back </button>
        </div>
        <hr />
        <div className="about-job">
          <p className="main-h ">About Role</p>
          <p className="about-j">{data.aboutJob}</p>
        </div>

        <div className="eligibility">
          <p>Eligibility Criteria</p>
          <ul>
            <li>
              <span>
                <GoDotFill />
              </span>
              {data.qualification}
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>
              Age 18 - 35
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>
              Master's or Bachlor's Certificate
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>
              Aviation Certificate
            </li>
          </ul>
        </div>

        <div className="eligibility">
          <p>Responsibilities</p>
          <ul>
            <li>
              <span>
                <GoDotFill />
              </span>
              {data.pointOne}
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>
              {data.pointTwo}
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>{" "}
              {data.pointThree}
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>{" "}
              {data.pointFour}
            </li>
            <li>
              <span>
                <GoDotFill />
              </span>{" "}
              {data.pointFive}
            </li>
          </ul>
        </div>

        {/* MOBILE FORM (abhi UI only, same jaisa tumhare code me tha) */}
        <div className="mobile-wrapper">
          <p className="paara mob">
            We require your basic details to proceed with the application. This
            information helps us evaluate your application.
          </p>
          <p className="paara mob">All fields are mandatory</p>

          <div className="application-form-carrer-page-mobile ">
            <form className="main-form  respo">
              <input
                className="input-data"
                type="text"
                placeholder="Full Name *"
              />
              <input
                className="input-data"
                type="number"
                placeholder="Mobile Number *"
              />
              <input
                className="input-data"
                type="email"
                placeholder="Email id *"
              />
              <div className="two-input-feild for-res">
                <input
                  className="input-data"
                  type="number"
                  placeholder="Mobile Number *"
                />
                <input
                  className="input-data"
                  type="email"
                  placeholder="Email id *"
                />
              </div>

              <div className="uploade-file">
                <div className="resume res-responcive ">
                  <p className="file-type"> Resume *</p>
                  <input type="file" />
                  <p className="file-type">Only jpg, png, doc, pdf </p>
                </div>

                <div className="Avation-Certificate res-responcive ">
                  <p className="file-type">Avation Certificate *</p>
                  <input type="file" />
                  <p className="file-type">Only jpg, png, doc, pdf.</p>
                </div>
              </div>

              <div className="buttons">
                <button className="reset" type="button">
                  Reset
                </button>
                <button className="submit" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applypage;
