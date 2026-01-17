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
            { name: "Flights", icon: "https://thumbs.dreamstime.com/b/air-travel-airplane-silhouette-fyling-against-sun-water-summer-vacation-holiday-concept-45240306.jpg" },
            { name: "Hotels", icon: "data:image/jpeg;base64,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" },
            { name: "Trains", icon: "https://www.shutterstock.com/image-photo/karwar-karnataka-india-november-01-260nw-2390069889.jpg"},
            { name: "Buses", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyQHpel47KBMzmLhnt31zP6rSsT_0BfvayA&s"},
            { name: "Cabs", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPYvLqttxr86cOwhXAeZtIqzL-OP0Z_ZfQszeZUmOAw&s=10" },
            { name: "Cruse", icon: "data:image/jpeg;base64,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" },
         
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
            <div className="booking-search_2">
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
