import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
function FilterHotelData({ hotel }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Nevigate = useNavigate();
    // const [selectedHotle , setSelectedHotel] = useState(null)

    function previousImage() {
        console.log("Previous Button is clicked");
        setCurrentIndex((prevIndex) => {
            // Return the updated index
            return prevIndex === 0 ? hotel.image.length - 1 : prevIndex -1;
        });
    }

    function nextImage() {
        console.log("Next Button is clicked");
        setCurrentIndex((prevIndex) => {
            // Return the updated index
            return prevIndex === hotel.image.length - 1 ? 0 : prevIndex + 1;
        });
    }

    function handleViewHotelDetail(){    
        // setSelectedHotel(hotel)

       Nevigate("/viewHotelDetails", { state: { hotel } });
    }

    return (
        <>
            <div className="filterHotelPage">
                <div className="filter-hotel-details">

                    <div className="filter-hotel-image">
                        <div className="previous-image" onClick={previousImage}>
                             <CiCircleChevLeft/>
                        </div>
                        <div className="hotel-main-image">
                            <img src={hotel.image[currentIndex]} alt="Hotel Image" />
                        </div>
                        <div className="next-image" onClick={nextImage}>
                        <CiCircleChevRight />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="filter-hotel-about">
                        <div className="hotel-name-details">

                           
                            <div className="hotelname">
                                <h2>{hotel.hotelName}</h2>
                                <div className="hotel-landmark">
                                    <p>{hotel.landmark}</p>
                                </div>
                            </div>

                          
                           
                            <div className="rating">
                                <ul>
                                <li> <span><FaStar/></span> {hotel.rating}</li>
                                </ul>
                               
                            </div>
                        </div>

                        <div className="facility">
                            <div className="facility-provide">
                                <div className="room-type">
                                    <ul>
                                        <li><sapn><MdOutlineBedroomParent/></sapn> {hotel.room?.roomType}</li>
                                    </ul>
                                    
                                </div>
                                <div className="facility-listing">
                                    <ul>
                                    <li> <span><FaCheckCircle/> </span> {hotel.facility?.one}</li>
                                    <li> <span><FaCheckCircle/> </span> {hotel.facility?.two}</li>
                                    </ul>
                                    
                                </div>
                            </div>

                            <div className="book-now-price-section">
                                <div className="book-now">
                                    <button className="btn-bookNow" onClick={handleViewHotelDetail}>View Details</button>
                                </div>
                                <div className="price">
                                    <ul>
                                        <li><span><RiMoneyRupeeCircleLine/></span>{hotel.price}</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterHotelData;
