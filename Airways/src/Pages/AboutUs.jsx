import React, { useState, useEffect } from "react";
import poster_image_aboutUs from "../videos/namo_plane_image.png"

import latter_Head_2 from "../videos/latter_Head_2.jpg"

import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineContentPasteSearch } from "react-icons/md";

import { SiComma } from "react-icons/si";
import gr_1 from "../Hotel_images/gr1.png"
import gr_2 from "../Hotel_images/gr2.png"
import CeoAvatar from "../Hotel_images/ceoAvtar.png"
import { CiFlag1 } from "react-icons/ci";
import { GiFallingStar } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
import ClientReview from "../components/ClientReview";
import { NavLink } from "react-router-dom";

function Typewriter({ text, speed = 25 }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        setDisplayedText(""); // Reset on new text

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayedText}</span>;
}

function Aboutus() {

    const provideData = [
        {
            id: 1,
            title: "Product Research",
            descripction: "Namo Airway's itineraries go through continuous research & improvement checks",
            iocn: <MdOutlineContentPasteSearch />
        },
        {
            id: 2,
            title: "Tour Managers",
            descripction: "350+ Tour Managers celebrating life with thousands of travellers everyday",
            iocn: <CiFlag1 />
        },
        {
            id: 3,
            title: "All-inclusive",
            descripction: "Namo Airway's tours are all-inclusive with no hidden costs",
            iocn: <GiFallingStar />
        },
        {
            id: 4,
            title: "Guide",
            descripction: "The tour manager is with you throughout the tour",
            iocn: <FaRegThumbsUp />
        },
        {
            id: 5,
            title: "Air & VISA",
            descripction: "With a dedicated team, all your Air & VISA needs are taken care of",
            iocn: <IoTicketOutline />
        },
        {
            id: 6,
            title: "24x7 Connect",
            descripction: "Our Guest Relations team in available for you 24x7 all throughou",
            iocn: <TbHours24 />
        },
    ];

    // Certificate content
    const certificateHeading = "   Bharat Gaurav Ratna Shri Sammaan Council Certificate [BGSSC]";


    return (
        <>
            <div className="marign-top"></div>
            <div className="top-aboutus">
                <div className="main-potser-section-image">
                    <div className="image-section">

                        <img className="image" src={poster_image_aboutUs} />

                        <div className="overlay">
                                                     
                            <h1>About us </h1>
                            <div className="page-link-page-title">
                                <div className="page-link">
                                     <NavLink className="link-text" to="/">Home</NavLink> 
                                </div>
                                <div className="mark">
                                    <p>{`>`}</p>
                                </div>
                                <div className="page-title">
                                    <p> About us </p>
                                </div>

                            </div>
                           

                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="top">
                <div className="about-us-content">
                    <div className="about-us-top-content">
                        <div className="about-us-heading">
                            <p className="small-heading">Get About Us - </p>
                            <p className="large-heading">Welcome to Namo Airways – Your Trusted Travel Companion!</p>
                        </div>
                        <div className="about-us-paragraph">
                            <p>
                                At Namo Airways, we are committed to transforming your travel dreams into reality. As a leading tour and travel service provider, we specialize in curating affordable, customized, and seamless travel experiences for every traveler.

                                Whether you are planning a family vacation, a romantic getaway, an adventurous escape, or a business trip, our expert team ensures a stress-free and unforgettable journey. With a focus on affordability, comfort, and reliability, we offer a wide range of travel solutions tailored to suit your needs.

                                Founded by passionate travelers, Namo Airways was born from a desire to make exploring the world accessible and enjoyable for everyone. Over the years, we have helped countless clients discover new destinations, create lasting memories, and experience the joy of travel without hassle.

                                Our values are rooted in exceptional customer service, transparency, and a commitment to responsible tourism. We believe in supporting local communities, promoting sustainable travel, and always putting our travelers’ needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mission-and-vision ">
                <div className="top">
                    <div className="heading-weProvide m-and-v-h ">
                        <h1>Our Misson and Vision </h1>
                    </div>
                    <div className="our-mission">
                        <div className="mission-and-vision-content">
                            <div className="heading-mission">
                                <ul>
                                    <li className="small-heading h-m"><span>< GiArcheryTarget /></span> Our Mission</li>
                                </ul>
                            </div>
                            <div className="para-mission">
                                <p> Our mission is to connect people and places with safe, reliable, and innovative air travel solutions. As a dedicated player in the airline industry, we strive to make air travel accessible and affordable for all, while upholding the highest standards of safety, comfort, and customer service. We are committed to fostering trust and satisfaction
                                    among our passengers by delivering seamless journeys, promoting diversity and respect, and embracing cutting-edge technology to enhance every aspect of the travel experience. At the heart of our mission is a promise to enrich lives, support communities, and contribute to the sustainable growth of global aviation. </p>
                            </div>
                        </div>
                        <div className="mission-and-vision-image">
                            <img className="mv-image" src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    <div className="our-mission">
                        <div className="mission-and-vision-image">
                            <img className="mv-image" src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740" />
                        </div>
                        <div className="mission-and-vision-content">
                            <div className="heading-mission">
                                <ul>
                                    <li className="small-heading h-m"><span>< GiArcheryTarget /></span> Our Vision</li>
                                </ul>
                            </div>
                            <div className="para-mission">

                                <p>
                                    Our vision is to become the world’s most trusted, innovative, and inclusive airline, setting new benchmarks in the aviation industry by consistently delivering exceptional travel experiences. We aspire to create a future where air travel is not just a means of transportation, but a bridge that connects dreams, opportunities, and cultures across the globe.

                                    We envision a world where every journey with us is defined by the highest standards of safety, comfort, and hospitality, ensuring that every passenger feels valued, respected, and cared for. By harnessing the power of advanced technology and sustainable practices, we aim to redefine convenience and efficiency in air travel, making it seamless and accessible for all.

                                    We are dedicated to empowering our employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="top">
                <div className="latter-head">
                    <div className="content-latterhead">
                        <p className="small-heading">
                            <Typewriter text={certificateHeading} speed={30} />
                        </p>
                        <p className="color-gray">
                            The Bharat Gaurav Ratna Shri Sammaan Council Certificate is a prestigious award given to individuals and organizations who have made significant contributions to society and the nation. This certificate is for those who have used their knowledge, resources, time, effort, and power not just for personal growth, but for improving the lives of millions and creating a substantial impact. <br></br> <br></br>

                            This includes, but is not limited to, people in-
                            Social Work ,
                            Civil Services (IAS, IPS officers, etc.)
                            Politics (Members of Parliament, Union Cabinet members, etc.)
                            Industry,
                            Education,
                            Health Service,
                            Research and Development,
                            Gau Sewa (Cow Welfare),
                            Nation Service (e.g., Border Security Force, Police). <br></br> <br></br>

                            Apart from these, people working in arts, culture, environmental protection, and other fields who are making a difference in society are also considered. The main aim of this award is to honor those who show a true spirit of excellence and service to humanity, who go beyond their professional duties to bring positive change and help in nation-building. These are the people who inspire others and set an example through their dedication and hard work. <br></br> <br></br>

                            The Bharat Gaurav Ratna Shri Award Council (also known as Bharat Gaurav Ratna Shri Sammaan Council) is a non-profit organization based in India. It is registered with the Delhi Government's National Capital Territory. It is approved by the Government of India's NITI Aayog. It is a member of the Quality Council of India (an autonomous body of the Government of India). It is ISO 9001:2015 certified.


                        </p>
                    </div>
                    <div className="image_latter_head">
                        <img src={latter_Head_2} alt="latter-head" />
                    </div>
                </div>
            </div>

            <section>
                <div className="">
                    <div className="our-founder">
                        <div className="heading-weProvide m-and-v-h ">
                            <h2>What our founder say's -</h2>
                        </div>
                        <div className="image-founder">

                            <img src={CeoAvatar} alt="ceo avtar image"></img>

                        </div>

                        <div className="position-founder">

                            <h2><i>Founder & CEO</i></h2>

                        </div>

                        <div className="mesasge-our-client">

                            <p>
                                <span className="rotate">
                                    <SiComma /><SiComma />
                                </span>
                                At Namo Airways, we take great pride in being a trusted brand with a long-standing presence in the industry. Over the years, we have built a reputation for reliability and excellence, offering a wide range of opportunities in the travel and hospitality sector. Our commitment extends beyond just providing hotel and flight services—we actively work to help students secure placements, ensuring 100% trust and guaranteed results. With Namo Airways, you can be confident that you are partnering with a platform dedicated to your success, whether you are seeking travel solutions or career opportunities
                                <span className="rotate-rigth">
                                    <SiComma /><SiComma />
                                </span>           </p>

                        </div>

                        <div className="grantee-poster">
                            <div className="first-image">
                                <img src={gr_1}></img>

                            </div>

                            <div className="first-image">
                                <img src={gr_2}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className=" top about-us-thing-one-roof">
                <div className="content-we-provide">
                    <div className="heading-weProvide">
                        <h1>All inclusive tours</h1>
                    </div>
                    <div className="para-weProvide"></div>
                </div>
                <div className="main-weProvide">
                    {provideData.map((data) => (
                        <div className="data" key={data.id}>
                            <div className="image-we-provide">
                                <div className="i">
                                    {data.iocn}
                                </div>
                                <div className="title-weProvide">
                                    <h4>{data.title}</h4>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="main-content-we-provide">
                                <div className="descripction-weProvide">
                                    <p>{data.descripction}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <ClientReview />
        </>
    )
}

export default Aboutus;


