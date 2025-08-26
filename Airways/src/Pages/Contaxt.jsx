import { LiaFaxSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import contact_us_poster from "../videos/contactus_poster.png"
function ContactUs() {
    return (
        <>
            <div className="marign-top">

            </div>
            <div className="top-aboutus">

                <div className="main-potser-section-image">

                    <div className="image-section">

                        <img className="image" src={contact_us_poster} alt="Image not found " />
                        <div className="overlay">
                            <div className="overlaycontent">
                                <div className="overlay-heading">
                                    <h2>Contact Us</h2>
                                </div>

                                <div className="page-link-page-title">
                                    <div className="page-link">
                                        <NavLink className="link-text" to="/">Home</NavLink>
                                    </div>
                                    <div className="mark">
                                        <p>{`>`}</p>
                                    </div>
                                    <div className="page-title">
                                        <p> Contact Us </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="top">


                <div className="contact-us-main-content">
                    <div className="content-contact-us">

                        <div className="large-heading">
                            <p>Contact Us</p>
                        </div>



                        <div className="contact-us-para">


                            <div className="contact-logo-text">

                                <ul>

                                    <li> <FaRegAddressCard />   Address :- Namo Airways D-77 Block D sector 63 Noida Uttar Pradesh</li>
                                    <li> <FaPhoneAlt />  Phone No. :- +91 9068236136</li>
                                    <li><GiRotaryPhone />Telephone No. :- +91 01204292592</li>
                                    <li> <MdAttachEmail />   email :-  hr@namoairways.com</li>
                                </ul>

                            </div>



                        </div>

                        <div className="responsive-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.31543222490075!2d77.38305229211467!3d28.618580330229065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff48e93f7d3%3A0x3954649815d0b89!2sVDS%20Technologies%20Business%20Centre!5e0!3m2!1sen!2sin!4v1736753110997!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-from">
                        <div className="large-heading contact-heading">
                            <p>Get In Touch</p>
                        </div>
                        <form className="inside-contact-from">
                            <input className="fill-contact-us" type="text" placeholder="First Name *"></input>
                            <input className="fill-contact-us"  type="text" placeholder="Last Name *"></input>

                            <input className="fill-contact-us"  type="text" placeholder="Email"></input>
                            <input className="fill-contact-us"  type="number" placeholder="Phone"></input>
                            <input className="fill-contact-us"  type="text" placeholder="About "></input>

                            <textarea className="text-area" placeholder="Message " >

                            </textarea>

                            <button className="constact-btn">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>



            </div>
        </>
    )
}

export default ContactUs; 