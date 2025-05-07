import { useNavigate } from "react-router-dom";
function Packages(){
    const navigate = useNavigate()
  const handleClick = (data) => {
    
    // Option 1: Pass state (recommended for non-URL data)
    navigate(`/package/${data.id}`, { state: data });
  };

    const pachageData=[
        {
            id: 1,
            place: "Goa",
            tours: "15",
            rating: "4.8",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 2,
            place: "Kerala",
            tours: "18",
            rating: "4.9",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 3,
            place: "Rajasthan",
            tours: "25",
            rating: "4.7",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 4,
            place: "Himachal Pradesh",
            tours: "22",
            rating: "4.9",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 5,
            place: "Uttarakhand",
            tours: "12",
            rating: "4.6",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 6,
            place: "Andaman and Nicobar",
            tours: "10",
            rating: "4.8",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        },
        {
            id: 7,
            place: "Sikkim",
            tours: "8",
            rating: "4.7",
            image:"https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg"
        }
        
]
    return(
        <>
        <h1>This is my packasge</h1>
        {
            pachageData.map((data)=>(
                
                <div className="pacakage-hotels" key={data.id}>

                    <button onClick={()=>handleClick(data)}> 

                    <div className="main-package">
                        <div className="place">

                            <h1>{data.place}</h1>

                        </div>

                        <div className="package-image">
                            <img src={data.image}/>

                        </div>

                        
                    </div>
                    </button>
                </div>
            ))
        }
        </>
    )
}

export default Packages;