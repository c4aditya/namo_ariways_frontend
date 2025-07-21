import goaPackages from "./GoaData";
import { LuHotel } from "react-icons/lu";
import { GoTelescope } from "react-icons/go";
import { IoCarSportOutline } from "react-icons/io5";
import { GiHotMeal } from "react-icons/gi";
import { GiRocketFlight } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Filter from "./Flilter";
import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import { FaAngleLeft } from "react-icons/fa6";

function GoaPackage() {
    const [posterImages] = useState(
        [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    )
    console.log(posterImages.length - 1)

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextImages() {
        if (currentIndex == posterImages.length - 1) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }

    }

    function priviousImage() {

        if (currentIndex == 0) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex - 1)
        }

    }

    const navigate = useNavigate()
    const [showBar, setShowBar] = useState(false);
    //  console.log(keralaPackages)
    function callRequest() {
        setShowBar(!showBar);
    }



    return (
        <>
            <div className="marign-top"></div>
            <div className="top-class-at-package">

                <div className="left-side-top-package-class">

                    <div className="content-left-side-package-class">
                        <div className="heading-left-side">
                            <h1>Goa Packages Tour  </h1>
                        </div>

                        <div className="para-left-side">
                            <p>Relax on Goa’s sun-kissed beaches, enjoy thrilling water sports, and savor delicious seafood.
                                Discover vibrant nightlife, historic forts, and the unforgettable charm of India’s top coastal destination.</p>
                        </div>
                    </div>

                    <div className="button-book-call">
                        <button>Request for call </button>
                    </div>

                </div>

                <div className="side-images">

                    <div className="privious-poster-package-button">
                        <button onClick={priviousImage}>  <GrPrevious /> </button>
                    </div>

                    <img src={posterImages[currentIndex]} />

                    <div className="next-poster-package-button">
                        <button onClick={nextImages}> < GrNext /> </button>
                    </div>

                </div>
            </div>
            <div className="data-filet">
                <div className="main-class-of-pachage-details">
                    {goaPackages.map((data) => (

                        <div className="package-main-class" key={data.id}>
                            <div className="package-inside-image">
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div className="package-inside-details">
                                <div className="left-div-package-inside-details">
                                    <div className="package-inside-details-place">
                                        <div className="package-inside-details-place-name">
                                            <p className="group-color">Group Booking</p>
                                            <p>{data.name}</p>
                                        </div>
                                        <div className="listing-adad">
                                            <p>Facility We Provide</p>
                                            <ul>
                                                <li>
                                                    <GiHotMeal />
                                                </li>
                                                <li>
                                                    <LuHotel />
                                                </li>
                                                <li>
                                                    <GoTelescope />
                                                </li>
                                                <li>
                                                    <IoCarSportOutline />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="about-facalityes">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Days</th>
                                                        <th>Destinations</th>
                                                        <th>Type</th>
                                                    </tr>
                                                    <tr>
                                                        <td>{data.days}</td>
                                                        <td>{data.Destination}</td>
                                                        <td>{data.type}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-package-details">
                                    <div className="package-details-price">
                                        <p>Starting From</p>
                                        <p className="money"><FaRupeeSign />{data.price}</p>
                                        <p><FaPersonCircleCheck /> Per Person</p>
                                    </div>
                                    <div className="button">
                                        <button onClick={() => navigate(`/packageDetails/${data.id}`, { state: { package: data } })}>
                                            View Details
                                        </button>
                                        <button onClick={callRequest}>Enquiry Now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blur Overlay */}
                {showBar && (
                    <div
                        className="blur-overlay"
                        onClick={() => setShowBar(false)}
                    ></div>
                )}

                {/* Popup */}
                {showBar && (
                    <div className="booking-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="booking-card">
                            <div className="booking-title">
                                <p>Want Booking Now!</p>
                                <div className="booking-form-wrapper">
                                    <form>
                                        <div className="booking-field-name">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className="booking-field-contact">
                                            <input type="email" placeholder="Enter Email" />
                                            <input type="number" placeholder="Enter Number" />
                                        </div>
                                        <div className="booking-field-range">
                                            <input type="number" placeholder="From" />
                                            <input type="number" placeholder="To" />
                                        </div>
                                        <div className="booking-btn-row">
                                            <button>Enquiry Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default GoaPackage;
