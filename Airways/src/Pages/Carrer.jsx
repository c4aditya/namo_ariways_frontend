import poster_image_carrer from "../videos/carrer_poster.png"
import { IoMdTime } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import D0 from "../Hotel_images/D0.jpg"
function Carrer() {

    const Navigate = useNavigate()

    const data = [

        {

            id: 1,
            image: "https://www.shutterstock.com/image-photo/portrait-professional-tsa-workers-international-600nw-2581105657.jpg",
            aboutJob: "Ground staff are responsible for various kinds of responsibilities. At Airways, we provide ground staff who maintain the reputation of the airports they work for, and they are well trained for carrying out any duty on the ground.",
            totalPosition: "12",
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
            image: "https://www.lot.com/content/dam/lot/lot-com/w-samolocie/session2022/crew-session/Sesja-Cabin-Crew-nowe-apaszki-i-krawaty(28).coreimg.jpg/1723632063596/Sesja-Cabin-Crew-nowe-apaszki-i-krawaty(28).jpg",
            aboutJob: "Cabin crew jobs are an integral part of the aviation industry, where their behavior shapes the airline's image. At Airways, we recruit skilled professionals who enhance the flight experience with exceptional hospitality.",
            totalPosition: "18",
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
            image: "https://www.airindia.com/content/dam/air-india/newsroom/press-releases/images/Air-India-Cabin-Crew.jpg",
            aboutJob: "Flight Attendants ensure passenger safety, comfort, and service on board. At Airways, our attendants provide excellent hospitality and handle in-flight needs with professionalism and care.",
            totalPosition: "16",
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
            image: "https://media.istockphoto.com/id/546174996/photo/business-man-in-check-in-counter-with-boarding-pass.jpg?s=612x612&w=0&k=20&c=woIxJBmh-nz0WMhULNZhS2AdpnKRB2DYIaDm83b_AUQ=",
            aboutJob: "Ticketing Agents are the first point of contact for passengers, assisting with bookings, changes, and travel information. At Airways, our agents ensure a smooth travel experience through excellent customer service and efficient ticketing operations.",
            totalPosition: "10",
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
            image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/career/2023/7/commuterstandingcounterwhileattendantcheckinghispassport621096984017.jpg?size=624:351",
            aboutJob: "Airport Ticket Staff are the first point of contact for passengers, assisting with bookings, changes, and travel information. At Airways, our staff ensures a smooth travel experience with excellent customer service and efficient ticketing operations.",
            totalPosition: "8",
            salary: "20,000 - 26,000",
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
            image: "https://assets-jb.fmg-services.co.uk/AJS/uploads/hub/advices/iTFbbshuL5B1n4G6XJmPdz1Hjz3WJnAZlBvnI2XS.png",
            aboutJob: "Airline Supervisors oversee ground operations, ensuring staff efficiency and smooth passenger services. At Airways, our supervisors coordinate teams, manage daily activities, and resolve issues to maintain high standards of safety and customer satisfaction.",
            totalPosition: "5",
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
            image: D0,
            aboutJob: "Back Office Executives handle administrative tasks and ensure internal operations run efficiently. At Airways, our back office team supports data processing, manages documentation, and coordinates with various departments to maintain organizational workflow and accuracy.",
            totalPosition: "4",
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
  image: "https://www.bigbraincreation.com/webimages/job-vacancies/telecaller-job-vacancy.jpg",
  aboutJob: "Telecallers handle outbound and inbound calls to assist customers, promote services, and resolve queries efficiently. At Airways, our telecalling team ensures clear communication, maintains service standards, and enhances customer engagement through professional interaction.",
  totalPosition: "6",
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
        <div className="top-aboutus">

            <div className="main-potser-section-image">

                <div className="image-section">

                    <img className="image" src={poster_image_carrer} />
                    <div className="overlay">
                        <div className="overlaycontent">
                            <div className="overlay-heading">
                                <h2>Career</h2>
                            </div>

                            <div className="page-link-page-title">
                                <div className="page-link">
                                    <NavLink className="link-text" to="/">Home</NavLink>
                                </div>
                                <div className="mark">
                                    <p>{`>`}</p>
                                </div>
                                <div className="page-title">
                                    <p> Career </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="top">

            <div className="about-us-content">

                <div className="about-us-top-content">
                    <div className="about-us-heading">
                        <p className="small-heading">Carres - </p>

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

            <div className="main-position-card">

                {
                    data.map((items) => (

                        <div className="position-cards" key={items.id}>

                            <div className="inside-postion-card">

                                <div className="image-position-card">
                                    <div className="image-job">

                                        <img className="position-image" src={items.image} alt="postion-images "></img>

                                    </div>


                                    <div className="descripction-job">

                                        <div className="small-heading">
                                            <p className="small-heading op">Position</p>
                                            <p >{items.position}</p>
                                            <hr></hr>

                                        </div>
                                        <div className="about-job">

                                            <p>{items.aboutJob}</p>




                                        </div>
                                        <hr></hr>

                                        <div className="pointsName">


                                            <div className="left-points">
                                                <p className="small-heading res ">Responsibilities</p>
                                                <ul>
                                                    <li> <span><MdDone /></span> {items.pointOne}</li>
                                                    <li><span><MdDone /></span> {items.pointTwo}</li>
                                                    <li><span><MdDone /></span> {items.pointThree}</li>
                                                    <li><span><MdDone /></span> {items.pointFour}</li>
                                                    <li><span><MdDone /></span> {items.pointFive}</li>
                                                </ul>

                                            </div>

                                            <div className="right-points">
                                                <p className="small-heading res">Position Detials</p>

                                                <ul>
                                                    <li><span><IoMdTime /></span> {items.positionType}</li>
                                                    <li><span><MdDone /></span>  {items.qualification}</li>
                                                    <li className="bold"><span><MdDone /></span> Total Posts :-  {items.totalPosition}</li>
                                                    <li className="bold"><span><MdDone /></span> Salary :- {items.salary}</li>
                                                </ul>

                                            </div>

                                        </div>
                                        <div className="apply-button">

                                            <button className="position-apply-button" onClick={() => Navigate("/applyPage")}>Apply now</button>

                                        </div>
                                    </div>
                                </div>




                            </div>

                        </div>

                    ))}

            </div>

        </div>
    </>
    )
}

export default Carrer;