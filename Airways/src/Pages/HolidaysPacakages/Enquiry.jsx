import { useState } from "react";

function EnquiryNow({ place }) {
  const [form, showForm] = useState(false);

  function handleEnquiry() {
    showForm(true);
  }

  function handleOverlayClick() {
    showForm(false);
  }

  return (
    <>
      {/* Enquiry Button */}
      <div className="enquiry-now-btn">
        <button onClick={handleEnquiry} className="enq-btn">
          Enquiry Now
        </button>
      </div>

      {form && (
        // Overlay div: ispe click karne par form close ho jayegi
        <div
          className="booking-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={handleOverlayClick}
        >
          {/* Form ke andar click karne par close na ho */}
          <div
            className="booking-popup"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              minWidth: "350px"
            }}
          >
            <div className="booking-card">
              <div className="booking-title">
                <p>Want Booking Now!</p>
                <div className="booking-form-wrapper">
                  <form>
                    <div className="booking-field-name">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="booking-field-contact">
                      <input type="email" placeholder="Enter Email" />
                      <input type="number" placeholder="Enter Number" />
                    </div>
                    <div className="booking-field-range">
                      <input type="number" placeholder="From" />
                      <input type="number" placeholder="To" />
                    </div>
                    <div className="booking-btn-row">
                      <button type="button">Enquiry Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EnquiryNow;
