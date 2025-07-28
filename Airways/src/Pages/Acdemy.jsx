// acdemyDat import should stay as you have it.
import acdemyDat from "./AcdemyData";
import { HiLanguage } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuBookOpenCheck } from "react-icons/lu";
import { PiExamThin } from "react-icons/pi";
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
    const enquiryNow = useRef(null)

    function showSection() {
        sectionShows.current.scrollIntoView({ behavior: "smooth" });
    }

    function showEnq() {
        enquiryNow.current.scrollIntoView({ behavior: "smooth" })
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
                                <button onClick={showEnq}>Enquiry Now</button>
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
                <div ref={sectionShows} className="wraper-acdemy">
                    <div className="top-class-content-acdemy">
                        <h1>Ready to reimagine your career?</h1>
                        <p>Get the skills and real-world experience employers want with Career Accelerators.</p>
                    </div>


                    <div className="acdemy-cards">

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
                </div>


            </section>

            <div ref={enquiryNow} className="position-not-listed top addmission-enq">
                <p>Want to get admission in Namo Ariways
                </p>

                <p>Let's connect <a href="https://gmail.com" className="underline"><span className="higlight">enquiry@namoairways.com</span> </a>  and our team will reach out to you.</p>
            </div>

            <section>
                <div className="our-goal">
                    <div className="left-side-goal">

                        <div className="goal-box">
                            <div className="ac-icon">
                                <LiaChalkboardTeacherSolid />

                            </div>

                            <div className="content-ac">
                                <h1>Both Online and Offiline Classes </h1>
                                <p>We Provide both class for both medium it up tp you what you want</p>
                            </div>

                        </div>

                        <div className="goal-box">
                            <div className="ac-icon">
                                <HiLanguage />

                            </div>

                            <div className="content-ac">
                                <h1>Both Hindi and English language </h1>
                                <p>We Provide you choice language bot Hindi and english </p>
                            </div>

                        </div>

                    </div>

                    <div className="moving-plane-image">

                        <img src="https://res.cloudinary.com/dxgmovaih/image/upload/v1753333359/movingPlane-removebg-preview_bwpjp4.png" alt="moving-plane-image" />

                    </div>
                    <div className="right-side-goal-box">


                        <div className="goal-box">
                            <div className="ac-icon">
                                <LuBookOpenCheck/>

                            </div>

                            <div className="content-ac">
                                <h1>Guidance</h1>
                                <p>We provide classes for both mediums it’s up to you what you want.</p>
                            </div>

                        </div>

                        <div className="goal-box">
                            <div className="ac-icon">
                                < PiExamThin/>

                            </div>

                            <div className="content-ac">
    <h1>Test Series</h1>
    <p>
        After each class, we provide mock tests to help students track and improve their progress.
    </p>
</div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Acdemy;
