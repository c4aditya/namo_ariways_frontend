// acdemyDat import should stay as you have it.
import acdemyDat from "./AcdemyData";
import { HiLanguage } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// Assume CSS is in component.css

function Acdemy() {
    // Instead of updating the whole array, update an index
    const posterImages = [
        "https://img.freepik.com/premium-photo/flight-attendant-stewardesses-walking-runway-near-airplane-jet-modern-passenger-plane-smiling-man-women-with-baggage-wear-uniform-teamwork-civil-commercial-aviation-air-travel-concept_341052-2290.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/dramatic-full-view-cockpit-modern-boeing-aircraft-before-take-off_214495-238.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/airplane-airport-runway_1048944-22308613.jpg?ga=GA1.1.1259379028.1745228254&semt=ais_hybrid&w=740"
    ];
    // Now, we track the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % posterImages.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex, posterImages.length]);
    // Dependency on currentIndex enables the image to change every second (1000ms)

    const sectionShows = useRef(null);

    function showSection() {
        sectionShows.current.scrollIntoView({ behavior: "smooth" });
    }

    const nevigate = useNavigate();

    return (
        <>
            <section>
                <header>
                    <div className="marign-top"></div>
                    <div className="main-poster-ourAcdemy">
                        <div className="acdemy-content">
                            <p>
                               Welcome to <sapn className="c-name"> Namo Airways </sapn>Training Division—your gateway to a rewarding career in the aviation industry. We are committed to delivering top-quality training programs designed to develop the next generation of aviation professionals.
                            </p>
                            <div className="button-acdemy-section">
                                    <button onClick={showSection}>See Course</button>
                                        <button onClick={showSection}>Enquiry Now</button>
                            </div>
                        
                        </div>
                        <div className="posters-our-acdemy">
                            <div className="poster-acdemy-images">
                                <img src={posterImages[currentIndex]} alt="poster image" />
                            </div>
                        </div>
                    </div>
                </header>
            </section>

            <section>
                <div ref={sectionShows} className="acdemy-cards">
                    {acdemyDat.map((data, idx) => (
                        <button
                            key={idx}
                            onClick={() => nevigate("/courseDetails", { state: data })}
                            className="cards-content" >
                            <div className="cards-course-images">
                                <img
                                    className="course-image"
                                    alt="courseImage"
                                    src={data.courseImage}
                                />
                            </div>
                            <div className="course-acdemy-title">
                                <p>{data.courseTitle}</p>
                            </div>
                            <div className="rating-section">
                                <ul>
                                    <li>
                                        <span>
                                            <HiLanguage />
                                        </span>
                                        {data.language}
                                    </li>
                                    <li>
                                        <span className="color-fill">
                                            <FaStar />
                                        </span>
                                        {data.courseRating}
                                    </li>
                                    <li>{data.totelRting}</li>
                                    <li>
                                        <span>
                                            <MdOutlineAccessTime />
                                        </span>
                                        {data.totalHurs}
                                    </li>
                                </ul>
                            </div>
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Acdemy;
