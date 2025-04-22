import { useEffect, useState } from "react";

function Hero() {
  const images = [
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/travel-world-1.jpg",
      text: "Explore the world with us"
    },
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/suitcase.jpg",
      text: "Pack your bags for adventure"
    },
    {
      url: "https://namoairways.com/wp-content/uploads/2024/12/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg",
      text: "Capture memories that last forever"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function priviousImage() {
    const isFristImage = currentIndex === 0;
    const newImage = isFristImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newImage);
  }

  function nextImage() {
    const isLastImage = currentIndex === images.length - 1;
    const newImage = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newImage);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds (you had 50000 which is 50 sec 😅)

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="poster-images-with-change-button-top-div">
        <div className="posterImage">
          <div className="priviousimage-button" onClick={priviousImage}>
            -
          </div>

          <div className="images">
            <img src={images[currentIndex].url} alt="Poster" />
            <h1>{images[currentIndex].text}</h1>
          </div>

          <div className="nextImage-button" onClick={nextImage}>
            +
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
