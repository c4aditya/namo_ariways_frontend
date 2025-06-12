import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function HotelDetail() {
  const [loading, setloading] = useState(true);
  const [toggleform, settoggleform] = useState(false);
  const location = useLocation();
  const hotel = location.state.hotel;

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleReserveButton() {
    console.log("The button is clicked");
    settoggleform(true);
  }

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="hotelDetails">
            <div className="tag-line">
              <p>Overview</p>
            </div>
            <hr />
            <div className="hotel-name-details">
              <div className="hotel-name">
                <h1>{hotel.hotelName}</h1>
              </div>
              <div className="rating">
                <ul>
                  <li>
                    <span><FaStar /></span> {hotel.rating}
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="image-hotel">
              <div className="hotel-img-one">
                <img src={hotel.image[0]} alt={hotel.hotelName} />
              </div>
              <div className="hotel-img-two">
                <img src={hotel.image[1]} alt={hotel.hotelName} />
              </div>
            </div>
            <div className="facility">
              <div className="facility-provide book-now-facility">
                <div className="room-type book-now-room">
                  <ul>
                    <li>
                      <span><MdOutlineBedroomParent /></span> {hotel.room.roomType}
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="facility-listing book-facility-listing">
                  <ul>
                    <li>
                      <span><FaCheckCircle /></span> {hotel.facility.one}
                    </li>
                    <li>
                      <span><FaCheckCircle /></span> {hotel.facility.two}
                    </li>
                    <li>
                      <span><FaCheckCircle /></span>one
                    </li>
                    <li>
                      <span><FaCheckCircle /></span>two
                    </li>
                    <li>
                      <span><FaCheckCircle /></span>three
                    </li>
                    <li>
                      <span><FaCheckCircle /></span>four
                    </li>
                    <li>
                      <span><FaCheckCircle /></span>five
                    </li>
                  </ul>
                </div>
                <div className="reserve-button">
                  <button className="reverse-btn" onClick={handleReserveButton}>
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Popup Form */}
          {toggleform && (
            <div className="popup-overlay">
              <div className="popup-form">
                <button className="close-btn" onClick={() => settoggleform(false)}>
                  <RxCross1 />
                </button>
                <h2>Book Your Room</h2>
                 <form>
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="tel" name="phone" placeholder="Phone Number" required />
  <input type="date" name="checkInDate" placeholder="Check-In Date" required />
  <input type="date" name="checkOutDate" placeholder="Check-Out Date" required />
  <input type="number" name="guests" placeholder="Number of Guests" min="1" required />
  <input type="text" name="roomType" placeholder="Room Type (Optional)" />
  <textarea name="specialRequest" placeholder="Special Requests (Optional)"></textarea>
  <button type="submit">Submit</button>
</form>

              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HotelDetail;
