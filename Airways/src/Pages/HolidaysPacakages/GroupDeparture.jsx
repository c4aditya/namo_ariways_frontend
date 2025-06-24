import { LuHotel } from "react-icons/lu";
import { GoTelescope } from "react-icons/go";
import { IoCarSportOutline } from "react-icons/io5";
import { GiHotMeal } from "react-icons/gi";
import { GiRocketFlight } from "react-icons/gi";
import { IoMdCheckmark } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import "../page.css";
import EnquirNow from "./Enquiry";
import { useState } from "react";
import poster_image_aboutUs from "../../videos/namo_plane_image.png"
function GroupDeprature() {
  const [from, setForm] = useState(false);

  const GroupData = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750680506/Red_and_White_Modern_Grunge_Kashmir_Travel_Instagram_Post_tmvycw.png",
      place: "Kashmir Group Departure",
      para: " 2N Srinagar | 1N Pahalagam | 1N Gulmarg",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Dal Lake Shikara ",
        Point_2: "Gulmarg Gondola",
        point_3: "Mughal Gardens",
      },
      price: "23,000"
    },

    {
      id: 2,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750679610/White_and_Blue_Minimalist_Kerala_Travel_Instagram_Post_tifofs.png",
      place: "Kerala Group Departure",
      para: " 2N Munnar | 1N Thekkady | 1N Alleppey",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Backwater ",
        Point_2: "Tea Garden Tour",
        point_3: "Periyar Wildlife ",
      },
      price: "21,500"
    },

    {
      id: 3,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750678599/Blue_Goa_Travel_Package_Instagram_Post_in_Gatsby_Style_hbyi2h.png",
      place: "Goa Group Departure",
      para: " 2N North Goa | 2N South Goa",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Beach Parties",
        Point_2: "Dudhsagar Waterfall",
        point_3: "Fort Aguada",
      },
      price: "18,000"
    },

    {
      id: 4,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750681168/Yellow_and_Orange_Modern_Travel_YouTube_Thumbnail_rqosoz.png",
      place: "Rajasthan Group Departure",
      para: " 2N Jaipur | 1N Jodhpur | 1N Udaipur",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Amber Fort Visit",
        Point_2: "Lake Pichola Boat",
        point_3: "Mehrangarh Fort",
      },
      price: "20,500"
    },

    {
      id: 5,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750681733/Blue_and_White_Modern_Sikkim_India_Tour_and_Travel_Promotion_Instagram_Post_frhago.png",
      place: "Sikkim Group Departure",
      para: " 2N Gangtok | 1N Pelling | 1N Lachung",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Nathula Pass",
        Point_2: "Tsomgo Lake",
        point_3: "Yumthang Valley",
      },
      price: "24,000"
    },

    {
      id: 6,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750682220/White_and_Blue_Decorative_Minimalist_Himachal_Pradesh_Travel_Instagram_Post_wfp9oa.png",
      place: "Himachal Pradesh Group Departure",
      para: " 2N Manali | 1N Shimla | 1N Kasol",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Rohtang Pass",
        Point_2: "Mall Road Shimla",
        point_3: "Parvati Valley Trek",
      },
      price: "22,500"
    },

    {
      id: 7,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750682731/Blue_and_White_Modern_India_Ladakh_Travel_Sale_Flyer_zke0ar.png",
      place: "Ladakh Group Departure",
      para: " 2N Leh | 1N Nubra Valley | 1N Pangong Lake",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Pangong Lake",
        Point_2: "Magnetic Hill",
        point_3: "Nubra Valley Camel Safari",
      },
      price: "32,000"
    },

    {
      id: 8,
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750682960/Blue_and_White_Clean_Grid_Andaman_Travel_and_Vacation_Deals_Facebook_Post_kvgwdn.png",
      place: "Andaman & Nicobar Group Departure",
      para: " 2N Port Blair | 2N Havelock Island",
      icons: {
        icon_1: <LuHotel />,
        icon_2: <GoTelescope />,
        icon_3: <IoCarSportOutline />,
        icon_4: <GiHotMeal />,
        icon_5: <GiRocketFlight />
      },
      points: {
        point_1: "Radhanagar Beach",
        Point_2: "Cellular Jail",
        point_3: "Snorkeling at Elephant Beach",
      },
      price: "29,000"
    },

    {
  id: 9,
  image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1750767119/Blue_and_White_Photo_Rishikesh_Travel_Instagram_Post_xme2xc.png",
  place: "Rishikesh Group Departure",
  para: "2N Rishikesh | 1N Camp Stay",
  icons: {
    icon_1: <LuHotel />,
    icon_2: <GoTelescope />,
    icon_3: <IoCarSportOutline />,
    icon_4: <GiHotMeal />,
    icon_5: <GiRocketFlight />
  },
  points: {
    point_1: "River Rafting in Ganga",
    Point_2: "Visit to Ram Jhula & Laxman Jhula",
    point_3: "Evening Ganga Aarti at Triveni Ghat"
  },
  price: "8,500"
},


  ];



  return (
    <>
      <div className="marign-top">
        <div className="top-aboutus">
          <div className="main-potser-section-image ">
            <div className="image-section position ">
              <div className="position">
                <div className="image-section">

                  <img className="image" src={poster_image_aboutUs} />

                  <div className="overlay">

                    <h1> Group Package  </h1>

                  </div>
                </div>
              </div>
              <div className="packages-options">
                <div className="package-image-text">
                  <button>
                    <ul>
                      <NavLink className="underline black" to="/groupDeparture" ><li> <img src="https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png"></img> Group Departure</li> </NavLink>
                    </ul>

                  </button>
                </div>

                <div className="package-image-text">
                  <button>
                    <ul>
                      <NavLink className="underline black" to="/honeymoon" ><li> <img src="https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png"></img> Honeymoon</li> </NavLink>
                    </ul>

                  </button>
                </div>

                <div className="package-image-text">
                  <button>
                    <ul>
                      <NavLink className="underline black" to="/deveotinal" ><li> <img src="https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png"></img> Devotional</li> </NavLink>
                    </ul>

                  </button>
                </div>

                <div className="package-image-text">
                  <button>
                    <ul>
                      <li> <img src="https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png"></img> Group Departure</li>
                    </ul>

                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="top">

          <div className="main-package-class">

            {
              GroupData.map((card) => (
                <div className="cards">

                  <div className="image-package-card">
                    <img src={card.image} />
                  </div>
                  <div className="warapper">
                    <div className="place-name-pacakage-card" >
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
                        <li><span><IoMdCheckmark /></span>{card.points.point_1}</li>
                        <li><span><IoMdCheckmark /></span>{card.points.Point_2}</li>
                        <li><span><IoMdCheckmark /></span>{card.points.point_3}</li>
                      </ul>
                    </div>

                    <div className="package-price-button">
                      <div className="price-package">

                        <ul>

                          <li><span><LiaRupeeSignSolid /></span>{card.price}</li>
                        </ul>
                      </div>

                      <div className="view-package">
                        <EnquirNow place={card.place} />
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