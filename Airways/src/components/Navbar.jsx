import { useState, useEffect, useRef } from "react";
import { ImList2 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFlight } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineGroups } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LuCircleHelp } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [booklist, setBookList] = useState(false);
    const [signInItems, setSignInItems] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const booklistRef = useRef(null);
    const bookButtonRef = useRef(null);
    const signInRef = useRef(null);
    const signInButtonRef = useRef(null);

    function showBooklist() {
        setBookList(!booklist);
        setSignInItems(false);
    }

    function handleToggleSignIn() {
        setSignInItems(!signInItems);
        setBookList(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                booklistRef.current &&
                !booklistRef.current.contains(event.target) &&
                bookButtonRef.current &&
                !bookButtonRef.current.contains(event.target)
            ) {
                setBookList(false);
            }
            if (
                signInRef.current &&
                !signInRef.current.contains(event.target) &&
                signInButtonRef.current &&
                !signInButtonRef.current.contains(event.target)
            ) {
                setSignInItems(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // SCROLL LOGIC: Change background color on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav>
                <div className="top-nav-bar">
                    <div className="left-side">
                        <ul>
                            <li><span><IoIosCall/> </span>+91 9876533525</li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li>
                                <button className="apply-button">Apply Job </button>
                            </li>
                            <li>
                                <button className="apply-button">Join Membership</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`nav-bar${scrolled ? " nav-bar-scrolled" : ""}`}>
                    <div className="logo-nav-bar">
                        <img src="https://namoairways.com/wp-content/uploads/2024/12/Designer__1_-removebg-preview.png" alt="logo" />
                    </div>
                    <div className="nav-bar-list-itmes">
                        <ul>
                            <NavLink className="underline" to="/"><li>Home</li></NavLink>
                            <li className="book" ref={bookButtonRef} onClick={showBooklist}>
                                Book <span><IoIosArrowDown /></span>
                            </li>
                            <li>About us</li>
                            <li className="carrer">Carrer <span><IoIosArrowDown /></span></li>
                        </ul>
                    </div>
                    <div className="nav-bar-buttons">
                        <button className="signIn-button" ref={signInButtonRef} onClick={handleToggleSignIn}>
                            Sign In <span><IoIosArrowDown /></span>
                        </button>
                        <button className="three-dots-button">
                            <ImList2 />
                        </button>
                    </div>
                    <div className="listing-items">
                        {booklist && (
                            <div className="book-listing-items" ref={booklistRef}>
                                <div className="inside-listing-items">
                                    <div className="child-listing-items">
                                        <p className="child-listing-heading">Book</p>
                                        <hr className="listing-hr" />
                                        <ul>
                                            <li><span><IoIosAirplane /></span> Flight</li>
                                            <li><span><MdOutlineGroups /></span> Group Booking</li>
                                            <NavLink to="/hotel"> <li><span><LiaHotelSolid /></span> Hotels</li></NavLink>
                                            <li><span><MdOutlineFlight /></span> Holidays Packages</li>
                                        </ul>
                                    </div>
                                    <div className="child-listing-images">
                                        <div className="flight-booking">
                                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621032/plan_qqm7al.jpg"/>
                                        </div>
                                        <div className="flight-booking">
                                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621257/hotel_2_u9l1ei.jpg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {signInItems && (
                            <div className="book-listing-items" ref={signInRef}>
                                <div className="inside-listing-items">
                                    <div className="child-listing-items">
                                        <p className="child-listing-heading">Other Informations</p>
                                        <hr className="listing-hr" />
                                        <ul>
                                            <li><span><IoIosCall /></span> Contact us </li>
                                            <li><span><FaWhatsapp /></span> Whats App </li>
                                            <li><span><LuCircleHelp /></span> Help and FAQs</li>
                                            <li><span><IoNewspaperOutline /></span> Terms and Conditions</li>
                                        </ul>
                                    </div>
                                    <div className="child-listing-images-login">
                                        <div className="login-child-text">
                                            <div className="login-child-text-heading">
                                                <h1>Hello There!</h1>
                                            </div>
                                            <div className="login-child-text-para">
                                                <p>Log in to save up to 10% on your bookings.​</p>
                                            </div>
                                            <div className="login-buttons">
                                                <div className="login-para">
                                                    <p>Hurry SignUp</p>
                                                </div>
                                                <div className="both-login-buttons">
                                                    <button className="toggelButton-signup">Sign Up</button>
                                                    <button className="toggelButton-login">Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
