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
                    <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765620955/DeWatermark.ai_1756448119929_f7bycy.jpg" alt="carrer image">
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
                        <img src="data:image/jpeg;base64,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" alt="our process step 1 img"></img>
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
                        <img src="https://img.freepik.com/free-vector/online-chat-customer-bot-messenger-hand-holding-mobile-phone-with-messages-from-chatbot-screen-flat-vector-illustration-artificial-intelligence-users-support-service-concept_74855-21236.jpg?t=st=1767025353~exp=1767028953~hmac=2313976013613b9dd2c8b17763ad55090edb2c4059e52f39d6f958a01e69c850&w=740" alt="our process step 1 img"></img>
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
                        <img src="https://img.freepik.com/free-vector/meeting-background-with-business-women_23-2147608191.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740&q=80" alt="our process step 1 img"></img>
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
                        <img src="https://img.freepik.com/free-vector/salesman-saleswoman-office_23-2147884349.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740&q=80" alt="our process step 1 img"></img>
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