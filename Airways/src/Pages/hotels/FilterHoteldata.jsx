import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function FilterHotelData({ hotel }) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

                    <div className="filter-hotel-about">
                        <div className="hotel-name-details">

                           
                            <div className="hotelname">
                                <h1>{hotel.hotelName}</h1>
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
                                    <p>{hotel.room?.roomType}</p>
                                </div>
                                <div className="facility-listing">
                                    <ul>
                                    <li>{hotel.facility?.one}</li>
                                    <li>{hotel.facility?.two}</li>
                                    </ul>
                                    
                                </div>
                            </div>

                            <div className="book-now-price-section">
                                <div className="book-now">
                                    <button className="btn">Book Now</button>
                                </div>
                                <div className="price">
                                    <h1>{hotel.price}</h1>
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
