import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
function Footer() {
    return (
        <>
            <section>
                <hr></hr>
                <div className="top top-more-details">
                 
                    <div className="main-more-detils">
                        <div className="more-details">

                            <div className="icon-text-details">

                                <div className="more-details-icon">
                                    <PiBuildingOfficeLight />

                                </div>

                                <div className="more-deatis-heading">
                                    <p>Our Office</p>

                                </div>
                            </div>

                            <div className="more-details-para">
                                <p>Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                            </div>

                            <div className="link">
                                <p>Locate</p>
                            </div>
                        </div>

                        <div className="more-details">

                            <div className="icon-text-details">

                                <div className="more-details-icon">
                                    < MdOutlinePhoneCallback/>

                                </div>

                                <div className="more-deatis-heading">

                                    <p>Call us </p>

                                </div>
                            </div>
                        
                            <div className="more-details-para">
                                <p> assist in planning & booking your perfect vacation.locate Us
                                    Call us
                                    Request a quote, or just chat about your next vacation. We're always happy to help!</p>
                            </div>

                            <div className="link">

                            <p>27383735245</p>

                        </div>
                        </div>

                  

                        <div className="more-details">

                            <div className="icon-text-details">

                                <div className="more-details-icon">
                                    <MdOutlineMarkEmailRead />

                                </div>

                                <div className="more-deatis-heading">
                                    <p>Write an Email</p>

                                </div>
                            </div>

                            <div className="more-details-para">
                                <p>Be it an enquiry, feedback or a simple suggestion, write to us.</p>
                            </div>

                            <div className="link">
                                <p>componey@gmail.com</p>
                            </div>
                        </div>

                        <div className="more-details">

                            <div className="icon-text-details">

                                <div className="more-details-icon">
                                    <PiLinkSimpleBold/>

                                </div>

                                <div className="more-deatis-heading">

                                    <p>Connect with us </p>

                                </div>
                            </div>

                               <div className="social-media-links top-footer">
                            <ul>
                                <li><a href="https://www.facebook.com/namoairways/">  < CiFacebook /></a></li>
                                <li> <a href="https://www.linkedin.com/company/namo-airways-services-india-pvt-ltd/posts/?feedView=all"><CiLinkedin /></a> </li>
                                <li> <a href="https://x.com/AirwaysNamo"> <CiTwitter /> </a> </li>
                                <li> <a href="https://www.instagram.com/namoairways/?hl=en"><CiInstagram /></a> </li>
                            </ul>

                        </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="main-footer">

                    <div className="company">
                        <h3>COMPANY</h3>
                        <hr></hr>
                        <ul>
                            <li>Home</li>
                            <li>Servises</li>
                            <li>Academy</li>
                            <li>Carrer</li>
                            <li>Contact Us</li>
                            <li>Term and condition</li>
                        </ul>
                    </div>

                    <div className="company">
                        <h3>SERVICES</h3>
                        <hr></hr>
                        <ul>
                            <li>All Indian Tours</li>
                            <li>Premium Packages</li>
                            <li>International Packages</li>

                        </ul>
                    </div>

                    <div className="company">
                        <h3>CONTACTS</h3>
                        <hr></hr>
                        <ul>
                            <li>Home</li>
                            <li>Servises</li>
                            <li>Academy</li>
                            <li>Carrer</li>
                            <li>Contact Us</li>
                            <li>Term and condition</li>
                        </ul>
                    </div>

                    <div className="logo-social-media-links">
                        <div className="logo">
                            <img src="https://namoairways.com/wp-content/uploads/2024/12/Designer__1_-removebg-preview.png" alt="logo" />
                        </div>

                        <div className="para">
                            <p>At Namo Airways, we are committed to transforming your travel dreams into reality you can do any thing that makes your dream true. </p>
                        </div>
                        <hr></hr>
                        <div className="social-media-links">
                            <ul>
                                <li><a href="https://www.facebook.com/namoairways/">  < CiFacebook /></a></li>
                                <li> <a href="https://www.linkedin.com/company/namo-airways-services-india-pvt-ltd/posts/?feedView=all"><CiLinkedin /></a> </li>
                                <li> <a href="https://x.com/AirwaysNamo"> <CiTwitter /> </a> </li>
                                <li> <a href="https://www.instagram.com/namoairways/?hl=en"><CiInstagram /></a> </li>
                            </ul>

                        </div>
                    </div>

                </div>

                <div className="copy-right">
                    <div className="content">
                        <h5>©2023. Namo Airways. All Rights Reserved.</h5>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Footer;