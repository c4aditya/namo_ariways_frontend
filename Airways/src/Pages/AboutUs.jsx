import poster_image_aboutUs from "../videos/namo_plane_image.png"
import { GiHotMeal } from "react-icons/gi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { PiFirstAidKitLight } from "react-icons/pi";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrMap } from "react-icons/gr";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
// import { CiFlag1 } from "react-icons/ci";
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
    ]
    return (
        <>

            <div className="marign-top">

            </div>
            <div className="top-aboutus">

                <div className="main-potser-section-image">

                    <div className="image-section">

                        <img className="image" src={poster_image_aboutUs} />

                        {/* <div className="over-lay-poster-contents">

                                <p>About us </p>

                            </div> */}
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

            {/* our achivements  */}

            <div className="background-color">
                <div className="top ach">
                    <div className="achivement-top">
                        <div className="heading-achivement">
                            <div className="heading-ach">
                                <h1>We're curating experiences that</h1>

                            </div>

                            <div className="para-ach">
                                <p>Present you a Perfect vacation</p>

                            </div>
                        </div>

                        <div className="top-achivement-content">

                            <div className="icon-text">
                                <div className="icon-ach">
                                    <IoHappyOutline />
                                </div>

                                <div className="counts">
                                    7,500 +
                                </div>

                                <div className="text-ach">
                                    <p>Happy Clinet </p>

                                </div>
                            </div>


                            <div className="icon-text">
                                <div className="icon-ach">
                                    <TfiCup />
                                </div>

                                <div className="counts">
                                    176 +
                                </div>

                                <div className="text-ach">
                                    <p>Tour completed</p>

                                </div>
                            </div>


                            <div className="icon-text">
                                <div className="icon-ach">
                                    <LiaCertificateSolid />
                                </div>

                                <div className="counts">
                                    345 +
                                </div>

                                <div className="text-ach">
                                    <p>Tour Experts</p>

                                </div>
                            </div>


                            <div className="icon-text">
                                <div className="icon-ach">
                                    <GrMap />
                                </div>

                                <div className="counts">
                                    1789 +
                                </div>

                                <div className="text-ach">
                                    <p>Tour destination</p>

                                </div>
                            </div>


                            <div className="icon-text">
                                <div className="icon-ach">
                                    <MdOutlineRocketLaunch />
                                </div>

                                <div className="counts">
                                    <p>Our Mission</p>
                                </div>

                                <div className="text-ach">
                                    <p>Being Best Travelar Componey in india </p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* our achivements end  */}
            <div className="top">


                <div className="about-us-thing-one-roof">

                    <div className="content-we-provide">
                        <div className="heading-weProvide">
                            <h1>All inclusive tours</h1>
                        </div>

                        <div className="para-weProvide">

                        </div>

                    </div>

                    <div className="main-weProvide">
                        {
                            provideData.map((data) => (

                                <div className="data" key={data.id}>

                                    <div className="image-we-provide">
                                        <div className="i">

                                            {data.iocn}

                                        </div>

                                        <div className="title-weProvide">
                                            <h4>{data.title}</h4>
                                        </div>

                                    </div>

                                    <div className="main-content-we-provide">


                                        <div className="descripction-weProvide">
                                            <p>{data.descripction}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
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
                                    <li className="small-heading h-m"><span>< GiArcheryTarget/></span> Our Mission</li>
                                </ul>
                            </div>

                            <div className="para-mission"> <p> Our mission is to connect people and places with safe, reliable, and innovative air travel solutions. As a dedicated player in the airline industry, we strive to make air travel accessible and affordable for all, while upholding the highest standards of safety, comfort, and customer service. We are committed to fostering trust and satisfaction
                                among our passengers by delivering seamless journeys, promoting diversity and respect, and embracing cutting-edge technology to enhance every aspect of the travel experience. At the heart of our mission is a promise to enrich lives, support communities, and contribute to the sustainable growth of global aviation. </p> </div>

                        </div>

                        <div className="mission-and-vision-image">

                            <img className="mv-image" src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        </div>

                    </div>

                    {/* our vesion  */}
                      
                       <div className="our-mission">
                          <div className="mission-and-vision-image">

                            <img className="mv-image" src="https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        </div>
                        <div className="mission-and-vision-content">
                            <div className="heading-mission">
                                <ul>
                                    <li className="small-heading h-m"><span>< GiArcheryTarget/></span> Our Vision</li>
                                </ul>
                            </div>

                            <div className="para-mission"> <p> Our mission is to connect people and places with safe, reliable, and innovative air travel solutions. As a dedicated player in the airline industry, we strive to make air travel accessible and affordable for all, while upholding the highest standards of safety, comfort, and customer service. We are committed to fostering trust and satisfaction
                                among our passengers by delivering seamless journeys, promoting diversity and respect, and embracing cutting-edge technology to enhance every aspect of the travel experience. At the heart of our mission is a promise to enrich lives, support communities, and contribute to the sustainable growth of global aviation. </p> </div>

                        </div>

                      

                    </div>
                    
                    


                </div>
            </section>







        </>
    )
}

export default Aboutus;