import { LuHotel } from "react-icons/lu";
import { GoTelescope } from "react-icons/go";
import { IoCarSportOutline } from "react-icons/io5";
import { GiHotMeal } from "react-icons/gi";
import { GiRocketFlight } from "react-icons/gi";
import { IoMdCheckmark } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import "../page.css"
function GroupDeprature(){
const GroupData  = [
  {
    id:1,
    image:"https://media.easemytrip.com/media/Deal/DL638320257188161634/SightSeeing/SightSeeing2MOde0.jpg",
    place:"Kashmir Group Departure",
    para:" 2N Srinagar | 1N Pahalagam | 1N Gulmarg",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Dal Lake Shikara ",
      Point_2 :"Gulmarg Gondola",
      point_3 :"Mughal Gardens",
    },
    price:"23,000"
  },

  {
    id:2,
    image:"https://media.easemytrip.com/media/Deal/DL638288249745594835/SightSeeing/SightSeeingcSGKgj.jpg",
    place:"Kerala Group Departure",
    para:" 2N Munnar | 1N Thekkady | 1N Alleppey",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Backwater ",
      Point_2 :"Tea Garden Tour",
      point_3 :"Periyar Wildlife ",
    },
    price:"21,500"
  },

  {
    id:3,
    image:"https://media.easemytrip.com/media/Deal/DL638125976390169186/SightSeeing/SightSeeingojvuQy.jpg",
    place:"Goa Group Departure",
    para:" 2N North Goa | 2N South Goa",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Beach Parties",
      Point_2 :"Dudhsagar Waterfall",
      point_3 :"Fort Aguada",
    },
    price:"18,000"
  },

  {
    id:4,
    image:"https://media.easemytrip.com/media/Deal/DL638379136951647788/SightSeeing/SightSeeingxZZKrZ.jpg",
    place:"Rajasthan Group Departure",
    para:" 2N Jaipur | 1N Jodhpur | 1N Udaipur",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Amber Fort Visit",
      Point_2 :"Lake Pichola Boat",
      point_3 :"Mehrangarh Fort",
    },
    price:"20,500"
  },

  {
    id:5,
    image:"https://media.easemytrip.com/media/Deal/DL18103115395753-0A1A63CB-4AB6-4041-9A3A-4ECED724E31A/SightSeeing/SightSeeingbnJS56.jpg",
    place:"Sikkim Group Departure",
    para:" 2N Gangtok | 1N Pelling | 1N Lachung",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Nathula Pass",
      Point_2 :"Tsomgo Lake",
      point_3 :"Yumthang Valley",
    },
    price:"24,000"
  },

  {
    id:6,
    image:"https://media.easemytrip.com/media/Deal/DL637692189243055906/SightSeeing/SightSeeingNbWxOn.jpg",
    place:"Himachal Pradesh Group Departure",
    para:" 2N Manali | 1N Shimla | 1N Kasol",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Rohtang Pass",
      Point_2 :"Mall Road Shimla",
      point_3 :"Parvati Valley Trek",
    },
    price:"22,500"
  },

  {
    id:7,
    image:"https://media.easemytrip.com/media/Deal/DL638320257188161634/SightSeeing/SightSeeing2MOde0.jpg",
    place:"Ladakh Group Departure",
    para:" 2N Leh | 1N Nubra Valley | 1N Pangong Lake",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Pangong Lake",
      Point_2 :"Magnetic Hill",
      point_3 :"Nubra Valley Camel Safari",
    },
    price:"32,000"
  },

  {
    id:8,
    image:"https://media.easemytrip.com/media/Deal/DL637055269884506101/Beach/BeachrQuWQ6.jpg",
    place:"Andaman & Nicobar Group Departure",
    para:" 2N Port Blair | 2N Havelock Island",
    icons:{
      icon_1 :<LuHotel/>,
      icon_2 :<GoTelescope/>,
      icon_3 :<IoCarSportOutline/>,
      icon_4:<GiHotMeal/>,
      icon_5:<GiRocketFlight/>
    },
    points:{
      point_1 :"Radhanagar Beach",
      Point_2 :"Cellular Jail",
      point_3 :"Snorkeling at Elephant Beach",
    },
    price:"29,000"
  },
];



    return(
        <>
        <div className="marign-top">
              <div className="top-aboutus">
            
                        <div className="main-potser-section-image">
            
                            <div className="image-section">
            
                                <img className="image" src="https://cncwebworld.com/image/policy/terms-&-conditions.jpg" />
            
                                {/* <div className="over-lay-poster-contents">
                   
                                                   <p>About us </p>
                   
                                               </div> */}
                            </div>
                        </div>
                    </div>
                  <div className="package-heading">
                    <h2>Let's Go with friends</h2>
                  </div>
                    <div className="top">
                    
                      <div className="main-package-class">  

                        {
                            GroupData.map((card)=>(
                                <div className="cards">

                                    <div className="image-package-card">
                                        <img src={card.image}/>
                                    </div>   
                                    <div className="warapper">
                                    <div  className="place-name-pacakage-card" >
                                      <p>{card.place}</p>
                                     </div>

                                     <div className="night-stay">
                                        <p>{card.para}</p>
                                      </div>    

                                      <div className="icons">
                                        <div className="icone">
                                            <span>{card.icons.icon_1}</span>
                                         </div>   

                                         <div className="icone">
                                            <span>{card.icons.icon_2}</span>
                                         </div> 

                                         <div className="icone">
                                            <span>{card.icons.icon_3}</span>
                                         </div> 

                                         <div className="icone">
                                            <span>{card.icons.icon_4}</span>
                                         </div> 

                                         <div className="icone">
                                            <span>{card.icons.icon_5}</span>
                                         </div> 
                                        </div>

                                        <div className="points-package-card">
                                            <ul>
                                                <li><span><IoMdCheckmark/></span>{card.points.point_1}</li>
                                                <li><span><IoMdCheckmark/></span>{card.points.Point_2}</li>
                                                <li><span><IoMdCheckmark/></span>{card.points.point_3}</li>
                                            </ul>
                                        </div>

                                        <div className="package-price-button">
                                            <div className="price-package">
                                               
                                                <ul>
                                                
                                                    <li><span><LiaRupeeSignSolid/></span>{card.price}</li>
                                                </ul>
                                             </div>

                                             <div className="view-package">
                                                <button>View Package</button>
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

export default GroupDeprature;