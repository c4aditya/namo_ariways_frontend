import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
function HotelDetail() {
    const [loading, setloading] = useState(true)
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
    }, [])
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
                                    <div className="room-type">
                                        <ul>
                                            <li><sapn><MdOutlineBedroomParent /></sapn> {hotel.room.roomType}</li>
                                        </ul>

                                    </div>
                                    <div className="facility-listing">
                                        <ul>
                                            <li> <span><FaCheckCircle /> </span> {hotel.facility.one}</li>
                                            <li> <span><FaCheckCircle /> </span> {hotel.facility.two}</li>
                                        </ul>

                                    </div>
                                </div>
                                </div>
                                <div className="booked-room-type">
                                    <div className="types">
                                        <p>Room Only</p>
                                        <div className="listing">
                                            <ul>
                                                <li><span><FaCheckCircle /></span>one</li>
                                                <li><span><FaCheckCircle /></span>two</li>
                                                <li><span><FaCheckCircle /></span>three</li>
                                                <li><span><FaCheckCircle /></span>four</li>
                                                <li><span><FaCheckCircle /></span>five</li>
                                            </ul>
                                        </div>

                                        <div className="book-now-button">
                                            <button className="btn-book">Reserve Now</button>
                                        </div>

                                    </div>

                                    <div className="types">
                                        <p>Room Only</p>
                                        <div className="listing">
                                            <ul>
                                                <li><span><FaCheckCircle /></span>one</li>
                                                <li><span><FaCheckCircle /></span>two</li>
                                                <li><span><FaCheckCircle /></span>three</li>
                                                <li><span><FaCheckCircle /></span>four</li>
                                                <li><span><FaCheckCircle /></span>five</li>
                                            </ul>
                                        </div>

                                        <div className="book-now-button">
                                            <button className="btn-book">Reserve Now</button>
                                        </div>

                                    </div>

                                    <div className="types">
                                        <p>Room Only</p>
                                        <div className="listing">
                                            <ul>
                                                <li><span><FaCheckCircle /></span>one</li>
                                                <li><span><FaCheckCircle /></span>two</li>
                                                <li><span><FaCheckCircle /></span>three</li>
                                                <li><span><FaCheckCircle /></span>four</li>
                                                <li><span><FaCheckCircle /></span>five</li>
                                            </ul>
                                        </div>

                                        <div className="book-now-button">
                                            <button className="btn-book">Reserve Now</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        
                          

                        
                    )
}
        </>
    )
}

export default HotelDetail;