import React, { useState } from "react";
import "./BookingForm.css";

import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [tripType, setTripType] = useState("oneway");
  const [activeTab, setActiveTab] = useState("Flights");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    travellers: 1,
    classType: "Economy",
  });

  const navigate = useNavigate();

 const allowedAirports = [
  "delhi",
  "mumbai",
  "varanasi",
  "goa",
  "kolkata",
  "chennai",
  "bangalore",
  "hyderabad",
];


  // ✅ Generate 20 Dummy Flights Dynamically (with random images)
  const generateFlights = (from, to) => {
    const dummyFlights = [];
    const airlines = ["IndiGo", "Air India", "SpiceJet", "Vistara", "GoFirst", "Akasa Air"];
    const flightImages = [
      "https://www.stickpng.com/img/icons-logos-emojis/international-airlines/indigo-logo",
      "https://1000logos.net/air-india-logo/",
    ]
    for (let i = 1; i <= 20; i++) {
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const img = flightImages[Math.floor(Math.random() * flightImages.length)];

      dummyFlights.push({
        id: i,
        name: `${airline} Flight ${Math.floor(100 + Math.random() * 900)}`,
        from,
        to,
        time: `${Math.floor(1 + Math.random() * 12)}:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
        price: `₹${(3000 + Math.floor(Math.random() * 4000)).toLocaleString()}`,
        image: img, // 👈 flight image added here
      });
    }
    return dummyFlights;
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle Submit (Navigate to ticket page with dynamic data)
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (activeTab === "Flights") {
  //     if (!formData.from || !formData.to) {
  //       alert("Please enter both From and To destinations");
  //       return;
  //     }

    

  //     // Generate flights dynamically
  //     const filtered = generateFlights(formData.from, formData.to);

  //     console.log("🔍 From:", formData.from);
  //     console.log("🔍 To:", formData.to);
  //     console.log("✈️ Generated Flights:", filtered);

  //     navigate("/ticketBooking", {
  //       state: {
  //         flights: filtered,
  //         search: formData,
  //       },
  //     });
  //   }
  // };

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (activeTab === "Flights") {
//     if (!formData.from || !formData.to) {
//       alert("Please enter both From and To destinations");
//       return;
//     }

//     // ✈️ Generate dummy flights
//     const filtered = generateFlights(formData.from, formData.to);

//     navigate("/ticketBooking", {
//       state: {
//         flights: filtered,
//         search: formData,
//       },
//     });
//   } 
//   else if (activeTab === "Hotels") {
//     navigate("/hotel");
//   } 
//   // else if (activeTab === "Trains") {
//   //   navigate("/trainBooking");
//   // } 
//   // else if (activeTab === "Buses") {
//   //   navigate("/busBooking");
//   // } 
//   // else if (activeTab === "Cabs") {
//   //   navigate("/cabBooking");
//   // } 
//   // else if (activeTab === "Cruse") {
//   //   navigate("/cruiseBooking");
//   // }
// };

const handleSubmit = (e) => {
  e.preventDefault();

  if (activeTab === "Flights") {
    if (!formData.from || !formData.to) {
      alert("Please enter both From and To destinations");
      return;
    }
 if (!allowedAirports.includes(formData.from.trim().toLowerCase()) || 
    !allowedAirports.includes(formData.to.trim().toLowerCase())) {
  alert("Please enter valid Indian airport names like: Delhi, Mumbai, Varanasi, Goa etc.");
  return;
}


    const filtered = generateFlights(formData.from, formData.to);

    navigate("/ticketBooking", {
      state: {
        flights: filtered,
        search: formData,
      },
    });
  } 
  else if (activeTab === "Hotels") {
    navigate("/hotel");
  }
};



  const placeholders = {
    from: "Delhi",
    to: "Varansi ",
  };

  return (
    <form className="booking-container" onSubmit={handleSubmit}>
      {/* Header Tabs */}
      <div className="booking-header">
        <ul className="booking-menu">
          {[
            { name: "Flights", icon: "https://res.cloudinary.com/dxgmovaih/image/upload/v1761981998/flights-tabbtn-image_yf5bf0.png" },
            { name: "Hotels", icon: "https://res.cloudinary.com/dxgmovaih/image/upload/v1761981990/hotel-tabbtn-image_kykg5w.png" },
            { name: "Trains", icon: "https://res.cloudinary.com/dxgmovaih/image/upload/v1761983276/brian-suman-8eId7mS_FCY-unsplash_o4buau.jpg" },
            { name: "Buses", icon: "https://res.cloudinary.com/dxgmovaih/image/upload/v1761981975/bus-tabbtn-image-1_pxngck.png" },
            { name: "Cabs", icon: "https://res.cloudinary.com/dxgmovaih/image/upload/v1761981983/car-tabbtn-image_aut9cx.png" },
            { name: "Cruse", icon: "https://shineairways.com/assets/images/icon/cruise-tabbtn-image.png" },
         
          ].map((tab) => (
            <li
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className="tab-icon"><img src={tab.icon} /></span>
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Trip Type Radio */}
      {

        activeTab === "Flights" ? (

          <div className="trip-type">
            {["oneway", "roundtrip", "multicity"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="trip"
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                />
                {type.charAt(0).toUpperCase() + type.slice(1).replace("trip", " Trip")}
              </label>
            ))}
          </div>) : null
      }

      {/* Search Fields */}
      <div className="booking-search">
        {/* From */}
        {
          activeTab === "Cruse" ? (
            <div className="boo">
             <div className="booking-input from">
                <p>CRUSING TO </p>
                <input
                  type="text"
                  name="from"
                  placeholder={placeholders.from}
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>

              <div className="booking-input from">
                <p>Travel Month  </p>
                <input
                  type="text"
                  name="from"
                  placeholder="Jan"
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>
              </div>

          ) : (
            <div className="booking-search">
              <div className="booking-input from">
                <p>From</p>
                <input
                  type="text"
                  name="from"
                  placeholder={placeholders.from}
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>

              {
                activeTab === " Hotels" ? (
                  null
                ) : (
                  <div className="swap-icon">⇄</div>
                )
              }

              {
                activeTab === "Hotels" ? (

                  <div className="booking-input to">
                    <p>Booking For </p>
                    <select name="cars" id="cars">
                      <option value="Adult ">Adults</option>
                      <option value="Premium Economy">Adults with Kids (under 13)</option>

                    </select>

                  </div>


                ) : (
                  <div className="booking-input to">
                    <p>To</p>
                    <input
                      type="text"
                      name="to"
                      placeholder={placeholders.to}
                      value={formData.to}
                      onChange={handleChange}
                      disabled={activeTab === "Hotels"}
                    />
                  </div>

                )
              }


              {/* Date */}
              <div className="booking-input date">
                <p>{activeTab === "Hotels" ? "Check-in Date" : "Departure Date"}</p>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              {/* Travellers */}
              <div className="booking-input travellers">

                {
                  activeTab === "Hotels" ? (
                    <div>
                      <p>Check Out Date </p>
                      <input
                        type="date"
                        name="date"
                        
                        
                      />
                    </div>

                  ) : activeTab === "Trains" ? (
                    <div>
                      <p>Travel Date </p>
                      <input
                        type="date"
                        name="date"
                        
                      />
                    </div>
                  ) : activeTab === "Flights" ? (
                    <div>
                      <p>Travellers and Class </p>
                      <select name="cars" id="cars">
                        <option value="Economy">Economy</option>
                        <option value="Premium Economy">Premium Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                      </select>
                    </div>
                  ) : activeTab === "Buses" || "cab" ? (

                    <div>
                      <p>Travellers and Class </p>
                      <select name="cars" id="cars">
                        <option value="Economy">AC</option>
                        <option value="Premium Economy">Non-Ac </option>
                        <option value="Business">Sliper</option>

                      </select>
                    </div>


                  ) : null
                }

                {
                  activeTab == "Hotels" || "Buses" || "cab" ? null : (
                    <select
                      name="classType"
                      value={formData.classType}
                      onChange={handleChange}
                    >
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                    </select>

                  )
                }


              </div>


            </div>

          )
        }


        {/* Search Button */}
        <br></br>
        <div className="search-btn">
          <button type="submit">SEARCH</button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
