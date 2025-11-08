import Packages from "./Packages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { RxButton, RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import BookingForm from "./TicketBookingForm";


function Hero() {

  const nevigate = useNavigate();
  const sortImages = [
    {
      image: "https://images.moneycontrol.com/static-mcnews/2021/04/Roof-top-pool-2-taj-goa-770x433.jpg?impolicy=website&width=770&height=431",
      text: "GOA",
      price: "7500",
      day: "3",
      dept: "4"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRTiVW6rCohQZPcBZYFIuJPeg2S2pCf572Q&s",
      text: "OOTY",
      price: "6500",
      day: "3",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313719/shimla_mgcism.jpg",
      text: "SML",
      price: "9000",
      day: "4",
      dept: "4"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRTiVW6rCohQZPcBZYFIuJPeg2S2pCf572Q&s",
      text: "MUR",
      price: "7000",
      day: "3",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313730/nanitall_tlt5a4.jpg",
      text: "DAR",
      price: "7500",
      day: "3",
      dept: "4"
    },

    {
      image: "https://r1imghtlak.mmtcdn.com/00fff0885d2411eabeab0242ac110006.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=480:336&crop=480:336",
      text: "NIT",
      price: "9000",
      day: "5",
      dept: "4"
    },

    {
      image: "https://r1imghtlak.mmtcdn.com/2242634cc86811eb9ff30242ac110008.jpg?&output-quality=75&crop=520:350;0,20&output-format=jpg&downsize=540:*",
      text: "HIM",
      price: "6000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701161152483573-1db545a61dbe11ebbcf50242ac110003.jpg?&output-quality=75&crop=520:350;74,0&output-format=jpg&downsize=540:*",
      text: "MUM",
      price: "7500",
      day: "3",
      dept: "4"
    },

    {
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201203301842173153-198a78b6929611ee883f0a58a9feac02.jpg",
      text: "DEL",
      price: "5500",
      day: "3",
      dept: "4"
    },

    {
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201110111054435329-6de70d60031511ec9fba0a58a9feac02.jpg?&output-quality=75&crop=520:350;0,19&output-format=jpg&downsize=540:*",
      text: "JAI",
      price: "5500",
      day: "3",
      dept: "4"
    },

  ];
  // scrool top function 

  function scroolTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // message button click 
  const today = new Date().toISOString().split('T')[0];




  const [onMessageClick, setMessageClick] = useState(false);

  function messageClick() {

    setMessageClick(prev => !prev);
  }
  return (
    <>
      <section className="for-poster-video">
        <div className="full-widht marign-top">
        <section className="booking-form-wrapper" style={{ margin: "20px 0" }}>
              <BookingForm />

            </section>
            </div>

          <div className="marign-top">

          

          </div>
        

        <section>

          <div className="main-posters-sections">



          </div>

          <div className="main-our-services">
            <div className="heading-our-services">
              <p className="wt-we-off">What We're Offering </p>
              <p className="ab-ser">About Our Services</p>
            </div>

            <div className="choose-our-services">


              <button className="flight-book">

                <div className="fligh-image">
                  <img src="https://alavion.like-themes.com/wp-content/uploads/2018/02/service_03.jpg" />
                </div>

                <div className="fligh">
                  <h1>Flight Ticket Booking</h1>
                </div>


              </button>

              <button className="flight-book">

                <div className="fligh-image">
                  <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?t=st=1753699036~exp=1753702636~hmac=5654b6ab1002bb02ac735a95f745c2ab7e4dd589fbbe849c4364f406321eb4bb&w=1800" />
                </div>

                <div className="fligh">
                  <h1>Holidays Booking</h1>
                </div>


              </button>

              <button className="flight-book">

                <div className="fligh-image">
                  <img src="https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683419.jpg?t=st=1753699765~exp=1753703365~hmac=12d710044351b790161016f9f740b8c60b2d75707100526e7515cd03606683b7&w=826" />
                </div>

                <div className="fligh">
                  <h1>Hotels Booking </h1>
                </div>


              </button>

              <button className="flight-book">

                <div className="fligh-image">
                  <img src="https://alavion.like-themes.com/wp-content/uploads/2018/02/service_03.jpg" />
                </div>

                <div className="fligh">
                  <h1>Fligh Ticket</h1>
                </div>


              </button>
            </div>

          </div>

        </section>



        <div className="quick-enquiry">

          {onMessageClick && (
            <div className="enquiry-content">
              {/* Yahan apna content likho */}
              <div className="whats-app">

                <a href="https://wa.me/9569300792?text=Hello%20I%20want%20to%20contact%20you"> <FaWhatsapp /></a>

              </div>

              <div className="mobile">
                <a href="tel:8115448296">

                  <MdOutlineCall />

                </a>
              </div>
            </div>
          )}
          <div className="inside-enquiry">

            <button className="topArrow" onClick={scroolTop} ><FaArrowUpLong /></button>

            <button onClick={messageClick} className="btn-quick-enq">
              {
                onMessageClick ? <RxCross1 /> : <MdOutlineMessage />
              }
            </button>
          </div>
        </div>

      </section>

      <Packages />

      <section className="short-image-hotel-image">
        <div className="top">
          <div className="poster-package">

            <div className="top-text-packages">

              <div className="heading-package">
                <h3>Our Hotels </h3>
              </div>

              <div className="para-package">
                <p>Always the right choice! for Hotel Booking Proven & trusted by thousands!</p>
              </div>

            </div>

            <div className="buttons-packages">
              <button>Explore Hotels </button>
            </div>



          </div>
          <div className="our-hotel-image">
            <div className="inner-image-our-hotel">
              {/* <img src="https://resources.goindigo.in/static/image/1744718272969.jpg"></img> */}
            </div>

          </div>

          <div className="short-image">
            {sortImages.map((item, idx) => (
              <div className="short-image-main" key={idx}>
                <button onClick={() => nevigate("/hotel")}>



                  <div className="sort-image-mid">
                    <img src={item.image} alt={item.text} />
                    <div className="overlay-color">
                      <div className="sort-image-name">
                        <p> {item.text}</p>
                      </div>

                      <div className="descripction-hotel">
                        <div className="price">
                          <ul><li>
                            <span><FaRupeeSign /></span>{item.price}
                          </li>
                          </ul>
                          {/* <p>{item.price}</p> */}
                        </div>

                        <div className="dept">
                          <p>{item.day} Days | {item.dept} Dept</p>

                        </div>
                      </div>

                    </div>
                  </div>



                </button>

              </div>
            ))}


          </div>
        </div>
      </section>


      {/* <section className="our-packages">
        <div className="top-our-package">
          <div className="child-our-packages">

          </div>


        </div>
      </section> */}
    </>


  );
}

export default Hero;
