import { useEffect, useState } from "react";
import "../page.css";
import AllHotelData from "./AlllHotelsData";
import FilterHotelData from "./FilterHoteldata";
import { data, useNavigate } from "react-router-dom";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import ReviewHotel from "./ReviewHotel";

function MainHotelpage() {
    const international_Hotel_locations_Data = [
        {
            id: 1,
            name: "Honk kong",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745309422/hong-kong_gpzrrl.jpg",
        },
        {
            id: 2,
            name: "Paris",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745309195/paris_kddvgk.jpg",
        },
        {
            id: 3,
            name: "Dubai",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745309125/Dubai_jf5mo0.jpg"
        },
        {
            id: 4,
            name: "Bangkok",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745308667/bangcock_jb8m2s.jpg"
        }
    ];

    const indianHotel_Locations_Data = [
        {
            id: 1,
            name: "Jaipur",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 2,
            name: "Goa",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313713/goa_l51f7y.jpg"
        },
        {
            id: 3,
            name: "Ooty",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313930/ooty_dq2bff.jpg"
        },
        {
            id: 4,
            name: "Shimla",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313719/shimla_mgcism.jpg"
        },
        {
            id: 5,
            name: "Mussoorie",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313637/mussoorie_ccebkf.jpg"
        },
        {
            id: 6,
            name: "Nanital",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313730/nanitall_tlt5a4.jpg"
        },
        {
            id: 7,
            name: "Darjeeling ",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745314223/Darjeeling_ltwoei.jpg"
        },
        {
            id: 8,
            name: "Ladakh",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313626/ladakh_hazce3.jpg"
        }
    ];

    const [searchCity, setSearchCity] = useState("");
    const [fliterHotel, setFilterHotel] = useState([]);
    const [loading, setLoding] = useState(true);
    const navigate = useNavigate();
    // carring current date 
    const date = Date.now()
    const [posterImage, setPosterImage] = useState(
        [
            "data:image/jpeg;base64,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",

            "data:image/jpeg;base64,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",

        ]
    )
    // for indexing the image 
    const [currentIndex, setCurrentIndex] = useState(0)

    // function for the change poster image 

    function priviousImage() {
        console.log("The privious button is clicked ")
        if (currentIndex === 0) {
            setCurrentIndex(posterImage.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1)
        }

    }

    function nextImage() {
        if (currentIndex === posterImage.length - 1) {
            setCurrentIndex(currentIndex - 1);

        }
        else {
            setCurrentIndex(currentIndex + 1)
        }

    }



    function changeHandler(event) {
        setSearchCity(event.target.value);
        console.log(event.target.value);
    }

    function searhLocationHotel() {
        setLoding(true);
        const result = AllHotelData.filter((hotel) =>
            hotel.city.toLowerCase() === searchCity.toLowerCase()
        );
        // console.log(result)
        setFilterHotel(result);
        setLoding(true);
    }

    function cityImageHandler(cityName) {
        console.log("This city is clicked: ", cityName);
        const result = AllHotelData.filter((hotel) =>
            hotel.city.toLowerCase() === cityName.toLowerCase()
        );
        setFilterHotel(result);
        setLoding(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoding(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [fliterHotel]);

    return (
        <>
            {loading ? (
                <div className="loading">
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className="main-top">
                    <div className="background-poster">
                        <div className="posters">
                            <div className="privious" onClick={priviousImage}>
                                <AiOutlineLeftCircle />
                            </div>
                            <div className="poster-image">
                                <img  className="small-height" src={posterImage[currentIndex]} alt="poster-image" />
                            </div>

                            <div className="next" onClick={nextImage}>
                                <AiOutlineRightCircle />
                            </div>

                        </div>

                        <div className="search-hotels">


                            <div className="hotel-input">
                                <label>Enter the City</label>
                                <input
                                    type="text"
                                    placeholder="Enter the city name"
                                    value={searchCity}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="hotel-input">
                                <label>Check In date</label>
                                <input type="date" placeholder="DD/MM/YY"></input>

                            </div>

                            <div className="hotel-input">
                                <label>Check Out date</label>
                                <input type="date" ></input>
                            </div>

                            <div className="hotel-input">
                                <label>No of Adults</label>
                                <input type="text" placeholder="0">
                                </input>
                            </div>

                            <div className="hotel-input">
                                <label>No of Kids</label>
                                <input type="text" placeholder="Child 5yr to 11 yr">
                                </input>
                            </div>
                            <div className="hotel-search-btn">
                                <button className="btn" onClick={searhLocationHotel}>Search Hotel</button>
                            </div>

                        </div>

                    </div>

                    {fliterHotel.length > 0 ? (
                        fliterHotel.map((hotel) => (
                            <FilterHotelData key={hotel.id} hotel={hotel} />
                        ))
                    ) : (
                        <div className="main-hotel-location-class">
                            <div className="heading-hotel-location">
                                <h1>Best of International Destination</h1>
                            </div>
                            <div className="internationalLocations">
                                {international_Hotel_locations_Data.map((data) => (
                                    <div className="hotal-data" key={data.id}>
                                        <div className="internatioal_location_images">
                                            <img src={data.image} alt={data.name} loading="lazy" />
                                        </div>
                                        <div className="internatioanl_hotels_name">
                                            <p>{data.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="heading-hotel-location">
                                <h1>Best of Indian Destination</h1>
                            </div>
                            <div className="indianLocation">
                                {indianHotel_Locations_Data.map((data) => (
                                    <div className="hotal-data" key={data.id}>
                                        <button className="image-button" onClick={() => cityImageHandler(data.name)}>
                                            <div className="internatioal_location_images">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="internatioanl_hotels_name">
                                                <p>{data.name}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* hotel review  */}
            {/* 
            <section className="hotel-review">
                    <ReviewHotel/>
            </section> */}

            <section>
                <div className="content">
                    <div className="heading-content">

                        <h2>Book Hotels with Namo Airways</h2>
                        <p>
                            When planning your next trip, choosing the right airline and accommodation can make all the difference. Namo Airways, a leading travel service provider, now offers seamless hotel bookings alongside its flight services, ensuring a smooth and enjoyable journey from start to finish.
                            Finding the perfect accommodation is crucial as it can elevate your travel experience from ordinary to extraordinary. No matter if you're planning a luxurious getaway on the islands, or a budget-friendly adventure to the mountains, book hotels that are just right for you to have a comfortable and memorable stay.
                            But why choose Namo Airways for hotel bookings? Not only does it provide flights to every part of the country, but it also offers a plethora of hotel options to make your travel planning more convenient.
                            You can save big on your travel as Namo Airways offers exclusive hotel deals when you book directly using the Namo Airways app and web. Members booking flights and hotels can save up to 30% on over 5 lakh hotels. You can effortlessly book your desired accommodation across the world.
                            When embarking on your hotel booking journey, consider these key factors to ensure a seamless and enjoyable experience:
                        </p>
                    </div>

                    <div className="flight-list">
                        <div className="heading-content">
                            <h2>Popular Domestic Flights</h2>
                            <ul>
                                <li>Delhi – Mumbai Flight |</li>
                                <li>Mumbai – Delhi Flight |</li>
                                <li>Delhi – Bangalore Flight |</li>
                                <li>Bangalore – Delhi Flight |</li>
                                <li>Delhi – Hyderabad Flight |</li>
                                <li>Hyderabad – Delhi Flight |</li>
                                <li>Mumbai – Bangalore Flight |</li>
                                <li>Bangalore – Mumbai Flight |</li>
                                <li>Delhi – Kolkata Flight |</li>
                                <li>Kolkata – Delhi Flight |</li>
                                <li>Mumbai – Hyderabad Flight |</li>
                                <li>Hyderabad – Mumbai Flight |</li>
                                <li>Delhi – Chennai Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Chennai – Delhi Flight |</li>
                                <li>Mumbai – Kolkata Flight |</li>
                                <li>Kolkata – Mumbai Flight |</li>
                                <li>Bangalore – Kolkata Flight |</li>
                                <li>Kolkata – Bangalore Flight |</li>
                                <li>Bangalore – Hyderabad Flight |</li>
                                <li>Hyderabad – Bangalore Flight |</li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default MainHotelpage;
