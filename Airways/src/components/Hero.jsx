import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { MdAirplaneTicket } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaRupeeSign } from "react-icons/fa";
import V_1 from "../videos/V_1.mp4";
import V_2 from "../videos/V_2.mp4";


function Hero() {
  const nevigate = useNavigate();
  const Poster_videos = [
    {
      id: 1,
      video: V_2,
    },

    {
      id: 2,
      video: V_1,
    }
  ];


  const sortImages = [
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "JPR",
      price: "2000",
      day: "2",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "GOA",
      price: "2000",
      day: "2",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "OOTY",
      price: "2000",
      day: "2",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "SML",
      price: "2000",
      day: "2",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "MUR",
      price: "2000",
      day: "2",
      dept: "4"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "NIT",
      price: "2000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "NIT",
      price: "2000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "NIT",
      price: "2000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "NIT",
      price: "2000",
      day: "2",
      dept: "4"
    },

    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/v1745313581/jaipur_blgeel.jpg",
      text: "NIT",
      price: "2000",
      day: "2",
      dept: "4"
    },


    // {
    //   image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
    //   text: "BLR"
    // }
  ];
  const [tripType, setTripType] = useState("one-way");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  function priviousImage() {
    setFade(false);
    setTimeout(() => {
      const isFirstImage = currentIndex === 0;
      const newImage = isFirstImage ? Poster_videos.length - 1 : currentIndex - 1;
      setCurrentIndex(newImage);
      setFade(true);
    }, 300);
  }

  function nextImage() {
    setFade(false);
    setTimeout(() => {
      const isLastImage = currentIndex === Poster_videos.length - 1;
      const newImage = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newImage);
      setFade(true);
    }, 300);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === Poster_videos.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="for-poster-video">

        <div className="poster-images-with-change-button-top-div poster-video-height">
          <div className="poster-section">
            <div className="privious poster-video-privios" onClick={priviousImage}>
              <AiOutlineLeftCircle />
            </div>

            <div className="poster-videos">
              <video
                key={Poster_videos[currentIndex].video}
                autoPlay
                muted
                className={`carousel-video ${fade ? "fade-in" : "fade-out"}`} >
                <source src={Poster_videos[currentIndex].video} />
              </video>

            </div>

            <div className="next poster-video-next" onClick={nextImage}>

              <AiOutlineRightCircle />
            </div>
          </div>
        </div>

      </section>
      {/*  flight and hotel form start  */}
      <section className="flight-and-hotel">
        <div className="top">
          <div className="flight-and-hotel-button">
            <div className="flight">
              <button className="main-button">
                <ul>
                  <li>
                    <a href="https://www.easemytrip.com/flights.html">
                      <span>
                        <MdFlight />
                      </span>
                      Flights
                    </a>
                  </li>
                </ul>
              </button>
            </div>
            <div className="hotel">
              <button className="main-button" onClick={() => navigate("/hotel")}>
                <ul>
                  <li>
                    <span>
                      <FaHotel />
                    </span>
                    Hotels
                  </li>
                </ul>
              </button>
            </div>
          </div>
          <div className="flight-form">
            <div className="radio-buttons">
              <div className="one-way">
                <input
                  type="radio"
                  name="ticket-type"
                  value="one-way"
                  checked={tripType === "one-way"}
                  onChange={() => setTripType("one-way")}
                />
                <label>One Way</label>
              </div>
              <div className="round-trip">
                <input
                  type="radio"
                  name="ticket-type"
                  value="round-trip"
                  checked={tripType === "round-trip"}
                  onChange={() => setTripType("round-trip")}
                />
                <label>Round Trip</label>
              </div>
            </div>
            <div className="flight-search">
              <div className="hotel-input">
                <label>From</label>
                <input type="text" placeholder="Enter the city name" />
              </div>
              <div className="hotel-input">
                <label>To</label>
                <input type="text" placeholder="Enter the city name" />
              </div>

              <div className="hotel-input">
                <label>Departure</label>
                <input type="date" />
              </div>
              <div className="hotel-input">
                <label>Passenger</label>
                <input type="text" placeholder="" />
              </div>




              {tripType === "round-trip" && (
                <div className="hotel-input">
                  <label>Return</label>
                  <input type="date" placeholder="DD/MM/YY" />
                </div>
              )}
              <div className="hotel-input">
                <button className="search-flight">
                  <a href="https://www.easemytrip.com/flights.html">
                    Search flight
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  flight and hotel form start  */}

      {/*  servise section  start  */}
      <div className="services-section">


        <div className="content-inside-section">
          <div className="para-our-service">
            <p>Our Services </p>

          </div>
        </div>


        <div className="services-wrapper">
          <div className="service-card">
            <div className="servive-logo">
              <MdAirplaneTicket />
            </div>
            <h3>Flight Ticket</h3>
            <p>Book domestic and international flight tickets at the best prices with easy cancellation and instant confirmation.</p>
          </div>
          <div className="service-card">
            <div className="servive-logo">
              <MdHotel />
            </div>
            <h3>Hotel Reservation</h3>
            <p>Reserve hotels worldwide with flexible options, verified reviews, and 24/7 customer support for a hassle-free stay.</p>
          </div>
          <div className="service-card">
            <div className="servive-logo">
              < MdOutlineSupportAgent />
            </div>
            <h3>24x7 Support</h3>
            <p>Our dedicated team is available round the clock to assist you with any queries or travel emergencies.</p>
          </div>
          <div className="service-card">
            <div className="servive-logo">
              < VscFeedback />
            </div>
            <h3>Client Reviews</h3>
            <p>Overall rating: <span className="stars">★★★★☆</span> (4.5/5 from our happy clients)</p>
          </div>
        </div>
      </div>

      {/*  service section ends  */}


      {/* imgae for changing the age to hotel page   */}

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

                  <div className="sort-image-name">
                    <p> {item.text}</p>
                  </div>

                  <div className="sort-image-mid">
                    <img src={item.image} alt={item.text} />
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

                </button>

              </div>
            ))}


          </div>
        </div>
      </section>


      <section className="our-packages">
        <div className="top-our-package">
          <div className="child-our-packages">

          </div>


        </div>
      </section>





    </>


  );
}

export default Hero;
