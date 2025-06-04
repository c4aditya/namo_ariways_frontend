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
import { NavLink, useNavigate } from "react-router-dom";


function Navbar() {
    const Nevigate = useNavigate()
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
            if (window.scrollY > 10) {
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
                            <li> <a href="https://facebook.com/" target="_blank" class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                            </a></li>
                            <li> <a href="https://twitter.com/" target="_blank" class="icon">
                           <i class="fa-brands fa-x-twitter"></i></a></li>
                            <li> <a href="https://instagram.com/" target="_blank" class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                            </a></li>
                            <li> <a href="https://linkedin.com/" target="_blank" class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                            </a></li>
                        </ul>




                    </div>
                    <div className="right-side">
                        <ul>
                            <li>
                                <button className="apply-button" onClick={()=>Nevigate("/applyPage")}>Apply Job </button>
                            </li>
                            <li>
                                <button className="apply-button join">Join Membership</button>
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
                            <NavLink className="underline" to="/OurPackages"> <li>Packages</li> </NavLink>
                            <NavLink className="underline" to="/aboutus"> <li>About us</li> </NavLink>

                            <NavLink className="underline" to="/carrer"><li className="carrer">Carrer </li></NavLink>

                            <NavLink className="underline" to="/contactUs"> <li>Contact Us</li> </NavLink>
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
                                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621032/plan_qqm7al.jpg" />
                                        </div>
                                        <div className="flight-booking">
                                            <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621257/hotel_2_u9l1ei.jpg" />
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
