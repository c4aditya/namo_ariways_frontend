import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
function HotelDetail() {
    const [loading, setloading] = useState(true);
    const [toggleform, settoggleform] = useState(false);
    const location = useLocation();

    // uselocation provides the route of current page 

    const hotel = location.state.hotel;

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    function handleReserveButton() {
        console.log("The button is cliced ");
     
        settoggleform(true)
    }

    function cutForm(){
        settoggleform(false)

    }

    return (
        <>

            {
                loading ? (<div className="loading">
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                ) :
                    (
                        <div className={toggleform ? "blur-bg" : " "}>


                            <div className="hotelDetails">

                                <div className="tag-line">
                                    <p>Overview</p>
                                </div>
                                <hr></hr>
                                <div className="hotel-name-details">
                                    <div className="hotel-name">
                                        <h1>{hotel.hotelName}</h1>
                                    </div>

                                    <div className="rating">
                                        <ul>
                                            <li> <span><FaStar /></span> {hotel.rating}</li>
                                        </ul>

                                    </div>
                                </div>
                                <hr></hr>

                                <div className="image-hotel">
                                    <div className="hotel-img-one">
                                        <img src={hotel.image[0]} />
                                    </div>

                                    <div className="hotel-img-two">
                                        <img src={hotel.image[1]} />
                                    </div>
                                </div>
                                <div className="facility">
                                    <div className="facility-provide book-now-facility">
                                        <div className="room-type book-now-room">
                                            <ul>
                                                <li><sapn><MdOutlineBedroomParent /></sapn> {hotel.room.roomType}</li>
                                            </ul>

                                        </div>
                                        <hr></hr>
                                        <div className="facility-listing book-facility-listing">
                                            <ul>
                                                <li> <span><FaCheckCircle /> </span> {hotel.facility.one}</li>
                                                <li> <span><FaCheckCircle /> </span> {hotel.facility.two}</li>
                                                <li><span><FaCheckCircle /></span>one</li>
                                                <li><span><FaCheckCircle /></span>two</li>
                                                <li><span><FaCheckCircle /></span>three</li>
                                                <li><span><FaCheckCircle /></span>four</li>
                                                <li><span><FaCheckCircle /></span>five</li>
                                            </ul>

                                        </div>

                                        <div className="reserve-button">
                                            <button className="reverse-btn" onClick={handleReserveButton}>Reserve Now</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

            {
                toggleform && (
                    <div className="main-form-reserve">
                        <div className="form-data">
                          
                            <form className="hotel-booking-form">
                                <div className="top-form">
                                <div className="heading">
                                <h2>Book Your Stay</h2>
                                </div>
                                <div className="cross">
                                    <button className="cross-btn" onClick={cutForm}>
                                    <RxCross1/>
                                    </button>
                                   
                                </div>
                                </div>
                                
                               
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Check-in</label>
                                        <input type="date" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Check-out</label>
                                        <input type="date" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Adults</label>
                                        <input type="number" min="1" max="10" defaultValue="1" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Children</label>
                                        <input type="number" min="0" max="10" defaultValue="0" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Room Type</label>
                                    <select required>
                                        <option value="">Select Room Type</option>
                                        <option value="standard">Standard</option>
                                        <option value="deluxe">Deluxe</option>
                                        <option value="suite">Suite</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Special Requests</label>
                                    <textarea placeholder="Any special requests?"></textarea>
                                </div>
                                <button type="submit" className="book-btn">Book Now</button>
                            </form>

                        </div>

                       
                    </div>
                )
            }


        </>
    )
}

export default HotelDetail;