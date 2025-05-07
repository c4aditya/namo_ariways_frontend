import { useNavigate } from "react-router-dom";
function Packages() {
    const navigate = useNavigate()
    const handleClick = (data) => {

        // Option 1: Pass state (recommended for non-URL data)
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
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 2,
            place: "Kerala",
            tours: "18",
            rating: "4.9",
            tour: "18",
            departures: "12",
            guests: "360",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 3,
            place: "Rajasthan",
            tours: "25",
            rating: "4.7",
            tour: "30",
            departures: "20",
            guests: "520",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 4,
            place: "Himachal Pradesh",
            tours: "22",
            rating: "4.9",
            tour: "25",
            departures: "15",
            guests: "8",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 5,
            place: "Uttarakhand",
            tours: "12",
            rating: "4.6",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 6,
            place: "Andaman",
            tours: "10",
            rating: "4.8",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 7,
            place: "Sikkim",
            tours: "8",
            rating: "4.7",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 8,
            place: "Sikkim",
            tours: "8",
            rating: "4.7",
            tour: "40",
            departures: "28",
            guests: "700",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        }

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
                        <button>EXplore More </button>
                    </div>
               
                    

                </div>


                <div className="top-main-package-section">

                    <div className="side-package-image">

                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"></img>

                    </div>


                    <div className="main-package-image">
                        {
                            pachageData.map((data) => (

                                <div className="pacakage-hotels" key={data.id}>


                                    <div className="main-package ">
                                        <div className="place">
                                            <p>{data.place}</p>
                                        </div>

                                        <div className="package-image" onClick={() => handleClick(data)}>
                                            <img src={data.image} />
                                        </div>

                                        <div className="discripctio-package">

                                            <div className="tour-deperture">
                                                <div className="tours">

                                                    <p>{data.tour} tours </p>

                                                </div>

                                                <div className="deperture">
                                                    <p> |{data.departures} departure</p>

                                                </div>
                                                </div>


                                                <div className="guests">
                                                    <p>{data.guests} guests travelled</p>
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