import poster_image_aboutUs from "../videos/namo_plane_image.png"
function Applypage(){
  
    return(
        <>
           <div className="marign-top">
        
                </div>
                <div className="top-aboutus">
        
                    <div className="main-potser-section-image">
        
                        <div className="image-section">
        
                            <img className="image" src={poster_image_aboutUs} />
        
                            {/* <div className="over-lay-poster-contents">
               
                                               <p>About us </p>
               
                                           </div> */}
                        </div>
                    </div>
                </div>
        <div className="top">
    
       {/* <div className="apply-left-side">
           <h2>{job.position}</h2>
        <img src={job.image} alt={job.position} />
       <p>Type: {job.positionType}</p>...        <p>Qualification: {job.qualification}</p>
       </div> */}

         

         <div>
            <div className="form-apply">
  <h2 className="small-heading pb">Job Application Form</h2>
  <form className="form-apply-grid">
    <div className="form-apply-group">
      <label htmlFor="fullName">Full Name *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="fullName" className="form-apply-input-fullname" placeholder="First name*" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="fatherName">Father Name *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="fatherName" className="form-apply-input-fathername" placeholder="Father name*" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="email">Email *</label>
      <div className="form-apply-inputwrap">
        <input type="email" id="email" className="form-apply-input-email" placeholder="Email address" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="contact">Contact Number *</label>
      <div className="form-apply-inputwrap">
        <input type="tel" id="contact" className="form-apply-input-contact" placeholder="9878XXXX45*" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="dob">D.O.B *</label>
      <div className="form-apply-inputwrap">
        <input type="date" id="dob" className="form-apply-input-dob" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="gender">Gender *</label>
      <div className="form-apply-inputwrap">
        <select id="gender" className="form-apply-select-gender" required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="password">Password *</label>
      <div className="form-apply-inputwrap">
        <input type="password" id="password" className="form-apply-input-password" placeholder="Password" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="confirmpassword">Confirm Password *</label>
      <div className="form-apply-inputwrap">
        <input type="password" id="confirmpassword" className="form-apply-input-confirmpassword" placeholder="Confirm Password" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="education">Education *</label>
      <div className="form-apply-inputwrap">
        <select id="education" className="form-apply-select-education" required>
          <option value="">Select Education</option>
          <option>10th</option>
          <option>12th</option>
          <option>Graduate</option>
          <option>Post Graduate</option>
        </select>
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="address">Address *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="address" className="form-apply-input-address" placeholder="Address" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="state">State *</label>
      <div className="form-apply-inputwrap">
        <select id="state" className="form-apply-select-state" required>
          <option value="">Select State</option>
          <option>Delhi</option>
          <option>Uttar Pradesh</option>
          <option>Maharashtra</option>
          {/* Add more states as needed */}
        </select>
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="pincode">Pincode *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="pincode" className="form-apply-input-pincode" placeholder="eg: 110049*" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="appliedfor">Applied for *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="appliedfor" className="form-apply-input-appliedfor" value="Airline Supervisor" readOnly />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="aadhaar">Aadhaar Number *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="aadhaar" className="form-apply-input-aadhaar" placeholder="eg:677652706721" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="pan">Pan Number *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="pan" className="form-apply-input-pan" placeholder="Pan Number" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="admissioncode">Admission Code *</label>
      <div className="form-apply-inputwrap">
        <input type="text" id="admissioncode" className="form-apply-input-admissioncode" placeholder="eg: BA5T5E7Y" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="photo">Passport size Photo *</label>
      <div className="form-apply-inputwrap">
        <input type="file" id="photo" className="form-apply-input-photo" accept="image/*" required />
      </div>
    </div>
    <div className="form-apply-group">
      <label htmlFor="aviationcert">Aviation Certificate Upload</label>
      <div className="form-apply-inputwrap">
        <input type="file" id="aviationcert" className="form-apply-input-aviationcert" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
    </div>
  </form>
  <div className="form-apply-declaration">
    <input type="radio" checked disabled className="form-apply-radio-declaration" />
    <span>
      <strong>Declaration / घोषणा</strong><br />
      I declare that the name, class, date of birth, address and other information given by me in the online application form is correct to the best of my knowledge and belief. Which I declare to be truly correct. If the above information is found incomplete or incorrect, my candidature is liable to be terminated at any time.
    </span>
  </div>
 
  <div className="form-apply-submit">
    <button type="submit" className="form-apply-btn-submit">Submit</button>
  </div>
</div>

         </div>


     
        </div>
        </>
    )
}

export default Applypage;
