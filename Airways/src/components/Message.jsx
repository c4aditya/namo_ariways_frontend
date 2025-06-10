import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineCall, MdOutlineMessage } from "react-icons/md";
import { useEffect, useState } from "react";

function Message() {
  const [onMessageClick, setMessageClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);  // 200px se zyada scroll hone par true
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const messageClick = () => {
    setMessageClick((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`quick-enquiry ${scrolled ? "show" : ""}`}>
      {onMessageClick && (
        <div className="enquiry-content">
          <div className="whats-app">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
          <div className="mobile">
            <a href="tel:9068236136">
              <MdOutlineCall />
            </a>
          </div>
        </div>
      )}

      <div className="inside-enquiry">
        <button className="topArrow" onClick={scrollToTop}>
          <FaArrowUpLong />
        </button>

        <button onClick={messageClick} className="btn-quick-enq">
          {onMessageClick ? <RxCross1 /> : <MdOutlineMessage />}
        </button>
      </div>
    </div>
  );
}

export default Message;
