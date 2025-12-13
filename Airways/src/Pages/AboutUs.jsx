import React, { useState, useEffect } from "react";
import poster_image_aboutUs from "../videos/namo_plane_image.png"

// import latter_Head_2 from "../videos/latter_Head_2.jpg"

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
            <div className="poster-section">

                <div className="main-poster-section">
                    <div className="content-carrer-page">
                        <h2>Welcome to Namo Airways !</h2>
                        <p>Namo Airways is committed to redefining the travel experience with exceptional service, innovative solutions, and a customer-first approach. We aim to build unforgettable journeys while maintaining trust, safety, and excellence as the core of who we are.</p>


                    </div>

                    <div className="image-carrer">
                        <img src="data:image/jpeg;base64,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" alt="carrer image">
                        </img>
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
                        <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765620685/Namo_Airways_Services_India_Private_Limited_page-0001_j6pac9.jpg" alt="latter-head" />
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
                                <img src="https://res.cloudinary.com/dxja3zaez/image/upload/v1765620775/wmremove-transformed-removebg-preview_k0uufc.png"></img>

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


