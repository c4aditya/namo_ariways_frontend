import andamanPackages from "./andaman";
import { FaRupeeSign } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Filter from "./Flilter";
import { useState } from "react";

function AndmanPackage() {
    const navigate = useNavigate()
    const [showBar, setShowBar] = useState(false);
    //  console.log(keralaPackages)
    function callRequest() {
        setShowBar(!showBar);
    }

    return (
        <>
            <div className="marign-top"></div>
            <div className="top-aboutus">

                <div className="image-poster-details">
                    <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1751881431/Andaman_ng0dg6.png" />
                </div>

            </div>
            <div className="data-filet">
                <div className="main-class-of-pachage-details">
                    {andamanPackages.map((data) => (

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
                                            <ul>
                                                <li>
                                                    <span><IoMdCheckmark /></span> {data.listing.one}
                                                </li>
                                                <li>
                                                    <span><IoMdCheckmark /></span> {data.listing.two}
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
                                        <button onClick={()=> navigate("/contactUs")}>Enquiry Now</button>

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

export default AndmanPackage;
