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


function Hero() {
  const nevigate = useNavigate();
  const images = [
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/travel-world-1.jpg",

    },
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/suitcase.jpg",

    },
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg",

    }
  ];


  const sortImages = [
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "JPR"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "GOA"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "OOTY"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "SML"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "MUR"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "NIT"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "LDK"
    },
    {
      image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
      text: "DAL"
    },
    // {
    //   image: "https://res.cloudinary.com/dxgmovaih/image/upload/w_300,h_300,q_auto,f_auto/v1745313581/jaipur_blgeel.jpg",
    //   text: "BLR"
    // }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  function priviousImage() {
    const isFristImage = currentIndex === 0;
    const newImage = isFristImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newImage);
  }

  function nextImage() {
    const isLastImage = currentIndex === images.length - 1;
    const newImage = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newImage);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="background-poster">

        <div className="poster-images-with-change-button-top-div">
          <div className="poster-section">
            <div className="privious" onClick={priviousImage}>
              <AiOutlineLeftCircle />
            </div>

            <div className="images">
              <img src={images[currentIndex].url} alt="Poster" />
              <h1>{images[currentIndex].text}</h1>
            </div>

            <div className="next" onClick={nextImage}>

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
              <button className="main-button" >
                <ul>
                  <li>  <a href="https://www.easemytrip.com/flights.html"><span><MdFlight /></span> Flights</a>  </li>
                </ul>
              </button>
            </div>

            <div className="hotel">
              <button className="main-button" onClick={() => nevigate("/hotel")}>
                <ul>
                  <li><span><FaHotel /></span>  Hotels </li>
                </ul>
              </button>
            </div>



          </div>
          <div className="flight-form">
            <div className="radio-buttons">
              <div className="one-way">
                <input type="radio" name="ticket-type" value="One Way"></input>
                <label>One Way</label>
              </div>


              <div className="round-trip">

                <input type="radio" name="ticket-type" value="One Way"></input>
                <label>Round Trip</label>
              </div>

            </div>


            <div className="flight-search">
              <div className="hotel-input">
                <label>From</label>
                <input
                  type="text"
                  placeholder="Enter the city name"

                />
              </div>

              <div className="hotel-input">
                <label>To</label>


                <input
                  type="text"
                  placeholder="Enter the city name"

                />

              </div>

              <div className="hotel-input">
                <label>Departure</label>
                <input type="date" ></input>
              </div>

              <div className="hotel-input">
                <label>Return</label>
                <input type="date" placeholder="DD/MM/YY"></input>

              </div>

              <div className="hotel-input">
                <button className="search-flight">
                  <a href="https://www.easemytrip.com/flights.html">Search flight</a>
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
      <div className="content-inside-section">
          <div className="para-our-service">
            <p>Book Our Hotels</p>

          </div>          
        </div>
        <div className="our-hotel-image">
          <div className="inner-image-our-hotel">
            <img src="https://resources.goindigo.in/static/image/1744718272969.jpg"></img>
          </div>

        </div>

        <div className="short-image">


          {sortImages.map((item, idx) => (
            <div className="short-image-main" key={idx}>
              <button onClick={() => nevigate("/hotel")}>
                <div className="sort-image-mid">

                  <img src={item.image} alt={item.text} />
                </div>

               
                
                <div className="sort-image-name">
                  
                  <p> {item.text}</p>
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
