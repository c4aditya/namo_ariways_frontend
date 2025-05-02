import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
function Footer(){
    return(
        <>
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
                            <li>< CiFacebook /></li>
                            <li><CiLinkedin /></li>
                            <li><CiTwitter/></li>
                            <li><CiInstagram/></li>
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