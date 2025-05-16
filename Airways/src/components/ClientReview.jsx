import React, { useState } from 'react';
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
function ClientReview() {
    const cards = [
        {
          id: 1,
          place: "Manali",
          name: "Priya Mehta",
          stars: "5",
          message: "Amazing experience with stunning views!",
          date: "Travelled in Jan, 2025"
        },
        {
          id: 2,
          place: "Goa",
          name: "Rahul Kapoor",
          stars: "4",
          message: "Great trip, vibrant beaches and nightlife.",
          date: "Travelled in Feb, 2025"
        },
        {
          id: 3,
          place: "Shimla",
          name: "Anjali Sharma",
          stars: "3",
          message: "Nice weather, but hotel service was average.",
          date: "Travelled in Mar, 2025"
        },
        {
          id: 4,
          place: "Kerala",
          name: "Ravi Nair",
          stars: "5",
          message: "Tranquil backwaters and delicious food!",
          date: "Travelled in Apr, 2025"
        },
        {
          id: 5,
          place: "Jaipur",
          name: "Sneha Joshi",
          stars: "2",
          message: "Too crowded during the festival time.",
          date: "Travelled in Apr, 2025"
        },
        {
          id: 6,
          place: "Darjeeling",
          name: "Siddharth Roy",
          stars: "4",
          message: "Beautiful hills and toy train ride was nostalgic.",
          date: "Travelled in May, 2025"
        },
        {
          id: 7,
          place: "Leh Ladakh",
          name: "Neha Verma",
          stars: "5",
          message: "Breathtaking landscapes! Must visit once.",
          date: "Travelled in Jun, 2025"
        },
        {
          id: 8,
          place: "Udaipur",
          name: "Vikram Desai",
          stars: "3",
          message: "Lake Pichola was lovely, but traffic was bad.",
          date: "Travelled in Jul, 2025"
        },
        {
          id: 9,
          place: "Rishikesh",
          name: "Meera Iyer",
          stars: "4",
          message: "Peaceful stay and thrilling river rafting!",
          date: "Travelled in Aug, 2025"
        },
        {
          id: 10,
          place: "Ooty",
          name: "Karan Malhotra",
          stars: "5",
          message: "Perfect weather, great local food and tea gardens.",
          date: "Travelled in Sep, 2025"
        }
      ];
      

    const visibleCount = 3;
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNext = () => {
        if (startIndex + visibleCount < cards.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="top full-width">
            <div className='client-top'>
                <div className='client-heading'>
                    <p>Namo Airways Tours Review</p>
                </div>
                <div className='client-para'>
                    <p>So what are you waiting for  Let's Go</p>
                </div>
            </div>
            <div className='main'>
            <div className='navigation-buttons'>
                    <button onClick={handlePrev} disabled={startIndex === 0}><AiOutlineLeftCircle/> </button>
                </div>

            <div className='inside-clients-card' style={{ display: 'flex', alignItems: 'center' }}>
                
                <div
                    className="slider-container"
                    style={{
                        overflow: 'hidden',
                       
                    }}
                >
                    <div
                        className="card-slider"
                        style={{
                           
                            display: 'flex',
                            
                            gap: '1rem',
                            transform: `translateX(-${startIndex * 500}px)`,
                            transition: 'transform 0.5s ease'
                        }}
                    >
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="clients-cards"
                                style={{
                                    minWidth: '350px',
                                    background: 'white',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                
                                }}
                            >
                                 
                                <div className="card-title">

                                    <div className='main-card-client'>

                                    <div className='card-client-details'>
                                        <div className='stars-client'>
                                            <ul>
                                                <li><span><FaStar/></span> {card.stars}</li>
                                            </ul>
                                        </div>
                                        <div className="place-name">
                                            <p>{card.place}</p>
                                        </div>
                                        <div className="client-message">
                                            <p>{card.message}</p>
                                        </div>
                                    </div>

                                    <div className='client-images'>
                                        <img
                                            src='https://gallery.veenaworld.com/gallery/EUGA/EUGA240425-A/m1L5nxkiztdEo8vyyaXh004-05-2025_133448.jpg?imwidth=140'
                                            alt='Client'
                                           
                                        />
                                    </div>

                                   </div>
                                   
                                   <div className='bottom-card-section'>
                                    <div className='name-client'>
                                        <p className='c-name'>{card.name}</p> 
                                        
                                        <p className='c-date'>{card.date}</p>
                                        </div>

                                        <div className='companey-name'>

                                            <p>NAMO AIRWAYS</p>
                                            </div>

                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>

              
            </div>
            <div className="navigation-buttons-right">
                    <button
                        onClick={handleNext}
                        disabled={startIndex + visibleCount >= cards.length}
                    ><AiOutlineRightCircle/></button>
                </div>
        </div>
        </div>
    );
}

export default ClientReview;
