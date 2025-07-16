import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { GoDotFill } from "react-icons/go";
function Applypage() {
  const Nevigate = useNavigate();
  const location = useLocation()
  const data = location.state

  return (
    <>
      <div className="marign-top">
      </div>
      <div className="top-position">

        <div className="position-page-main-heading">
          <div className="position">
            <p>{data.position}</p>
          </div>

          <div className="about-the-postion">
            <p><span>{data.on} / </span> <span>{data.location} / </span> <sapn>{data.positionType}</sapn></p>
          </div>
        </div>
        <div className="wrapper">

          <p className="paara">We require your basic details to proceed with the application. This information helps us evaluate your application.</p>
          <p className="paara">All fields are mandatory</p>
          <div className="application-form-carrer-page">

            <form className="main-form">

              <input className="input-data" type="text" placeholder="Full Name *"></input>
              <input className="input-data" type="number" placeholder="Mobile Number *"></input>
              <input className="input-data" type="email" placeholder="Email id *"></input>
              <div className="two-input-feild">
                     <input className="input-data" type="number" placeholder="Mobile Number *"></input>
              <input className="input-data" type="email" placeholder="Email id *"></input>
              </div>

              <div className="uploade-file">
                <p className="file-type">Upload Your Resume *</p>
                <input type="file"></input>
                <p className="file-type">Only jpg, png, doc, pdf and docx ext files are allowed .</p>
              </div>

              <div className="buttons">
                <button className="reset">Reset</button>
                <button className="submit">Submit</button>
              </div>

            </form>
          </div>

        </div>


      </div>

      <div className="all-content-for-job">

        <div className="backbutton">
          <button onClick={() => Nevigate("/carrer")}> Back </button>
        </div>
        <hr></hr>
        <div className="about-job">
          <p className="main-h ">About Role</p>
          <p className="about-j">{data.aboutJob}</p>
        </div>

        <div className="eligibility">
          <p>Eligibility  Criteria</p>
          <ul>
            <li><span><GoDotFill /></span>{data.qualification}</li>
            <li><span><GoDotFill /></span> Age 18 - 35</li>
            <li><span><GoDotFill /></span> Master's or Bachlor's Certificate </li>
            <li><span><GoDotFill /></span> Aviation Certificate  </li>

          </ul>
        </div>

        <div className="eligibility">
          <p>Responsibilities</p>
          <ul>
            <li><span><GoDotFill /></span>{data.pointOne}</li>
            <li><span><GoDotFill /></span>{data.pointTwo} </li>
            <li><span><GoDotFill /></span> {data.pointThree} </li>
            <li><span><GoDotFill /></span> {data.pointFour}  </li>
            <li><span><GoDotFill /></span> {data.pointFive}  </li>


          </ul>
        </div>




      </div>


    </>
  )


}

export default Applypage;
