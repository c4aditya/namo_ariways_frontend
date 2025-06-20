import { NavLink, useNavigate } from "react-router-dom";
import video from "../Hotel_images/video_main_package.mp4"
function Packages() {
    const navigate = useNavigate()
    const handleClick = (data) => {

        
        navigate(`/package/${data.id}`, { state: data });
    };

    const pachageData = [
        {
            id: 1,
            place: "Goa",
            tours: "15",
            rating: "4.8",
            tour: "10",
            departures: "10",
            guests: "290",
            image: "https://images.emtcontent.com/holiday-img/home-img/thailand.png"
        },
        {
            id: 2,
            place: "Kerala",
            tours: "18",
            rating: "4.9",
            tour: "18",
            departures: "12",
            guests: "360",
            image: "https://images.emtcontent.com/holiday-img/home-img/kerala-tymltd.webp"
        },
        {
            id: 3,
            place: "Jammu And Kashmir",
            tours: "25",
            rating: "4.7",
            tour: "30",
            departures: "20",
            guests: "520",
            image: "https://media.easemytrip.com/media/Deal/DL638379136951647788/SightSeeing/SightSeeingxZZKrZ.jpg"
        },
        {
            id: 4,
            place: "Himachal Pradesh",
            tours: "22",
            rating: "4.9",
            tour: "25",
            departures: "15",
            guests: "8",
            image: "https://images.emtcontent.com/holiday-img/home-img/north-east.png"
        },
        {
            id: 5,
            place: "Uttarakhand",
            tours: "12",
            rating: "4.6",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://media.easemytrip.com/media/Deal/DL638320257188161634/SightSeeing/SightSeeing2MOde0.jpg"
        },
        {
            id: 6,
            place: "Andaman",
            tours: "10",
            rating: "4.8",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://lp-cms-production.imgix.net/2019-06/2977fdc408231b88a1ac983673230e37-andaman-islands.jpg"
        },
        {
            id: 7,
            place: "Sikkim",
            tours: "8",
            rating: "4.7",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://images.emtcontent.com/holiday-img/home-img/goa-handpckd.webp"
        },
        {
            id: 8,
            place: "Nanital",
            tours: "8",
            rating: "4.7",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://media.istockphoto.com/id/471622053/photo/lake-in-mountains.jpg?s=612x612&w=0&k=20&c=RgLwCoNpPbogSo5Nu5Je-nZDZeFjYB2Dp_1R7o3f2TE="
        },


    ]
    return (
        <>

            <div className="top">

                <div className="poster-package">

                    <div className="top-text-packages">

                        <div className="heading-package">
                            <h3>Our Packages </h3>
                        </div>

                        <div className="para-package">
                            <p>Always the right choice! Proven & trusted by thousands!</p>
                        </div>

                    </div>

                    <div className="buttons-packages">
                        <NavLink to="OurPackages" ><button>Explore More </button> </NavLink>
                    </div>



                </div>


                <div className="top-main-package-section">

                    <div className="side-package-image">

                        {/* <img src="https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp"></img> */}
                        <video src={video} autoPlay muted loop style={{ width: "100%", height: "auto" }} />

                         
                    </div>


                    <div className="main-package-image">
                        {
                            pachageData.map((data) => (

                                <div className="pacakage-hotels" key={data.id}>


                                    <div className="main-package ">


                                        <div className="package-image" onClick={() => handleClick(data)}>
                                            <img src={data.image} />
                                            <div className="overlay-color">
                                                <div className="place">
                                                    <p>{data.place}</p>
                                                </div>
                                                <div className="discripctio-package">

                                                    <div className="tour-deperture">
                                                        <div className="tours">

                                                            <p>{data.tour} tours </p>

                                                        </div>

                                                        <div className="deperture">
                                                            <p> | {data.departures} departure</p>

                                                        </div>
                                                    </div>


                                                    <div className="guests">
                                                        <p>{data.guests} guests travelled</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Packages;