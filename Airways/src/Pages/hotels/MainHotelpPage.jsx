import { useEffect, useState } from "react";
import "../page.css";
import AllHotelData from "./AlllHotelsData";
import FilterHotelData from "./FilterHoteldata";

function MainHotelpage() {
    const international_Hotel_locations_Data = [
        {
            id: 1,
            name: "Honk kong",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745309422/hong-kong_gpzrrl.jpg",
        },
        {
            id: 2,
            name: "Paris",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745309195/paris_kddvgk.jpg",
        },
        {
            id: 3,
            name: "Dubai",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745309125/Dubai_jf5mo0.jpg"
        },
        {
            id: 4,
            name: "Bangkok",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745308667/bangcock_jb8m2s.jpg"
        }
    ];

    const indianHotel_Locations_Data = [
        {
            id: 1,
            name: "Jaipur",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 2,
            name: "Goa",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313713/goa_l51f7y.jpg"
        },
        {
            id: 3,
            name: "Ooty",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313930/ooty_dq2bff.jpg"
        },
        {
            id: 4,
            name: "Shimla",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313719/shimla_mgcism.jpg"
        },
        {
            id: 5,
            name: "Mussoorie",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313637/mussoorie_ccebkf.jpg"
        },
        {
            id: 6,
            name: "Nanital",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313730/nanitall_tlt5a4.jpg"
        },
        {
            id: 7,
            name: "Darjeeling ",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745314223/Darjeeling_ltwoei.jpg"
        },
        {
            id: 8,
            name: "Ladakh",
            image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313626/ladakh_hazce3.jpg"
        }
    ];

    const [searchCity, setSearchCity] = useState("");
    const [fliterHotel, setFilterHotel] = useState([]);
    const [loading, setLoding] = useState(true);

    function changeHandler(event) {
        setSearchCity(event.target.value);
        console.log(event.target.value);
    }

    function searhLocationHotel() {
        setLoding(true);
        const result = AllHotelData.filter((hotel) =>
            hotel.city.toLowerCase() === searchCity.toLowerCase()
        );
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
                        <div className="search-hotels">
                            <input
                                type="text"
                                placeholder="Enter the city name"
                                value={searchCity}
                                onChange={changeHandler}
                            />
                            <button className="btn" onClick={searhLocationHotel}>Search Hotel</button>
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
                                        <button onClick={() => cityImageHandler(data.name)}>
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
        </>
    );
}

export default MainHotelpage;
