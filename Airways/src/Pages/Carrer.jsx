import poster_image_aboutUs from "../videos/namo_plane_image.png"
import { IoMdTime } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Carrer() {

    const Navigate = useNavigate()

    const data = [

        {
            id: 1,
            image: "https://www.shutterstock.com/image-photo/portrait-professional-tsa-workers-international-600nw-2581105657.jpg",
            aboutJob: "Ground staff are responsible for various kinds of responsibilities, At  Airways, we provide ground staff who maintains the reputation of the airports they work for, and they are trained well for carrying out any duty on the ground. They are the ones looking after passengers from the airport to their flights",
            totalPosition:"18",
            salary:"27,000 - 35,000",
            position: "Airport Ground Staff",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",
        },

        {
            id: 2,
            image: "https://www.lot.com/content/dam/lot/lot-com/w-samolocie/session2022/crew-session/Sesja-Cabin-Crew-nowe-apaszki-i-krawaty(28).coreimg.jpg/1723632063596/Sesja-Cabin-Crew-nowe-apaszki-i-krawaty(28).jpg",
            aboutJob: "Cabin crew jobs are an integral part of the aviation industry, Where their behavior decides the image of the following airline. We at  Airways recruit skilled professionals who know how to make flight experience more comfortable with their hospitality,",
             totalPosition:"18",
              salary:"27,000 - 35,000",
            position: "Cabin Crew",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
             pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",
        },

        {
            id: 3,
            image: "https://www.airindia.com/content/dam/air-india/newsroom/press-releases/images/Air-India-Cabin-Crew.jpg",
            aboutJob: "As a Flight Attendant, you will be responsible for ensuring the safety, security, and comfort of passengers on board our aircraft. You will provide exceptional customer service, handle in-flight emergencies, and help create a welcoming environment for all travelers. This role requires professionalism, strong communication skills, and the ability to remain calm under pressur",
             totalPosition:"18",
            position: "Flight Attendent",
             salary:"27,000 - 35,000",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",


        },


        {
            id: 4,
            image: "https://media.istockphoto.com/id/546174996/photo/business-man-in-check-in-counter-with-boarding-pass.jpg?s=612x612&w=0&k=20&c=woIxJBmh-nz0WMhULNZhS2AdpnKRB2DYIaDm83b_AUQ=",
            aboutJob: "As an Airport Ticket Staff member, you will be the first point of contact for passengers at the airport. Your primary responsibility is to assist customers with ticket bookings, changes, cancellations, and provide information about flights, fares, and travel requirements. You play a crucial role in ensuring a smooth and pleasant travel experience for passengers by delivering excellent customer service and efficiently handling ticketing operations.",
             totalPosition:"18",
              salary:"27,000 - 35,000",
            position: "Ticketing Agent",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
              pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",
        },

        {
            id: 5,
             image: "https://media.istockphoto.com/id/546174996/photo/business-man-in-check-in-counter-with-boarding-pass.jpg?s=612x612&w=0&k=20&c=woIxJBmh-nz0WMhULNZhS2AdpnKRB2DYIaDm83b_AUQ=",
            aboutJob: "As an Airport Ticket Staff member, you will be the first point of contact for passengers at the airport. Your primary responsibility is to assist customers with ticket bookings, changes, cancellations, and provide information about flights, fares, and travel requirements. You play a crucial role in ensuring a smooth and pleasant travel experience for passengers by delivering excellent customer service and efficiently handling ticketing operations.",
             totalPosition:"18",
              salary:"27,000 - 35,000",
            position: "Airport Ticket Staff",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
              pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",
        },

        {
            id: 6,
            image: "https://media.istockphoto.com/id/546174996/photo/business-man-in-check-in-counter-with-boarding-pass.jpg?s=612x612&w=0&k=20&c=woIxJBmh-nz0WMhULNZhS2AdpnKRB2DYIaDm83b_AUQ=",
            aboutJob: "As an Airport Ticket Staff member, you will be the first point of contact for passengers at the airport. Your primary responsibility is to assist customers with ticket bookings, changes, cancellations, and provide information about flights, fares, and travel requirements. You play a crucial role in ensuring a smooth and pleasant travel experience for passengers by delivering excellent customer service and efficiently handling ticketing operations.",
             totalPosition:"18",
              salary:"27,000 - 35,000",
            position: "Airport Ground Staff",
            positionType: "Full time",
            qualification: "Intermediate or Equivalent",
            pointOne:"Airport Station attendant",
            pointTwo:"Airline Ticket Agent",
            pointThree:"Flight Attendant",
            pointFour:"Ground Staff",
            pointFive:"Ground Staff",
        },
    ]
    return (<>
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