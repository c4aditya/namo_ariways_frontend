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
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
    const Nevigate = useNavigate();
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

    // Handler to close booklist on item click
    const handleBookListItemClick = () => {
        setBookList(false);
    };

    const [mobileNev, setMobileNev] = useState(false)
    function handleNavOnMobile() {
        setMobileNev(!mobileNev)
    }
    function hide(){
        setMobileNev(!mobileNev)
    }
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
                            <li>
                                <a href="https://facebook.com/" target="_blank" className="icon" rel="noopener noreferrer">
                                    {/* Facebook SVG */}
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" className="icon" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/" target="_blank" className="icon" rel="noopener noreferrer">
                                    {/* Instagram SVG */}
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank" className="icon" rel="noopener noreferrer">
                                    {/* LinkedIn SVG */}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li>
                                <button className="apply-button" onClick={() => Nevigate("/applyPage")}>Apply Job</button>
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
                            <NavLink className="underline" to="/OurPackages"><li>Packages</li></NavLink>
                            <NavLink className="underline" to="/aboutus"><li>About us</li></NavLink>
                            <NavLink className="underline" to="/carrer"><li className="carrer">Carrer</li></NavLink>
                            <NavLink className="underline" to="/contactUs"><li>Contact Us</li></NavLink>
                        </ul>
                    </div>
                    <div className="nav-bar-buttons">
                        <button className="signIn-button" ref={signInButtonRef} onClick={handleToggleSignIn}>
                            Sign In <span><IoIosArrowDown /></span>
                        </button>
                        <button className="three-dots-button" onClick={handleNavOnMobile}>
                            <IoReorderThreeOutline />
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
                                            <NavLink to="/" className="underline">   <li onClick={handleBookListItemClick}><span><IoIosAirplane /></span> Flight</li> </NavLink>
                                            <NavLink to="/groupDeparture" className="underline">  <li onClick={handleBookListItemClick}><span><MdOutlineGroups /></span> Group Booking</li> </NavLink>
                                            <NavLink to="/hotel" className="underline">
                                                <li onClick={handleBookListItemClick}><span><LiaHotelSolid /></span> Hotels</li>
                                            </NavLink>
                                            <NavLink to="/OurPackages" className="underline">
                                                <li onClick={handleBookListItemClick}><span><MdOutlineFlight /></span> Holidays Packages</li>
                                            </NavLink>
                                        </ul>
                                    </div>
                                    <div className="child-listing-images">
                                        <div className="flight-booking">

                                            <NavLink to="/" ><img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621032/plan_qqm7al.jpg" alt="Flight" /> </NavLink>
                                        </div>
                                        <div className="flight-booking">
                                            <NavLink to="/hotel">  <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1746621257/hotel_2_u9l1ei.jpg" alt="Hotel" /> </NavLink>

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
                                            <li><span><IoIosCall /></span> Contact us</li>
                                            <li><span><FaWhatsapp /></span> Whats App</li>
                                            <li><span><LuCircleHelp /></span> Help and FAQs</li>
                                            <li><span><IoNewspaperOutline /></span> Terms and Conditions</li>
                                        </ul>
                                    </div>
                                    <div className="child-listing-images-login">
                                        <div className="login-child-text">
                                            <div className="login-child-text-heading">
                                                <h1>Hello There</h1>
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
                {
                    mobileNev ? (
                        <div className={`side-bar-navlist ${scrolled ? 'scrolled' : ''}`}>
                            <ul>
                                <NavLink to="/" onClick={hide} className="underline"><li>Home</li></NavLink>
                                <NavLink to="/hotel"  onClick={hide} className="underline"><li>Hotel</li></NavLink>
                                <NavLink to="/groupDeparture" onClick={hide} className="underline"><li>Group Booking</li></NavLink>
                                <NavLink to="/OurPackages" onClick={hide} className="underline"><li>Packages</li></NavLink>
                                <NavLink to="/carrer"onClick={hide} className="underline"><li>Carrer</li></NavLink>
                                    <NavLink to="/contactUs" onClick={hide} className="underline"><li>Contact Us</li></NavLink>







                            </ul>
                        </div>
                    ) : (
                        <p> </p>
                    )
                }

            </nav>
        </>
    );
}

export default Navbar;
