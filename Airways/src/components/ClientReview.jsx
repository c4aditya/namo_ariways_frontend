import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

function ClientReview() {
    const cards = [
        {
          id: 1,
          image:"https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.jpg?s=612x612&w=0&k=20&c=BbwgfMOtFOIJn1Km-ASix_EBbF9SHW5h0FtWbna5nFk=",
          place: "Manali",
          name: "Priyansh Mehta",
          stars: "5",
          message: "Amazing experience with stunning views!",
          date: "Travelled in Jan, 2025"
        },
        {
          id: 2,
          image:"https://t4.ftcdn.net/jpg/04/31/53/49/360_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg",
          place: "Goa",
          name: "Rahul Kapoor",
          stars: "4",
          message: "Great trip, vibrant beaches and nightlife.",
          date: "Travelled in Feb, 2025"
        },
        {
          id: 3,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdSq46xbsuw8iGlGN0zTxQF94McUR7x3v6w&s",
          place: "Shimla",
          name: "Anjal Sharma",
          stars: "3",
          message: "Nice weather, but hotel service was average.",
          date: "Travelled in Mar, 2025"
        },
        {
          id: 4,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgRkensEnpqJE0vs-MzEIAdBZGdsI2mhXDQ&s",
          place: "Kerala",
          name: "Ravi Nair",
          stars: "5",
          message: "Tranquil backwaters and delicious food!",
          date: "Travelled in Apr, 2025"
        },
        {
          id: 5,
          image:"https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
          place: "Jaipur",
          name: "Sneha Joshi",
          stars: "2",
          message: "Too crowded during the festival time.",
          date: "Travelled in Apr, 2025"
        },
        {
          id: 6,
          place: "Darjeeling",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6HimeVWg3mMTl4UEJPqMMebDQ0RNF0M9Kg&s",
          name: "Siddharth Roy",
          stars: "4",
          message: "Beautiful hills and toy train ride was nostalgic.",
          date: "Travelled in May, 2025"
        },
        {
          id: 7,
          place: "Leh Ladakh",
          image:"https://qph.cf2.quoracdn.net/main-qimg-58cddfa2c25fe59d0d1f106e74027498-lq",
          name: "Neha Verma",
          stars: "5",
          message: "Breathtaking landscapes! Must visit once.",
          date: "Travelled in Jun, 2025"
        },
        {
          id: 8,
          place: "Udaipur",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6vcTbPK9iUA0DBm7mnN5vY3BZ5z2ft_g5LRjUyqVbZLSTgZLfKIuojitpk_qRsRbekY&usqp=CAU",
          name: "Devika Rajput",
          stars: "3",
          message: "Lake Pichola was lovely, but traffic was bad.",
          date: "Travelled in Jul, 2025"
        },
        {
          id: 9,
          place: "Rishikesh",
          image:"https://media.istockphoto.com/id/1205725066/photo/young-indian-businessman-wearing-elegant-shirt-standing-over-isolated-white-background.jpg?s=612x612&w=0&k=20&c=k2krFh_sStjfxKFC6yIF1G3Tc6hf4edeptDVxpcz934=",
          name: "Adutya Singh",
          stars: "4",
          message: "Peaceful stay and thrilling river rafting!",
          date: "Travelled in Aug, 2025"
        },
        {
          id: 10,
          place: "Ooty",
          image:"https://photosnow.org/wp-content/uploads/2024/04/indian-girl-photo_9.jpg",
          name: "Kiran Malhotra",
          stars: "5",
          message: "Perfect weather, great local food and tea gardens.",
          date: "Travelled in Sep, 2025"
        },
        
    ];

    const visibleCount = 4;
    const [startIndex, setStartIndex] = useState(0);
    const intervalRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setStartIndex(prevIndex =>
                prevIndex + visibleCount < cards.length ? prevIndex + 1 : 0
            );
        }, 3000); // Change interval (ms) as needed

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [cards.length]);

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
        resetInterval();
    };

    const handleNext = () => {
        if (startIndex + visibleCount < cards.length) {
            setStartIndex(startIndex + 1);
        }
        resetInterval();
    };

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setStartIndex(prevIndex =>
                prevIndex + visibleCount < cards.length ? prevIndex + 1 : 0
            );
        }, 300000000);
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
                                transform: `translateX(-${startIndex * 470}px)`, // 350px card + 16px gap
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
                                                    src={card.image}
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
