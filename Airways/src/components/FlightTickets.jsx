import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FlightTicket = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const flights = state?.flights || [];
  const search = state?.search || {};

  const [updatedFlights, setUpdatedFlights] = useState([]);

  useEffect(() => {
    // ✅ Generate date 5 days from today
    const today = new Date();
    const departureDate = new Date(today);
    departureDate.setDate(today.getDate() + 5);

    // ✅ Format date like "26 Jun 2023"
    const formattedDate = departureDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    // ✅ Create random unique timings for each flight
    const flightsWithTime = flights.map((f, i) => {
      const depHour = Math.floor(Math.random() * 12) + 5; // 5AM - 5PM
      const depMin = Math.floor(Math.random() * 60);
      const durationH = Math.floor(Math.random() * 3) + 1; // 1-3 hrs
      const durationM = Math.floor(Math.random() * 60);

      // calculate arrival
      const arrHour = depHour + durationH;
      const arrMin = depMin + durationM;

      const formatTime = (h, m) =>
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;

      return {
        ...f,
        departureDate: formattedDate,
        departureTime: formatTime(depHour, depMin),
        arrivalTime: formatTime(arrHour % 24, arrMin % 60),
        duration: durationH,
        minutes: durationM,
        stops: Math.random() > 0.6 ? "Non-Stop" : "1 stop via Hyderabad",
        seatsLeft: Math.floor(Math.random() * 5) + 1, // random 1-5 seats
      };
    });

    setUpdatedFlights(flightsWithTime);
  }, [flights]);

  return (
    <div className="flight-page">
      <div className="filter-section">
        <h3>Filters</h3>
        <p>Showing {updatedFlights.length} Flights</p>

        <div className="price-filter">
          <h4>Price Range</h4>
          <div className="price-inputs">
            <input type="number" defaultValue="5000" />
            <span>-</span>
            <input type="number" defaultValue="15000" />
          </div>
          <input type="range" min="5000" max="15000" />
        </div>

        <div className="stops-filter">
          <h4>Stops</h4>
          <label><input type="checkbox" /> Non-Stop</label>
          <label><input type="checkbox" /> 1 Stop</label>
          <label><input type="checkbox" /> 2 Stop</label>
          <label><input type="checkbox" /> 3 Stop</label>
        </div>
      </div>

      <div className="flight-section">
        <h2>
          Flights from {search.from || "?"} → {search.to || "?"}
        </h2>
        <p className="flight-date">Date: {updatedFlights[0]?.departureDate || "Loading..."}</p>

        {updatedFlights.length > 0 ? (
          <ul className="flight-list">
            {updatedFlights.map((f) => (
              <li key={f.id} className="flight-card">
                <div className="flight-header">
                  <span className="departure-label">Departure</span>
                  <span className="departure-date">{f.departureDate}</span>
                </div>

                <div className="flight-details">
                  <div className="airline-info">
                    {/* <img src={f.image} alt={f.name} className="flight-logo" /> */}
                    <div>
                      <div className="flight-name">{f.airline || f.name}</div>
                      <div className="flight-code">{f.code || "AI 439"}</div>
                    </div>
                  </div>

                  <div className="flight-time">
                    <h4>{f.departureTime}</h4>
                    <span>{f.from}</span>
                  </div>

                  <div className="flight-duration">
                    <div className="duration-line">
                      <hr />
                      <span>
                        {f.duration}h {f.minutes}m
                      </span>
                      <hr />
                    </div>
                    <p>{f.stops}</p>
                  </div>

                  <div className="flight-time">
                    <h4>{f.arrivalTime}</h4>
                    <span>{f.to}</span>
                  </div>

                  <div className="flight-right">
                    <div className="flight-price">{f.price}</div>
                    <div className="flight-seats">{f.seatsLeft} seats left</div>
                    <button onClick={()=>navigate("/flight-ticket-form") } className="book-btn">BOOK NOW</button>
                    <div className="flight-details-link">Flight Details</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights found.</p>
        )}

        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default FlightTicket;
