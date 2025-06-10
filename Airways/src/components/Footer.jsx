import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import mainLogo from "../Hotel_images/main-logo.png"
function Footer() {
    const images = [
    "https://shineairways.com/assets/images/sllider-logo/1.jpg",
    "https://shineairways.com/assets/images/sllider-logo/2.jpg",
    "https://shineairways.com/assets/images/sllider-logo/3.jpg",
    "https://shineairways.com/assets/images/sllider-logo/4.jpg",
    "https://shineairways.com/assets/images/sllider-logo/5.jpg",
    "https://shineairways.com/assets/images/sllider-logo/6.jpg",
    "https://shineairways.com/assets/images/sllider-logo/7.jpg",
    "https://shineairways.com/assets/images/sllider-logo/8.jpg",
    "https://shineairways.com/assets/images/sllider-logo/9.jpg",
    "https://shineairways.com/assets/images/sllider-logo/10.jpg",
     "https://shineairways.com/assets/images/sllider-logo/11.jpg",
];

    return (
        <>
            <section>
                <hr></hr>

                   <div className="slider">
            <div className="slide-track">
                {images.concat(images).map((img, index) => (
                    <div className="slide" key={index}>
                        <img src={img} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
              

               

                 

                
            </section>
            <section className="footer">
                <div className="main-footer">

                    <div className="company">
                        <h3>COMPANY</h3>
                        <hr></hr>
                        <ul>
                            <li> <NavLink className="underline col" to="/" >Home</NavLink></li>
                            <li>Servises</li>
                            <li>Academy</li>
                            <li> <NavLink className="underline col" to="/carrer">Carrer</NavLink></li>
                            <li> <NavLink className="underline col" to="/contactUs">Contact Us</NavLink> </li>
                            <li>   <NavLink className="underline col" to="/Term_and_Condition">Term and condition</NavLink></li>
                            <li>KrifitCycling - Learn to Ride with
                                Confidence</li>
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
                            <li>Phone +91 9068236136 </li>
                            <li>For more info :- <br></br> info@namoairways.com</li>
                            <li>for Holiday Support:- <br></br>+91 9310468350</li>
                            <li> for Holiday Support Email :- <br></br> holiday@namoairways.com</li>
                            <li>For Carrer support:- <br></br>

                                hr@namoairways.com</li>


                        </ul>
                    </div>

                    <div className="logo-social-media-links">
                        <div className="logo">
                            <img src={mainLogo} alt="logo" />
                        </div>

                        <div className="para">
                            <p>At Namo Airways, we are committed to transforming your travel dreams into reality you can do any thing that makes your dream true. </p>
                        </div>
                        <hr></hr>
                        <div className="social-media-links">
                            <ul>
                                <li><a href="https://www.facebook.com/namoairways/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                    </svg>
                                </a></li>
                                <li> <a href="https://www.linkedin.com/company/namo-airways-services-india-pvt-ltd/posts/?feedView=all">

                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>  </a> </li>
                                <li> <a href="https://x.com/AirwaysNamo">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                                    </svg>  </a>
                                </li>
                                <li> <a href="https://www.instagram.com/namoairways/?hl=en">

                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                    </svg> </a> </li>
                            </ul>

                        </div>

                    </div>



                </div>

                <div className="certified">
                    <ul>
                        <li><img src="https://static.wixstatic.com/media/ecb7aa_d008b4f848cb481c8b5374a98fe83798~mv2.png/v1/fill/w_123,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%201.png" alt="certified_image"></img></li>
                        <li><img src="https://static.wixstatic.com/media/ecb7aa_21dd6f7ee17f420b8b6ae8a986427496~mv2.png/v1/fill/w_123,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%202.png" alt="certified_image"></img></li>
                        <li><img src="https://static.wixstatic.com/media/ecb7aa_1c151aff752b4ee788a5fd5ef3f02ab4~mv2.png/v1/fill/w_123,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%203.png" alt="certified_image"></img></li>
                    </ul>
                </div>

                <div className="copy-right">
                    <div className="content">
                        <h6>©2023. Namo Airways. All Rights Reserved.</h6>
                    </div>
                    <div className="copy-right-socal-meadia">
                        <ul>
                            <li><a href="https://www.facebook.com/namoairways/">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            </a>
                            </li>

                            <li> <a href="https://www.linkedin.com/company/namo-airways-services-india-pvt-ltd">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </a>
                            </li>
                            <li> <a href="https://x.com/AirwaysNamo">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                                </svg>
                            </a>
                            </li>
                            <li > <a href="https://www.instagram.com/namoairways/?hl=en">

                                <img className="footer-image-insta" src=" https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" />

                            </a>
                            </li>

                        </ul>

                    </div>


                </div>


            </section>
        </>
    )
}

export default Footer;