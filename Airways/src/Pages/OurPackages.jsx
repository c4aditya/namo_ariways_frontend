import { IoIosPeople } from "react-icons/io";
import ClientReview from "../components/ClientReview";
import { NavLink } from "react-router-dom";
import { CiWarning } from "react-icons/ci";

import Package_img  from "../Hotel_images/Package_Poster_Hotels.png";

import poster_image_aboutUs from "../videos/package_poster.png"
function OurPackages() {

    return (
        <>
            <div className="marign-top"></div>
            <div className="top-aboutus">
                <div className="main-potser-section-image ">
                    <div className="image-section position ">
                        <div className="position">
                            <img className="image" src="https://res.cloudinary.com/dxgmovaih/image/upload/v1751029767/White_Green_Illustrated_Travel_Twitter_Header_1_e1zmqy.png"/>
                            <div className="overlay">
                                <div className="overlaycontent">
                                    <div className="overlay-heading">
                                        <h2>Our Packages </h2>
                                    </div>

                                    <div className="page-link-page-title">
                                        <div className="page-link">
                                            <NavLink className="link-text" to="/">Home</NavLink>
                                        </div>
                                        <div className="mark">
                                            <p>{`>`}</p>
                                        </div>
                                        <div className="page-title">
                                            <p>  Packages</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="packages-options">
                            <div className="package-option-under">
                
                            <div className="package-image-text">
                                <button>
                                    <ul>
                                        <NavLink className="underline black" to="/groupDeparture" ><li> <img src="https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png"></img> Group Departure</li> </NavLink>
                                    </ul>

                                </button>
                            </div>

                            <div className="package-image-text">
                                <button>
                                    <ul>
                                        <NavLink className="underline black" to="/honeymoon" ><li> <img src="https://res.cloudinary.com/dcatvkbzi/image/upload/v1765007095/240_F_275236189_rNxaGcQBetPVIclxs0k7mDCRvXnQgueO_p1o2za.jpg"></img> Honeymoon</li> </NavLink>
                                    </ul>

                                </button>
                            </div>

                            <div className="package-image-text">
                                <button>
                                    <ul>
                                        <NavLink className="underline black" to="/deveotinal" ><li> <img src="https://res.cloudinary.com/dcatvkbzi/image/upload/v1765007310/240_F_990712618_JNpZo1GsZwB1AHY6nbruNDIcPojkiPS0_afu7k9.jpg"></img> Devotional</li> </NavLink>
                                    </ul>

                                </button>
                            </div>

                            <div className="package-image-text">
                                <button>
                                    <ul>
                                        <li> <img src="https://res.cloudinary.com/dcatvkbzi/image/upload/v1765007490/istockphoto-577963472-612x612_px7mhb.jpg"></img> International Packages </li>
                                    </ul>

                                </button>
                            </div>
                        </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* our destinaction  */}

            <div className="top our-best-destinations">

                <div className="heaing-our-best-destnations">
                    <div className="heading-package">
                        <p>Deals You Can't Miss</p>
                    </div>

                    <div className="">
                        <p>Travel beyond boundaries with incredible savings</p>
                    </div>

                    <div className="buttons-packages">
                        <button >Explore More </button>
                    </div>
                </div>

                <div className="inside-our-best-destinations">
                    <div className="left-side-our-best-destinations">

                        <div className="top-left-side">

                            <div className="top-left-side-image">

                                <div className="main-image">

                                    <img src="https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp"></img>

                                    <div className="place-name">

                                        <p className="light-small-para">Andaman</p>
                                        <p className="small-para">5 Nights / 6 Days</p>

                                    </div>

                                </div>



                            </div>

                            <div className="bottom-left-side-image">

                                <div className="main-image bt">
                                    <img src="https://images.emtcontent.com/holiday-img/home-img/kerala-tymltd.webp"></img>
                                    <div className="place-name">

                                        <p className="light-small-para">Kerala</p>
                                        <p className="small-para">3 Nights / 4 Days</p>

                                    </div>
                                </div>

                                <div className="main-image bt">
                                    <img src="https://images.emtcontent.com/holiday-img/home-img/north-east.png"></img>

                                    <div className="place-name">

                                        <p className="light-small-para">Himachal</p>
                                        <p className="small-para"> Nights 6 / 7 Days</p>

                                    </div>
                                </div>

                            </div>



                        </div>




                    </div>

                    <div className="mid-side-our-best-destinations">

                        <div className="main-image md">
                            <img  className="poster-package-image" src={Package_img}></img>
                            <div className="place-name">

                                {/* <p className="light-small-para">Goa</p>
                                <p className="small-para">3 Nights / 6 Days</p> */}

                            </div>
                        </div>

                    </div>


                    <div className="rigth-side-our-best-destinations">

                        <div className="main-image">
                            <img src="https://images.emtcontent.com/holiday-img/home-img/bali.png"></img>
                            <div className="place-name">

                                <p className="light-small-para">Rajasthan</p>
                                <p className="small-para">5 Nights / 6 Days</p>

                            </div>
                        </div>

                        <div className="main-image">
                            <img src="https://images.emtcontent.com/holiday-img/home-img/goa-handpckd.webp"></img>
                            <div className="place-name">

                                <p className="light-small-para">South India</p>
                                <p className="small-para">6 Nights / 7 Days</p>

                            </div>
                        </div>

                    </div>


                </div>


            </div>


            <ClientReview />


            <div className="top package-descripction">
                <div className="info-box">
                    <div className="info-heading-div">
                        <h4 className="info-heading larger">Book Your Holiday With Namo Airways</h4>
                    </div>
                    <div className="info-para-div">
                        <p className="info-para">
                            Book Your Holiday Packages With Namo Airways and discover a world of meticulously curated, affordable itineraries designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both, our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience the perfect escape with our exceptional itineraries.
                        </p>
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-heading-div">
                        <h4 className="info-heading">Enjoy Seamless Booking At Budget-Friendly Prices!</h4>
                    </div>
                    <div className="info-para-div">
                        <p className="info-para">
                            Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations, preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a smooth start to your travel adventure.
                            <br /><br />
                            Unlock unbeatable savings on your next getaway with us, your ultimate travel companion! Discover a world of affordable packages customised to meet the diverse needs of every traveller. Embark on a mountain escape or a city adventure with our exclusive travel at competitive prices and leverage exclusive discounts, ensuring your travel is as economical as it is enjoyable. Don’t miss out on it, and book your next vacation with us to experience the perfect blend of luxury and value!
                        </p>
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-heading-div">
                        <h4 className="info-heading">Create Memories That Last A Lifetime!</h4>
                    </div>
                    <div className="info-para-div">
                        <p className="info-para">
                            Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family, we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details, guaranteeing a seamless and memorable experience. Start your adventure with Namo Airways today and cherish every moment of your journey.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OurPackages;