import React, { useState, useEffect } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL; 
function PopupForm({ onClose }) {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    travelDate: '',
    people: '',
    message: ''
  });

  // Body scroll disable + dark background
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    return () => {
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);  // Complete form data console mein

    // Yahan API call kar sakte ho
    try {
      const response = await fetch(`${BASE_URL}/enqFrom`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Enquiry submitted! Thank you.");
        onClose();  // Popup close
      } else {
        console.error("Submit failed");
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error!");
    }
  };

  return (
    <>
      <div className="popup-overlay-custom">
        <div className="image-popup">
         <img src="https://images.emtcontent.com/offer-img/EMTFIRST-flight-aug-25-hp.webp"/>
        </div>
        <div className="popup-form-custom">
         <h2 className="popup-title-custom">ENQUIRY WITH US</h2>
         <form onSubmit={handleSubmit}>
           <div className="popup-row-custom">
            <input 
              className="popup-input-custom" 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input 
              className="popup-input-custom" 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleInputChange}
            />
           </div>
          
           <div className="popup-row-custom">
             <input 
               className="popup-input-custom" 
               type="text" 
               name="contact"
               placeholder="Your Contact" 
               value={formData.contact}
               onChange={handleInputChange}
             />
             <input 
               className="popup-input-custom" 
               type="email" 
               name="email"
               placeholder="Email" 
               value={formData.email}
               onChange={handleInputChange}
             />
           </div>
           <div className="popup-row-custom">
             <input 
               className="popup-input-custom" 
               type="date" 
               name="travelDate"
               placeholder="Travel Date" 
               value={formData.travelDate}
               onChange={handleInputChange}
             />
             <input 
               className="popup-input-custom" 
               type="number" 
               name="people"
               placeholder="No. of People" 
               value={formData.people}
               onChange={handleInputChange}
             />
           </div>
           <textarea 
             className="popup-textarea-custom" 
             name="message"
             placeholder="Message"
             value={formData.message}
             onChange={handleInputChange}
           ></textarea>
           <button className="popup-submit-custom" type="submit">Submit</button>
         </form>
         <button className="popup-close-custom" onClick={onClose}>×</button>
        </div>
      </div>

      {/* Internal CSS - Same */}
      <style>
          
        {`
        .popup-overlay-custom {
        
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

       
        .popup-form-custom {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
          padding: 32px 28px 24px 28px;
          width: 400px;
          max-width: 90vw;
          position: relative;
        }
        .popup-title-custom {
          text-align: center;
          margin-bottom: 18px;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .popup-row-custom {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .popup-input-custom {
          flex: 1;
          padding: 10px 12px;
          margin-bottom: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          
        }
        .popup-textarea-custom {
          width: 100%;
          min-height: 70px;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          margin-bottom: 18px;
          resize: none;
        }
        .popup-submit-custom {
          width: 100%;
          padding: 12px;
          background:#D24D3E;
          color: #fff;
          border: none;
          border-radius: 22px;
          font-size: 1.1rem;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }
        .popup-submit-custom:hover {
           color:white;
          background:blue;
        }
        .popup-close-custom {
          position: absolute;
          top: 10px;
          right: 14px;
          background: none;
          border: none;
          font-size: 1.6rem;
          color: #888;
          cursor: pointer;
        }
        `}
      </style>        
    
    </>
  );
}

export default PopupForm;
