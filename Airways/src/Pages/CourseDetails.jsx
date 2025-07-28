import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CiVideoOn } from "react-icons/ci";
import { PiListNumbersFill } from "react-icons/pi";
import { IoMdRecording } from "react-icons/io";
import { VscCommentUnresolved } from "react-icons/vsc";
import { RiPassValidLine } from "react-icons/ri";
import { GrValidate } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { GrSchedule } from "react-icons/gr";
import { HiLanguage } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
function CourseDetails() {
    const Nevigate = useNavigate();
    const location = useLocation()
    const data = location.state

    return (
        <>
            <div className="marign-top">
            </div>
            <div className="top-position mobile-view-for-top-position">

                <div className="position-page-main-heading">
                    <p>Welcome to @namo airways family</p>
                    <div className="position">
                        <p>{data.courseTitle}</p>
                    </div>

                    <div className="about-the-postion">
                        <ul>
                            <li><span><HiLanguage /></span>{data.language}</li>
                            <li><span><MdOutlineAccessTime /> </span>{data.Lectures}</li>

                            <li><span className="color-fill"><FaStar /> </span>{data.totelRting}</li>
                        </ul>
                    </div>


                </div>
                <div className="main-wr">


                    <div className="wrapper">

                        <div className="course-testmonials">
                            <img src={data.courseImage} alt="testmonials image " />
                        </div>



                        <div className="application-form-carrer-page acdemy-form">

                            <form className="main-form in-acdemy-css">

                                <input className="input-data" type="text" placeholder="Full Name *"></input>
                                <input className="input-data" type="number" placeholder="Mobile Number *"></input>
                                <input className="input-data" type="email" placeholder="Email id *"></input>

                                <input className="input-data" type="number" placeholder="Mobile Number *"></input>


                                {/* 
                            <div className="uploade-file">

                                <div className="resume">
                                    <p className="file-type"> Resume *</p>
                                    <input type="file"></input>
                                    <p className="file-type">Only jpg, png, doc, pdf </p>
                                </div>

                                <div className="Avation-Certificate">
                                    <p className="file-type">Avation Certificate  *</p>
                                    <input type="file"></input>
                                    <p className="file-type">Only jpg, png, doc, pdf.</p>
                                </div>
                            </div> */}

                                <input className="input-data" type="text" placeholder="Enter Course Name"></input>

                                <div className="buttons">
                                    <button className="buyNow">Buy Now </button>
                                    <button className="submit">Enquiry Now</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>



            </div>


            <div className="all-content-for-job">

                <div className="backbutton">
                    <button onClick={() => Nevigate("/ourAcdemy")}> Back </button>
                </div>
                <hr></hr>
                <div className="about-job">
                    <h1>About Job </h1>
                    <p>{data.aboutCourse}</p>
                </div>

                <div className="what-we-provide-in-course">
                    <ul>
                        <li><span>< CiVideoOn /></span>Mode of the Course LIVE + Recordings</li>
                        <li><PiListNumbersFill />No. Of Lectures 60 </li>
                        <li>< IoMdRecording />Class Recording Provided Yes</li>
                        <li>< RiPassValidLine />Doubt Classes 20 Doubt Sessions</li>
                        <li><GrValidate />Course Validity 2 Years</li>
                        <li><GrSchedule />Class Schedule LIVE </li>
                        <li>< IoMdRecording />Support </li>
                        <li>< RiPassValidLine />Job ready</li>
                        <li><GrValidate />Aviation Certification</li>
                        <li><GrSchedule />Mock Test Shedule </li>
                    </ul>
                </div>





                <div className="mobile-wrapper for-mobile-wrapper">

                    <p className="paara mob">We require your basic details to proceed with the application. This information helps us evaluate your application.</p>
                    <p className="paara mob">All fields are mandatory</p>


                    <div className="application-form-carrer-page-mobile for-acdemy-mob  ">


                        <div className="thumbnail-image">
                            <img src={data.courseImage} />
                        </div>
                        <form className="main-form  respo for-acdemy">

                            <input className="input-data" type="text" placeholder="Full Name *"></input>
                            <input className="input-data" type="number" placeholder="Mobile Number *"></input>
                            <input className="input-data" type="email" placeholder="Email id *"></input>
                            <div className="two-input-feild for-res">
                                <input className="input-data" type="number" placeholder="Mobile Number *"></input>
                                <input className="input-data" type="email" placeholder="Email id *"></input>
                            </div>

                            <div className="uploade-file">

                                <div className="resume res-responcive ">
                                    <p className="file-type"> Resume *</p>
                                    <input type="file"></input>
                                    <p className="file-type">Only jpg, png, doc, pdf </p>
                                </div>

                                <div className="Avation-Certificate res-responcive ">
                                    <p className="file-type">Avation Certificate  *</p>
                                    <input type="file"></input>
                                    <p className="file-type">Only jpg, png, doc, pdf.</p>
                                </div>
                            </div>

                            <div className="buttons">
                                <button className="reset">Reset</button>
                                <button className="submit">Submit</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

            <div className="student-reviews-main-section">
                <div className="our-sucess-story-heading">
                    <h1>Our Success Stories</h1>
                    <p>Discover inspiration and insights through recent reviews from our students. Their success stories reflect the transformative journey of learning and growth with Namo Airways .</p>
                </div>

                <div className="students-reviews">

                    <div className="students-review-cards">
                        <div className="student-image-student-name">
                            <div className="student-image">
                                <img src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_5439%2B-%2BParth%2BSingh.jpg&w=48&q=75" />
                            </div>
                            <div className="student-name">
                                <p className="name-st">Rohan</p>
                                <p className="date-st">Jan 2024</p>
                            </div>
                        </div>
                        <div className="student-content-message">
                            <p>
                                “This aviation industry course was a complete game-changer for me. The content was explained with real, practical examples and gave deep industry insights. I feel much clearer about my career direction now. Highly recommended for both beginners and aspiring professionals!”
                            </p>
                        </div>
                    </div>

                    <div className="students-review-cards">
                        <div className="student-image-student-name">
                            <div className="student-image">
                                <img src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2Fimg_Bhavya_Bhalla_3fe41efca8.jpeg%3Fupdated_at%3D2024-02-18T18%3A15%3A27.323Z&w=48&q=75" />
                            </div>
                            <div className="student-name">
                                <p className="name-st">Saurabh Yadav</p>
                                <p className="date-st">April 2023</p>
                            </div>
                        </div>
                        <div className="student-content-message">
                            <p>
                                “The teaching methods were engaging and the syllabus was well-structured according to industry requirements. I gained a deep understanding of the concepts along with hands-on knowledge. I'm really grateful to the mentors for making learning so easy and enjoyable!”
                            </p>
                        </div>
                    </div>

                    <div className="students-review-cards">
                        <div className="student-image-student-name">
                            <div className="student-image">
                                <img src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2Fc83c8091_99f4_4a50_8702_1d5a38d6fbaa_Anshika_Aggarwal_62770d2de8.jpeg&w=48&q=75" />
                            </div>
                            <div className="student-name">
                                <p className="name-st">Shalini Gupta</p>
                                <p className="date-st">March 2025</p>
                            </div>
                        </div>
                        <div className="student-content-message">
                            <p>
                                “I truly found the environment in this aviation course uplifting. The assignments and case studies really strengthened my practical knowledge. Trainers brought real field experience, which made learning so much more exciting. I’m completely satisfied with the course!”
                            </p>
                        </div>
                    </div>

                    <div className="students-review-cards">
                        <div className="student-image-student-name">
                            <div className="student-image">
                                <img src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_5439%2B-%2BParth%2BSingh.jpg&w=48&q=75" />
                            </div>
                            <div className="student-name">
                                <p className="name-st">Bittu </p>
                                <p className="date-st">Jan 2024</p>
                            </div>
                        </div>
                        <div className="student-content-message">
                            <p>
                                “As a beginner, I never felt lost at any point. The study materials, recorded lectures, and doubt support were all excellent. The clarity I gained from this course has boosted my confidence greatly. Absolutely worth every penny for me!”
                            </p>
                        </div>
                    </div>



                </div>


            </div>


        </>
    )


}

export default CourseDetails;
