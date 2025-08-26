import React, { useState, useEffect } from "react";
import { IoHappyOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrMap } from "react-icons/gr";
import { MdOutlineRocketLaunch } from "react-icons/md";

function Achivement() {
  const [happyClients, setHappyClients] = useState(0);
  const [toursCompleted, setToursCompleted] = useState(0);
  const [tourExperts, setTourExperts] = useState(0);
  const [tourDestinations, setTourDestinations] = useState(0);

  useEffect(() => {
 
    const duration = 20000; 
    const interval = 100;

    // Happy Clients (7500)
    const happyClientsTarget = 7500;
    const stepHappy = Math.ceil(happyClientsTarget / (duration / interval));
    let currentHappy = 0;
    const timerHappy = setInterval(() => {
      currentHappy += stepHappy;
      if (currentHappy >= happyClientsTarget) {
        setHappyClients(happyClientsTarget);
        clearInterval(timerHappy);
      } else {
        setHappyClients(currentHappy);
      }
    }, interval);

    // Tours Completed (176)
    const toursCompletedTarget = 176;
    const stepTours = Math.ceil(toursCompletedTarget / (duration / interval));
    let currentTours = 0;
    const timerTours = setInterval(() => {
      currentTours += stepTours;
      if (currentTours >= toursCompletedTarget) {
        setToursCompleted(toursCompletedTarget);
        clearInterval(timerTours);
      } else {
        setToursCompleted(currentTours);
      }
    }, interval);

    // Tour Experts (345)
    const tourExpertsTarget = 345;
    const stepExperts = Math.ceil(tourExpertsTarget / (duration / interval));
    let currentExperts = 0;
    const timerExperts = setInterval(() => {
      currentExperts += stepExperts;
      if (currentExperts >= tourExpertsTarget) {
        setTourExperts(tourExpertsTarget);
        clearInterval(timerExperts);
      } else {
        setTourExperts(currentExperts);
      }
    }, interval);

    // Tour Destinations (1789)
    const tourDestinationsTarget = 1789;
    const stepDestinations = Math.ceil(tourDestinationsTarget / (duration / interval));
    let currentDestinations = 0;
    const timerDestinations = setInterval(() => {
      currentDestinations += stepDestinations;
      if (currentDestinations >= tourDestinationsTarget) {
        setTourDestinations(tourDestinationsTarget);
        clearInterval(timerDestinations);
      } else {
        setTourDestinations(currentDestinations);
      }
    }, interval);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(timerHappy);
      clearInterval(timerTours);
      clearInterval(timerExperts);
      clearInterval(timerDestinations);
    };
  }, []);

  return (
    <>
      <div className="background-color">
        <div className="top ach">
          <div className="achivement-top">
            <div className="heading-achivement">
              <div className="heading-ach">
                <h1>We're curating experiences that</h1>
              </div>
              <div className="para-ach">
                <p>Present you a Perfect vacation</p>
              </div>
            </div>

            <div className="top-achivement-content">
              <div className="icon-text">
                <div className="icon-ach">
                  <IoHappyOutline />
                </div>
                <div className="counts">
                  {happyClients.toLocaleString()} +
                </div>
                <div className="text-ach">
                  <p>Happy Client</p>
                </div>
              </div>

              <div className="icon-text">
                <div className="icon-ach">
                  <TfiCup />
                </div>
                <div className="counts">
                  {toursCompleted} +
                </div>
                <div className="text-ach">
                  <p>Tour completed</p>
                </div>
              </div>

              <div className="icon-text">
                <div className="icon-ach">
                  <LiaCertificateSolid />
                </div>
                <div className="counts">
                  {tourExperts} +
                </div>
                <div className="text-ach">
                  <p>Tour Experts</p>
                </div>
              </div>

              <div className="icon-text">
                <div className="icon-ach">
                  <GrMap />
                </div>
                <div className="counts">
                  {tourDestinations} +
                </div>
                <div className="text-ach">
                  <p>Tour destination</p>
                </div>
              </div>

              <div className="icon-text">
                <div className="icon-ach">
                  <MdOutlineRocketLaunch />
                </div>
                <div className="counts">
                  <p>Our Mission</p>
                </div>
                <div className="text-ach">
                  <p>Being Best Traveler Company in india</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achivement;
