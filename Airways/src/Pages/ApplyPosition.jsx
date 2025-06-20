import { useState } from "react";
import poster_image_aboutUs from "../videos/appy_poster.png";
import { NavLink } from "react-router-dom";

function Applypage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    number: "",
    DOB: "",
    gender: "",
    education: "",
    address: "",
    state: "",
    pincode: "",
    position: "",
    aadhaarNumber: "",
    passportSizePhoto: null,
    avaitionCertificate: null,
  });

  const changeHandler = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formToSend.append(key, value);
    });

    fetch("http://localhost:4500/api/v1/applynow", {
      method: "POST",
      body: formToSend,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Submission failed");
        return res.json();
      })
      .then((data) => {
        alert("Form submitted successfully!");
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  return (
    <>
      <div className="marign-top"></div>
      <div className="top-aboutus">
        <div className="main-potser-section-image">
          <div className="image-section">
            <img className="image" src={poster_image_aboutUs} alt="Poster" />
            <div className="overlay">
              <div className="overlaycontent">
                <div className="overlay-heading">
                  <h2>Apply Now !</h2>
                </div>
                <div className="page-link-page-title">
                  <div className="page-link">
                    <NavLink className="link-text" to="/">Home</NavLink>
                  </div>
                  <div className="mark"><p>{`>`}</p></div>
                  <div className="page-title"><p>Apply</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top">
        <div className="form-apply">
          <h2 className="small-heading pb">Job Application Form</h2>
          <form className="form-apply-grid" onSubmit={submitHandler}>
            {/* Full Name */}
            <div className="form-apply-group">
              <label htmlFor="fullName">Full Name *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={changeHandler}
                  className="form-apply-input-fullname"
                  placeholder="First name*"
                  required
                />
              </div>
            </div>
            {/* Father's Name */}
            <div className="form-apply-group">
              <label htmlFor="fatherName">Father's Name *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={changeHandler}
                  className="form-apply-input-fathername"
                  placeholder="Father's name*"
                  required
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-apply-group">
              <label htmlFor="email">Email *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="form-apply-input-email"
                  placeholder="Email*"
                  required
                />
              </div>
            </div>
            {/* Mobile Number */}
            <div className="form-apply-group">
              <label htmlFor="number">Mobile Number *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={changeHandler}
                  className="form-apply-input-number"
                  placeholder="Mobile number*"
                  required
                />
              </div>
            </div>
            {/* Date of Birth */}
            <div className="form-apply-group">
              <label htmlFor="DOB">Date of Birth *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={formData.DOB}
                  onChange={changeHandler}
                  className="form-apply-input-dob"
                  required
                />
              </div>
            </div>
            {/* Gender */}
            <div className="form-apply-group">
              <label htmlFor="gender">Gender *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={changeHandler}
                  className="form-apply-input-gender"
                  placeholder="Gender*"
                  required
                />
              </div>
            </div>
            {/* Education */}
            <div className="form-apply-group">
              <label htmlFor="education">Education *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={changeHandler}
                  className="form-apply-input-education"
                  placeholder="Education*"
                  required
                />
              </div>
            </div>
            {/* Address */}
            <div className="form-apply-group">
              <label htmlFor="address">Address *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={changeHandler}
                  className="form-apply-input-address"
                  placeholder="Address*"
                  required
                />
              </div>
            </div>
            {/* State */}
            <div className="form-apply-group">
              <label htmlFor="state">State *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={changeHandler}
                  className="form-apply-input-state"
                  placeholder="State*"
                  required
                />
              </div>
            </div>
            {/* Pincode */}
            <div className="form-apply-group">
              <label htmlFor="pincode">Pincode *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={changeHandler}
                  className="form-apply-input-pincode"
                  placeholder="Pincode*"
                  required
                />
              </div>
            </div>
            {/* Position */}
            <div className="form-apply-group">
              <label htmlFor="position">Position *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={changeHandler}
                  className="form-apply-input-position"
                  placeholder="Position*"
                  required
                />
              </div>
            </div>
            {/* Aadhaar Number */}
            <div className="form-apply-group">
              <label htmlFor="aadhaarNumber">Aadhaar Number *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={changeHandler}
                  className="form-apply-input-aadhaar"
                  placeholder="Aadhaar Number*"
                  required
                />
              </div>
            </div>
            {/* Passport Size Photo */}
            <div className="form-apply-group">
              <label htmlFor="photo">Passport size Photo *</label>
              <div className="form-apply-inputwrap">
                <input
                  type="file"
                  id="photo"
                  name="passportSizePhoto"
                  accept="image/*"
                  onChange={changeHandler}
                  className="form-apply-input-photo"
                  required
                />
              </div>
            </div>
            {/* Aviation Certificate */}
            <div className="form-apply-group">
              <label htmlFor="aviationcert">Aviation Certificate Upload</label>
              <div className="form-apply-inputwrap">
                <input
                  type="file"
                  id="aviationcert"
                  name="avaitionCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={changeHandler}
                  className="form-apply-input-aviationcert"
                />
              </div>
            </div>
            {/* Declaration */}
            <div className="form-apply-declaration">
              <input type="radio" checked disabled className="form-apply-radio-declaration" />
              <span>
                <strong><p>Declaration / घोषणा</p></strong>
                <p>I Declare that the name, class, date of birth, address and other information given by me in the online application form is correct to the best of my knowledge and belief. Which I declare to be truely correct. If the above information is found incomplete or incorrect, my candidature is liable to be terminated at any time.</p>
              </span>
            </div>
            {/* Submit Button */}
            <div className="form-apply-submit">
              <button type="submit" className="form-apply-btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Applypage;
