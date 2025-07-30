import { PiPhoneCallLight } from "react-icons/pi";
import { LiaRupeeSignSolid, LiaHotelSolid } from "react-icons/lia";
import { GiMeal } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { PiExclamationMark } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
function PackageDetailsinfo() {
    const location = useLocation();
    const data = location.state
    console.log(data)
    return (
        <>

            <div className="marign-top">
                <div className="package-details-info-main-class">
                    <div className="image-and-contents-for-package-details-info">

                        <div className="info-main-contaier">

                            <div className="package-info-name">
                                <p>{data.name}</p>
                                <p>{data.totalDays}</p>
                            </div>

                            <div className="image-package-details-info">
                                <img src={data.image} />
                            </div>

                            <div className="package-info-content">
                                <p className="ab-p">About Package</p>
                                <p className="pg-dis">{data.description}</p>
                            </div>

                            <div className="days-discripction">

                                <p className="ab-p">Itinerary <span className="d-w">[ Day wise ]</span> </p>

                                <ul>
                                    <li><span>Day 1<TfiLocationPin /> </span>{data.daysDetails.one}</li>
                                    <li><span>Day 2<TfiLocationPin /></span>{data.daysDetails.two}</li>
                                    <li><span>Day 3<TfiLocationPin /></span>{data.daysDetails.three}</li>
                                    <li><span>Day 4<TfiLocationPin /></span>{data.daysDetails.four}</li>
                                    <li><span>Day 5<TfiLocationPin /></span>{data.daysDetails.five}</li>
                                </ul>

                            </div>

                        </div>
                    </div>


                    <div className="card-which-which-cantain-card-with-price">

                        <div className="card-top-price">
                            <div className="price-cards">

                                <div className="content-p">
                                    <p className="st-fro">Starting from</p>
                                    <p className="pr-b">{data.price} <span>Per Person</span></p>
                                </div>

                                <div className="buttons-card-package">
                                    <button>ENQUIRY NOW</button>
                                </div>

                            </div>

                            <div className="durection-pckage">
                                <div className="d-p">
                                    <p><sapn className="dur-p">Durection : </sapn>{data.totalDays}</p>
                                </div>

                                <div className="p-v">
                                    <p><span className="p-ps"><TfiLocationPin /> Place to visit :</span> {data.name}</p>
                                </div>
                            </div>

                            <div className="all-inclusaive pc">
                                <p>
                                    All Inclusive <span><PiExclamationMark /></span>
                                </p>
                                <ul>
                                    <li><LiaHotelSolid /> <span>Hotel</span></li>
                                    <li><GiMeal /><span>Meal</span></li>
                                    <li><IoCarSportOutline /><span>Transport</span></li>
                                    <li><BsCamera /><span>Sightseens</span></li>
                                    <li><GrUserManager /> <span>Tour Manager</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default PackageDetailsinfo;