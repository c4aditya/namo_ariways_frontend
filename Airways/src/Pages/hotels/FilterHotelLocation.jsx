import { useLocation } from "react-router-dom";
function FilterHotelLocation(){
    const location = useLocation()
    const hotel = location.state;
    console.log(hotel)

    return(

        <>
        <h1>{hotel.hotelName[2]}</h1>
        
        </>
    )
}

export default FilterHotelLocation;