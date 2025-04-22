import "../page.css"
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
    ]

    const indianHotel_Locations_Data = [
        {
            id: 1,
            name: "Jaipur",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 2,
            name: "Goa",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313713/goa_l51f7y.jpg"
        },
        {
            id: 3,
            name: "Ooty",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313930/ooty_dq2bff.jpg"
        },
        {
            id: 4,
            name: "Shimla",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313719/shimla_mgcism.jpg"
        },

        {
            id: 5,
            name: "Mussoorie",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313637/mussoorie_ccebkf.jpg"
        },
        {
            id: 6,
            name: "Nanital",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313730/nanitall_tlt5a4.jpg"
        },
        {
            id: 7,
            name: "Darjeeling ",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745314223/Darjeeling_ltwoei.jpg"
        },

        {
            id: 8,
            name: "Ladakh",
             image:"https://res.cloudinary.com/dxgmovaih/image/upload/v1745313626/ladakh_hazce3.jpg"
        }
    ]
    return (

        <>

            {/* this is will shows only the internatioal location */}
            <div className="main-hotel-location-class">
            <div className="poster-image-hotel">

            </div>
           
           <div className="heading-hotel-location">
            <h1>Best of International Destination </h1>
           </div>
            <div className="internationalLocations">

                {
                    international_Hotel_locations_Data.map((data) => (
                        
                        <div className="hotal-data">

                            <div className="internatioal_location_images">
                                <img src={data.image} />
                            </div>

                            <div className="internatioanl_hotels_name">
                                <p>{data.name}</p>
                            </div>






                        </div>
                    ))
                }

            </div>

            <div className="heading-hotel-location">
            <h1>Best of Indain Destination </h1>
           </div>

            <div className="indianLocation">
                {
                    indianHotel_Locations_Data.map((data)=>(
                        <div className="hotal-data">

                        <div className="internatioal_location_images">
                            <img src={data.image} />
                        </div>

                        <div className="internatioanl_hotels_name">
                            <p>{data.name}</p>
                        </div>






                    </div>
                    ))
                }
            </div>



            </div>
        </>

    )
}
export default MainHotelpage;