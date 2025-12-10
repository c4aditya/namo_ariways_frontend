import React from "react";
import "./jobTable.css";

const JobTable = () => {

  // FIRST TABLE DATA (Jobs)
  const jobData = [
    ["A-J325", "AIRPORT SERVICES DEPARTMENT", "AIRPORT SERVICES", "BHUBANESWAR"],
    ["SA-J389", "SECURITY SUPERVISOR", "AIRLINE SECURITY", "Across India"],
    ["SA-J463", "AIRPORT MANAGER", "AIRPORT SERVICES", "BHUBANESWAR"],
    ["SA-J497", "FLIGHT OPERATIONS MANAGER : NSOP", "OPERATIONS", "BANGALORE HO"],
    ["SA-J503", "JUNIOR EXECUTIVE - PARAMEDICS", "FLIGHT SAFETY", "BENGALURU, AHMEDABAD, HINDON NEW"],
    ["SA-J519", "SENIOR MANAGER/AGM - ROSTERING", "OPERATIONS", "BANGALORE HO"],
    ["SA-J520", "SENIOR MANAGER/AGM OPERATIONS - TRAINING", "OPERATIONS", "BANGALORE HO"],
    ["SA-J539", "JUNIOR STORES EXECUTIVE", "STORES & LOGISTICS", "BANGALORE HO, HYDERABAD, BELGAUM, NASHIK"],
    ["SA-J545", "SECURITY SUPERVISOR", "AIRLINE SECURITY", "Across India"],
    ["SA-J546", "SENIOR SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
    ["SA-J547", "TRAINEE SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
    ["SA-J549", "SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
    ["SA-J560", "PILOTS - EMB 170/175/190/195", "OPERATIONS", "HYDERABAD, BENGALURU"],
    ["SA-J564", "DIRECTOR - CABIN SAFETY", "OPERATIONS", ""],
    ["SA-J565", "TRAINEE - LEGAL", "LEGAL", ""],
    ["SA-J566", "SENIOR MANAGER IT - BUSINESS TECHNOLOGY & SUPPORT", "INFORMATION TECHNOLOGY", "Across India"],
    ["SA-J567", "GENERAL MANAGER - FINANCE", "ACCOUNTS", "Across India"],
    ["SA-J568", "GENERAL MANAGER - FINANCE", "ACCOUNTS", "BANGALORE HO"],
    ["SA-J573", "ASSISTANT MANAGER - POWERPLANT", "CAMO", "BENGALURU, HYDERABAD, BELGAUM"],
    ["SA-J574", "ADMINSTRATIVE - EXECUTIVE (TRAVEL DESK)", "ADMINISTRATION", "BANGALORE HO"],
    ["SA-J575", "AIRCRAFT MAINTENANCE ENGINEERS (CAT A / B1 / B2) & TECHNICIAN", "ENGINEERING", "Across India"],
    ["SA-J576", "LEGAL EXECUTIVE", "LEGAL", "BANGALORE HO"],
    ["SA-J577", "SENIOR MANAGER OPERATIONS - TRAINING & LICENSING", "OPERATIONS", "BANGALORE HO"],
    ["SA-J578", "AREA MANAGER - SALES", "SALES", "BENGALURU, BIDAR, GOA, KALABURAGI, BELGAUM"],
  ];

  // SECOND TABLE DATA (Airport List)
  const airportData = [
    ["NA-001", "Indira Gandhi International Airport", "DEL", "Delhi", "International"],
    ["NA-002", "Hindon Airport", "HDO", "Delhi NCR (Ghaziabad, UP)", "Domestic / UDAN"],
    ["NA-003", "Chaudhary Charan Singh International Airport", "LKO", "Uttar Pradesh", "International"],
    ["NA-004", "Lal Bahadur Shastri International Airport", "VNS", "Uttar Pradesh", "International"],
    ["NA-005", "Gorakhpur Airport", "GOP", "Uttar Pradesh", "Domestic"],
    ["NA-006", "Kushinagar International Airport", "KBK", "Uttar Pradesh", "International"],
    ["NA-007", "Ayodhya Airport (Maryada Purushottam Shri Ram Airport)", "AYJ", "Uttar Pradesh", "Domestic"],
    ["NA-008", "Kanpur Airport", "KNU", "Uttar Pradesh", "Domestic"],
    ["NA-009", "Agra Airport", "AGR", "Uttar Pradesh", "Domestic"],
    ["NA-010", "Bareilly Airport", "BEK", "Uttar Pradesh", "Domestic"],
    ["NA-011", "Prayagraj Airport", "IXD", "Uttar Pradesh", "Domestic"],
    ["NA-012", "Jaipur International Airport", "JAI", "Rajasthan", "International"],
    ["NA-013", "Maharana Pratap Airport", "UDR", "Rajasthan", "Domestic"],
    ["NA-014", "Jodhpur Airport", "JDH", "Rajasthan", "Domestic"],
    ["NA-015", "Kishangarh Airport", "KQH", "Rajasthan", "Domestic"],
    ["NA-016", "Nal Airport", "BKB", "Rajasthan", "Domestic"],
    ["NA-017", "Jaisalmer Airport", "JSA", "Rajasthan", "Domestic"],
    ["NA-018", "Kota Airport", "KTU", "Rajasthan", "Domestic"],
    ["NA-019", "Sri Guru Ram Dass Jee International Airport", "ATQ", "Punjab", "International"],
    ["NA-020", "Shaheed Bhagat Singh International Airport", "IXC", "Chandigarh (Punjab/Haryana)", "International"],
    ["NA-021", "Bathinda Airport", "BUP", "Punjab", "Domestic"],
    ["NA-022", "Adampur Airport", "AIP", "Punjab", "Domestic"],
    ["NA-023", "Ludhiana Airport", "LUH", "Punjab", "Domestic"],
    ["NA-024", "Pathankot Airport", "IXP", "Punjab", "Domestic"],
    ["NA-025", "Hisar Airport", "HSS", "Haryana", "Domestic (UDAN)"],
    ["NA-026", "Kangra Airport", "DHM", "Himachal Pradesh", "Domestic"],
    ["NA-027", "Shimla Airport", "SLV", "Himachal Pradesh", "Domestic"],
    ["NA-028", "Kullu-Manali Airport (Bhuntar)", "KUU", "Himachal Pradesh", "Domestic"],
    ["NA-029", "Jolly Grant Airport", "DED", "Uttarakhand", "Domestic"],
    ["NA-030", "Pantnagar Airport", "PGH", "Uttarakhand", "Domestic"],
    ["NA-031", "Pithoragarh Airport (Naini Saini)", "NNS", "Uttarakhand", "Domestic (UDAN)"],
    ["NA-032", "Sheikh ul-Alam International Airport", "SXR", "Jammu & Kashmir", "International"],
    ["NA-033", "Jammu Airport", "IXJ", "Jammu & Kashmir", "Domestic"],
    ["NA-034", "Kushok Bakula Rimpochee Airport", "IXL", "Ladakh (Leh)", "Domestic / Limited Intl"],
    ["NA-035", "Kargil Airport", "KGI", "Ladakh", "Domestic (Limited ops)"],
  ];

  return (
    <div>
      {/* FIRST TABLE */}
      <div className="table-wrapper">
          <div className="about-us-content">

                <div className="about-us-top-content">
                    <div className="about-us-heading">
    

                        <p className="large-heading">Opening positions </p>
                    </div>

                    <div className="about-us-paragraph">
                        <p>
                            At Namo Airways, we believe that our people are our greatest asset. As we continue to grow and expand our services, we are always looking for talented, passionate, and driven individuals to join our team. Whether you are an experienced professional or just starting your career in the travel industry, we offer exciting opportunities across various roles, including technology, customer service, operations, marketing, and more.

                            If you are enthusiastic about travel, committed to delivering exceptional service, and eager to be part of a dynamic and innovative company, we invite you to explore our current openings. Join us in shaping unforgettable journeys for travelers around the world and take the next step in your career with Namo Airways.
                        </p>
                    </div>

                </div>

            </div>
        <table className="job-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Area Of Interest</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3] ? row[3] : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SECOND TABLE */}
      <div className="table-wrapper">
        <table className="job-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Airport Name</th>
              <th>Code</th>
              <th>State/UT</th>
              <th>Location / Type</th>
            </tr>
          </thead>
          <tbody>
            {airportData.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
