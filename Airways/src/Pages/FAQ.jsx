import { useState } from "react";
import contact_us_poster from "../videos/contactus_poster.png";
import { NavLink } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Dummy FAQ data
 const faqData = [
  {
    question: "How do I book a flight on your website?",
    answer: "You can book a flight by entering your travel details on our homepage and selecting a suitable flight from the available options."
  },
  {
    question: "Can I cancel my flight after booking?",
    answer: "Yes, cancellation is allowed as per the airline's cancellation policy. You can cancel it from your dashboard."
  },
  {
    question: "How do I get a refund after canceling my flight?",
    answer: "Refunds are processed as per the airline’s refund policy. Refundable tickets get full/partial refund within 7–10 working days."
  },
  {
    question: "Can I reschedule a booked flight?",
    answer: "Yes, you can reschedule most flights. Rescheduling charges and fare differences may apply."
  },
  {
    question: "How do I know if my flight booking is confirmed?",
    answer: "You will receive a confirmation email and SMS once your payment is successful. You can also check 'My Bookings' section."
  },
  {
    question: "What services are included in your flight bookings?",
    answer: "We provide flight bookings, seat selection, meal preferences, baggage options, and add-ons like insurance and priority boarding."
  },
  {
    question: "How do I book a hotel from your site?",
    answer: "Go to the Hotel section, enter your destination and dates, browse options, and confirm your booking after payment."
  },
  {
    question: "What is your refund policy for hotel bookings?",
    answer: "Hotel refund depends on the cancellation policy set by the hotel. Refunds take 5–7 working days post cancellation."
  },
  {
    question: "Do hotel bookings include free breakfast or meals?",
    answer: "Meal plans vary. You can check if 'breakfast included' is mentioned before booking."
  },
  {
    question: "Can I make special requests like early check-in or late check-out?",
    answer: "Yes, special requests can be made at checkout. Fulfillment depends on the hotel’s availability."
  },
  {
    question: "What types of travel packages do you offer?",
    answer: "We offer honeymoon, family, solo, and group travel packages — both domestic and international."
  },
  {
    question: "Can I customize my travel package?",
    answer: "Yes, you can request customization like adding extra nights, activities, or upgrades by contacting our travel expert."
  },
  {
    question: "What services are included in tour packages?",
    answer: "Our packages usually include flights, hotels, transfers, meals, guided tours, and 24x7 customer support."
  },
  {
    question: "What if I face issues during my trip?",
    answer: "We provide 24x7 customer service via phone, WhatsApp, and email for any travel-related concerns."
  },
  {
    question: "Is my payment and personal data safe on your website?",
    answer: "Yes, our website is SSL secured and PCI-DSS compliant, ensuring your payment and personal details are encrypted and protected."
  }
];


  function toggleFAQ(index) {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <>
      <div className="marign-top"></div>

      <div className="top-aboutus">
        <div className="main-potser-section-image">
          <div className="image-section">
            <img className="image" src={contact_us_poster} alt="Image not found" />
            <div className="overlay">
              <div className="overlaycontent">
                <div className="overlay-heading">
                  <h2>FAQ's</h2>
                </div>

                <div className="page-link-page-title">
                  <div className="page-link">
                    <NavLink className="link-text" to="/">Home</NavLink>
                  </div>
                  <div className="mark">
                    <p>{`>`}</p>
                  </div>
                  <div className="page-title">
                    <p>FAQ's</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="top">
        {faqData.map((item, index) => (
          <div className="questions" key={index}>
            <div className="text-mark">
              <div className="text-question">
                <p className="question"> {item.question}</p>
                {openIndex === index && (
                  <p className="answer-question">{item.answer}</p>
                )}
              </div>

              <div className="mark" onClick={() => toggleFAQ(index)} style={{ cursor: "pointer" }}>
                <p>{openIndex === index ?<FaChevronUp />: <FaChevronDown/> }</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FAQ;
