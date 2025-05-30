import { useState } from "react";

function EnquiryNow({ place }) {
  const [form, showForm] = useState(false);

  // Teen alag-alag counter states
  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  function handleEnquiry() {
    showForm(true);
  }

  function handleClose() {
    showForm(false);
  }

  // Child counter functions
  function incrementChild() {
    setChildCount(childCount + 1);
  }
  function decrementChild() {
    if (childCount > 0) setChildCount(childCount - 1);
  }

  // Adult counter functions
  function incrementAdult() {
    setAdultCount(adultCount + 1);
  }
  function decrementAdult() {
    if (adultCount > 0) setAdultCount(adultCount - 1);
  }

  // Infant counter functions
  function incrementInfant() {
    setInfantCount(infantCount + 1);
  }
  function decrementInfant() {
    if (infantCount > 0) setInfantCount(infantCount - 1);
  }

  return (
    <>
      {/* Enquiry Button */}
      <div className="enquiry-now-btn">
        <button onClick={handleEnquiry} className="enq-btn">
          Enquiry Now
        </button>
      </div>

      {/* Modal & Overlay */}
      {form && (
        <div className="modal-overlay">
          <div className="popupform">
            <div className="top-side">
              <div className="place-name-enq-button-click">
                <p>Want to Go For A Memorable Holiday?</p>
              </div>
              <div className="cut-button">
                <button className="close-btn-pop-up" onClick={handleClose}>
                  &times;
                </button>
              </div>
            </div>

            <div className="package-name">
              <div className="pc">
                <p>Package Name </p>
              </div>
              <div className="package-name-content">
                <ul>
                  <li>
                    {place} 
                  </li>
                </ul>
              </div>
            </div>
            {/* persional details */}
            <div className="personal-details">
              <div className="heading-persional-details">
                <div className="heading-per">
                  <p>Personal Details </p>
                </div>
                <div className="line">
                  <hr className="color"></hr>
                </div>
              </div>
            </div>

            <div className="form-package-enquirynow">
              <div className="top-form-enq">
                <div className="name">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name"></input>
                </div>
                <div className="name">
                  <label>Mobile No.</label>
                  <input type="text" placeholder="Your Mobile No."></input>
                </div>
              </div>
              <div className="buttom-from">
                <label>Email</label>
                <input type="text" placeholder="Your E-mail"></input>
              </div>
            </div>

            {/* Teen alag-alag counter */}
            <div className="all-three-counter">
              {/* Child Counter */}
              <div className="counter-en">
                <div className="child">
                    <p>Child</p>
                </div>
                 
                 <div  className="counter-enq">
                <div className="decrement-counter">
                  <button className="dec" onClick={decrementChild}>
                    -
                  </button>
                </div>
                <div className="count">
                  <p>{childCount}</p>
                </div>
                <div className="increment-enq">
                  <button className="inc" onClick={incrementChild}>
                    +
                  </button>
                </div>
               
              </div>
              </div>

              {/* Adult Counter */}
              <div className="counter-en">
                <div className="child">
                    <p>Adult</p>
                </div>
                <div className="counter-enq">

              
                <div className="decrement-counter">
                  <button className="dec" onClick={decrementAdult}>
                    -
                  </button>
                </div>
                <div className="count">
                  <p>{adultCount}</p>
                </div>
                <div className="increment-enq">
                  <button className="inc" onClick={incrementAdult}>
                    +
                  </button>
                </div>
                </div>
                
              </div>

              {/* Infant Counter */}
              <div className="counter-en">
                <div className="child">
                    <p>Infart</p>
                </div>
                <div className="counter-enq">

                
                <div className="decrement-counter">
                  <button className="dec" onClick={decrementInfant}>
                    -
                  </button>
                </div>
                <div className="count">
                  <p>{infantCount}</p>
                </div>
                <div className="increment-enq">
                  <button className="inc" onClick={incrementInfant}>
                    +
                  </button>
                </div>
                </div>
              </div>
            </div>
        <div className="enquiry-now-inside">
            <button className="enquiry-now-inside-button">Enquiry Now </button>
        </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EnquiryNow;
