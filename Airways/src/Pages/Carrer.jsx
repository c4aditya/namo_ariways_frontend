import poster_image_carrer from "../videos/carrer_poster.png"
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import JobTable from "../components/TableData";
function Carrer() {

    const Navigate = useNavigate()

    const data = [

        {

            id: 1,
            on: "On Site",
            place: "Hiring",
            location: "Pan India",
            aboutJob: "Ground staff are responsible for various kinds of responsibilities. At Airways, we provide ground staff who maintain the reputation of the airports they work for, and they are well trained for carrying out any duty on the ground.",
            totalPosition: "10",
            jobId: "NACJ 126787",
            salary: "21,000 - 28,000",
            position: "Airport Ground Staff",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne: "Passenger Assistance",
            pointTwo: "Ticketing & Check-in",
            pointThree: "Baggage Handling",
            pointFour: "Flight Boarding Support",
            pointFive: "Airport Coordination"


        },

        {
            id: 2,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Cabin crew jobs are an integral part of the aviation industry, where their behavior shapes the airline's image. At Airways, we recruit skilled professionals who enhance the flight experience with exceptional hospitality.",
            totalPosition: "14",
            jobId: "NACJ 1673652",
            salary: "30,000 - 38,000",
            position: "Cabin Crew",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne: "Passenger Greeting",
            pointTwo: "Safety Demonstration",
            pointThree: "In-flight Service",
            pointFour: "Emergency Assistance",
            pointFive: "Cabin Cleanliness"
        },

        {
            id: 3,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Flight Attendants ensure passenger safety, comfort, and service on board. At Airways, our attendants provide excellent hospitality and handle in-flight needs with professionalism and care.",
            totalPosition: "13",
            jobId: "NACJ 987656",
            position: "Flight Attendant",
            salary: "28,000 - 36,000",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne: "Passenger Safety Briefing",
            pointTwo: "Emergency Response",
            pointThree: "In-flight Service",
            pointFour: "Customer Assistance",
            pointFive: "Cabin Preparation"
        },



        {
            id: 4,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Ticketing Agents are the first point of contact for passengers, assisting with bookings, changes, and travel information. At Airways, our agents ensure a smooth travel experience through excellent customer service and efficient ticketing operations.",
            totalPosition: "11",
            jobId: "NACJ 987656",
            salary: "22,000 - 28,000",
            position: "Ticketing Agent",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne: "Ticket Booking Support",
            pointTwo: "Flight Information Desk",
            pointThree: "Booking Amendments",
            pointFour: "Customer Query Handling",
            pointFive: "Payment Processing"
        },


        {
            id: 5,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Airport Ticket Staff are the first point of contact for passengers, assisting with bookings, changes, and travel information. At Airways, our staff ensures a smooth travel experience with excellent customer service and efficient ticketing operations.",
            totalPosition: "10",
            salary: "20,000 - 26,000",
            jobId: "NACJ 987656",
            position: "Airport Ticket Staff",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne: "Ticket Booking Support",
            pointTwo: "Flight Information Desk",
            pointThree: "Booking Amendments",
            pointFour: "Customer Query Handling",
            pointFive: "Payment Processing"
        },


        {
            id: 6,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Airline Supervisors oversee ground operations, ensuring staff efficiency and smooth passenger services. At Airways, our supervisors coordinate teams, manage daily activities, and resolve issues to maintain high standards of safety and customer satisfaction.",
            totalPosition: "13",
            jobId: "NACJ 871256",
            salary: "35,000 - 45,000",
            position: "Airline Supervisor",
            positionType: "Full time",
            qualification: "Graduate or Equivalent",
            pointOne: "Team Coordination",
            pointTwo: "Staff Supervision",
            pointThree: "Operational Planning",
            pointFour: "Issue Resolution",
            pointFive: "Service Quality Control"
        },
        {
            id: 7,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Back Office Executives handle administrative tasks and ensure internal operations run efficiently. At Airways, our back office team supports data processing, manages documentation, and coordinates with various departments to maintain organizational workflow and accuracy.",
            totalPosition: "19",
            jobId: "NACJ 657824",
            salary: "22,000 - 29,000",
            position: "Back Office Executive",
            positionType: "Full time",
            qualification: "Graduate or Equivalent",
            pointOne: "Data Management",
            pointTwo: "Documentation Handling",
            pointThree: "Internal Coordination",
            pointFour: "Workflow Monitoring",
            pointFive: "Process Accuracy Checks"
        },

        {
            id: 8,
            place: "Hiring",
            on: "On Site",
            location: "Pan India",
            aboutJob: "Telecallers handle outbound and inbound calls to assist customers, promote services, and resolve queries efficiently. At Airways, our telecalling team ensures clear communication, maintains service standards, and enhances customer engagement through professional interaction.",
            totalPosition: "15",
            jobId: "NACJ 942356",
            salary: "18,000 - 25,000",
            position: "Telecaller",
            positionType: "Full time",
            qualification: "12th Pass or Graduate",
            pointOne: "Customer Interaction",
            pointTwo: "Service Promotion",
            pointThree: "Query Resolution",
            pointFour: "Call Documentation",
            pointFive: "Follow-up Communication"
        }



    ]
    return (<>
        <div className="marign-top">

        </div>

        <div className="poster-section">

            <div className="main-poster-section">
                <div className="content-carrer-page">
                    <h2>Welcome to Namo Airways !</h2>
                    <p>Join Namo Airways and immerse yourself in a dynamic workplace, inspiring colleagues, and a supportive, people-focused culture designed to help you thrive and advance in your career.</p>

                    <div className="viwe-button caution-button-flex">

                        <button className="view-op">View Opportunity
                        </button>

                        
                    </div>
                </div>

                <div className="image-carrer">
                    <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1752581109/Career_Image_f3wzhd.webp" alt="carrer image">
                    </img>
                </div>


            </div>

            <div className="buttons-caution-absolute">
                <button onClick={()=> Navigate("/caution")} className="caution-op">Caution
                        </button>
            </div>
        </div>

        <div className="top">

            <div className="about-us-content">

                <div className="about-us-top-content">
                    <div className="about-us-heading">
                        <p className="small-heading"> Career - </p>

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
        </div>


        <div className="main-position-card">

            {
                data.map((carrerData) => (
                    <div onClick={() => Navigate('/applyPage', { state: carrerData })} className="main-carrer-data-cards">

                        <div className="place-title">
                            <p>{carrerData.place}</p>
                        </div>

                        <div className="job-position">
                            <p>{carrerData.position}</p>
                        </div>

                        <div className="job-type">

                            <p><span>< IoMdTime /></span>{carrerData.positionType}</p>

                        </div>

                        <div className="job-location">
                            <p><span><IoLocationOutline /></span>{carrerData.location}</p>
                        </div>

                        <div className="arrow">
                            <button onClick={() => Navigate('/applyPage', { state: carrerData })}><IoArrowForwardCircleOutline /></button>
                        </div>

                    </div>
                ))

            }

        </div>

      <JobTable/>

        <div className="position-not-listed top">
            <p>Eager to join our team, but don’t see a role that matches your skills?
            </p>

            <p>Email your resume at <span className="higlight">hr@namoairways.com</span> and our team will reach out to you.</p>
        </div>

        <div className="our-hiring-process">

            <div className="our-hiring-process-heading">

                <h1>Our Hiring Process</h1>

            </div>

            <div className="our-hiring-process-para">
                <p>We are on an exciting mission to make affordability accessible to everyone, everywhere. Our team is always eager to welcome people who bring genuine enthusiasm to their work.</p>

                <p>Because true enthusiasm is invaluable—it fuels innovation and drives progress more than almost anything else. With this kind of dedication, courage, and inner drive, ordinary people can achieve truly remarkable things.</p>
            </div>

            <div className="our-hiring-process-images">

                <div className="step1">

                    <div className="step-image">
                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1752559485/20944142-removebg-preview_eatmfh.png" alt="our process step 1 img"></img>
                    </div>

                    <div className="step-para">
                        <div className="heading-steps">
                            <h2>Document Verification</h2>
                        </div>

                        <div className="para-step-process">
                            <p>
                                We verify your submitted documents to ensure their authenticity and accuracy. This helps maintain trust and security throughout the onboarding process.
                            </p>
                        </div>
                    </div>


                    <div className="steps-line">
                        <b>---------------</b>
                    </div>

                </div>



                <div className="step1">

                    <div className="step-image">
                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1752559881/20945411-removebg-preview_ej9rkv.png" alt="our process step 1 img"></img>
                    </div>

                    <div className="step-para">
                        <div className="heading-steps">
                            <h2>Phonic Interview</h2>
                        </div>

                        <div className="para-step-process">
                            <p>
                                A short phonic interview is conducted to evaluate your communication and verbal clarity.
                                This helps us better understand your speaking skills and overall fit for the role.
                            </p>
                        </div>
                    </div>


                    <div className="steps-line">
                        <b>---------------</b>
                    </div>

                </div>




                <div className="step1">

                    <div className="step-image">
                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1752562217/pqcjcqj2iz5ski8byjlx-removebg-preview_bpxwdx.png" alt="our process step 1 img"></img>
                    </div>

                    <div className="step-para">
                        <div className="heading-steps">
                            <h2>HR Round</h2>
                        </div>

                        <div className="para-step-process">
                            <p>
                                The HR round is conducted to discuss your expectations, work culture, and career goals.
                                This helps ensure your values align with us.
                            </p>
                        </div>
                    </div>


                </div>



            </div>

            <div className="main-div-last-step">

                <div className="last-step ">

                    <div className="step-image">
                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1752560483/people-celebrating-goal-achievement-holding-trophy_23-2148825609-removebg-preview_suknyq.png" alt="our process step 1 img"></img>
                    </div>

                    <div className="step-para">
                        <div className="heading-steps">
                            <h2>Welcome Onboard</h2>
                        </div>

                        <div className="para-step-process">
                            <p>
                                Congratulations on joining our team!
                                We're excited to start this journey with you.
                                Get ready for a smooth and supportive onboarding experience.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    </>
    )
}

export default Carrer;