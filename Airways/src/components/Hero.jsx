import Packages from "./Packages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";


function Hero() {

  const [posterImages] = useState(
    [
      "https://res.cloudinary.com/dxgmovaih/image/upload/v1753690723/airplane-airport-runway-against-sky-sunset_1048944-19404858_wu10nx.jpg",
      "https://res.cloudinary.com/dxgmovaih/image/upload/v1753690893/water-bungalows-tropical-island-maldives_255175-1838_wjueqt.jpg",
      "https://res.cloudinary.com/dxgmovaih/image/upload/v1753691022/3d-rendering-beautiful-modern-hotel-office_752325-36741_avkept.jpg"
    ],

  )

  const imageTexts = [
    "Book Your Ticket With Namo Airways – Fly fast, fly easy. ",
    "Book Your Holiday Packages – Your dream trip, just a click away.",
    "Book Your Hotels – Best stays, guaranteed comfort.",
  ];
  console.log(posterImages.length - 1)

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImages() {

    if (currentIndex == posterImages.length - 1) {
      setCurrentIndex(0)
    }
    else {
      setCurrentIndex(currentIndex + 1)
    }

  }

  function priviousImage() {

    if (currentIndex == 0) {
      setCurrentIndex(0)
    }
    else {
      setCurrentIndex(currentIndex - 1)
    }

  }
  const nevigate = useNavigate();
  const sortImages = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRTiVW6rCohQZPcBZYFIuJPeg2S2pCf572Q&s",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRTiVW6rCohQZPcBZYFIuJPeg2S2pCf572Q&s",
      text: "NIT",
      price: "9000",
      day: "5",
      dept: "4"
    },

    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRTiVW6rCohQZPcBZYFIuJPeg2S2pCf572Q&s",
      text: "HIM",
      price: "6000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://images.unsplash.com/photo-1630123625375-1fce99d5d0dd?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "MUM",
      price: "7500",
      day: "3",
      dept: "4"
    },

    {
      image: "https://images.unsplash.com/photo-1630123625375-1fce99d5d0dd?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "DEL",
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

  const [onMessageClick, setMessageClick] = useState(false);

  function messageClick() {

    setMessageClick(prev => !prev);
  }
  return (
    <>
      <section className="for-poster-video">
        <div className="marign-top">

        </div>

        <section>

          <div className="main-posters-sections">

            <div className="privious-poster-main">
              <button onClick={priviousImage}>  <GrPrevious /> </button>
            </div>

            <div className="main-poster-images">
              <img className="main-class-main-poster-images" alt="Hero Posters Thumbnails" src={posterImages[currentIndex]} />
            </div>

            <div className="poster-content">
              <div className="main-poster-content">
                <p className="company-name">Namo Airways <span className="ser">Services</span> </p>
                <p className="slider-content">{imageTexts[currentIndex]}</p>
              </div>
              <div className="main-poster-images-buttons">
                <button className="book-on-poster">Book Tickets</button>
                <button className="book-visiting-slot">Book a visiting Slot</button>
              </div>
            </div>

            <div className="nextPosterChange">
              <button onClick={nextImages}> < GrNext /> </button>
            </div>


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
