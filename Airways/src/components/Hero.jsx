import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";


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
            <AiOutlineLeftCircle/>
          </div>

          <div className="images">
            <img src={images[currentIndex].url} alt="Poster" />
            <h1>{images[currentIndex].text}</h1>
          </div>

          <div className="next" onClick={nextImage}>

          <AiOutlineRightCircle/>
          </div>
        </div>
      </div>
      
      </section>

      <section className="flight-and-hotel">

        <div className="widht">
          <div className="flight-and-hotel-button">
            <div className="flight">
              <button className="main-button" >
                 <ul>
                  <li>  <a href="https://www.easemytrip.com/flights.html"><span><MdFlight/></span> Flights</a>  </li>
                 </ul>
              </button>
            </div>

            <div className="hotel">
              <button className="main-button" onClick={() => nevigate("/hotel")}>
              <ul>
                  <li><span><FaHotel/></span>  Hotels </li>
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
                <button  className="search-flight">
                  <a href="https://www.easemytrip.com/flights.html">Search flight</a>
                </button>
              </div>


            </div>
          </div>
        </div>


      </section>
    </>


  );
}

export default Hero;
