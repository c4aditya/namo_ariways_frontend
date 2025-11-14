import goaPackages from "./JandKdata";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import { LiaRupeeSignSolid, LiaHotelSolid } from "react-icons/lia";
import { GiMeal } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { PiExclamationMark } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
function GoaPackage() {
    const Navigate = useNavigate()
  const [posterImages] = useState([
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImages() {
    setCurrentIndex(currentIndex === posterImages.length - 1 ? 0 : currentIndex + 1);
  }

  function priviousImage() {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  }

  const [packagedata, setPackageData] = useState(goaPackages);

  // Active filter state
  const [activePrice, setActivePrice] = useState(null);
  const [activeDay, setActiveDay] = useState(null);

  function PriceHandler(min, max, key) {
    const result = goaPackages.filter(
      (priceFilter) => priceFilter.price >= min && priceFilter.price <= max
    );
    setPackageData(result);
    setActivePrice(key);
    setActiveDay(null);
  }

  function dayFiltering(min, max, key) {
    const result = goaPackages.filter(
      (dayFilter) => dayFilter.days >= min && dayFilter.days <= max
    );
    setPackageData(result);
    setActiveDay(key);
    setActivePrice(null);
  }

  function handleClearFilter() {
    setPackageData(goaPackages);
    setActivePrice(null);
    setActiveDay(null);
  }

  // Only for filter buttons: active/inactive style
  const activeBtn = {
    background: "#D24D3E",
    color: "white",
    fontWeight: "bold",
  };
  const inactiveBtn = {
    background: "#fff",
    color: "#222",
  };

  return (
    <>
      <div className="marign-top"></div>
      <div className="top-class-at-package">
        <div className="left-side-top-package-class">
          <div className="content-left-side-package-class">
            <div className="heading-left-side">
              <h1>jammu and Kashmir  Packages Tour</h1>
            </div>
            <div className="para-left-side">
              <p>
  Experience the breathtaking beauty of Jammu & Kashmir, where snow-capped mountains, crystal-clear lakes,
  and lush valleys create a paradise on earth. Enjoy peaceful shikara rides on Dal Lake, explore vibrant
  local markets, and savor rich Kashmiri cuisine. Discover ancient temples, serene gardens, and the
  unforgettable charm of India’s most picturesque destination.
</p>

            </div>
          </div>
          <div className="button-book-call">
            <button onClick={()=>Navigate("/contactUs")}>Request for call </button>
          </div>
        </div>
        <div className="side-images">
          <div className="privious-poster-package-button">
            <button onClick={priviousImage}>
              <GrPrevious />
            </button>
          </div>
          <img src={posterImages[currentIndex]} alt="Goa"  />
          <div className="next-poster-package-button">
            <button onClick={nextImages}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
      <section className="main-section-package">
        <div className="package-name-top-title">
          <p className="package-name-top-title-heading">Jammu and Kashmir  Holiday's Packages</p>
          <p className="package-name-top-title-package">Showing all {packagedata.length} packages for Jammu and Kashmir</p>
        </div>
        <div className="package-class-wrapper">
          <div className="filter-section">
            <div className="hader-filter-section ">
              <div className="filter-icon">
                <ul>
                  <li>
                    <span>
                      <CiFilter />
                    </span>{" "}
                    Filter
                  </li>
                </ul>
              </div>
              <div className="clear-filter">
                <button className="price-range-buttons" onClick={handleClearFilter}>Clear</button>
              </div>
            </div>
            <div className="price-range">
              <p>Price Range </p>
              <div className="price-buttons">
                <button
                  className="price-range-buttons"
                  style={activePrice === "6000-8000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(6000, 8000, "6000-8000")}
                >
                  6000 - 8000
                </button>
                <button
                  className="price-range-buttons"
                  style={activePrice === "9000-10000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(9000, 10000, "9000-10000")}
                >
                  9000 - 10000
                </button>
                <button
                  className="price-range-buttons"
                  style={activePrice === "11000-15000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(11000, 15000, "11000-15000")}
                >
                  11000 - 15000
                </button>
                <button
                  className="price-range-buttons"
                  style={activePrice === "16000-18000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(16000, 18000, "16000-18000")}
                >
                  16000 - 18000
                </button>
                <button
                  className="price-range-buttons"
                  style={activePrice === "19000-20000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(19000, 20000, "19000-20000")}
                >
                  19000 - 20000
                </button>
                <button
                  className="price-range-buttons"
                  style={activePrice === "21000-250000" ? activeBtn : inactiveBtn}
                  onClick={() => PriceHandler(21000, 250000, "21000-250000")}
                >
                  21000 - 250000
                </button>
              </div>
            </div>
            <div className="price-range">
              <p>Days </p>
              <div className="price-buttons">
                <button
                  className="price-range-buttons"
                  style={activeDay === "4-10" ? activeBtn : inactiveBtn}
                  onClick={() => dayFiltering(4, 10, "4-10")}
                >
                  4-10 days
                </button>
                <button
                  className="price-range-buttons"
                  style={activeDay === "11-15" ? activeBtn : inactiveBtn}
                  onClick={() => dayFiltering(11, 15, "11-15")}
                >
                  11-15 days
                </button>
                <button
                  className="price-range-buttons"
                  style={activeDay === "16-20" ? activeBtn : inactiveBtn}
                  onClick={() => dayFiltering(16, 20, "16-20")}
                >
                  16-20 days
                </button>
                <button
                  className="price-range-buttons"
                  style={activeDay === "21-25" ? activeBtn : inactiveBtn}
                  onClick={() => dayFiltering(21, 25, "21-25")}
                >
                  21-25 days
                </button>
              </div>
            </div>
          </div>
          {/* Baaki pura code waisa hi hai, bina inline css */}
          <div className="package-details-section">
            {packagedata.length === 0 ? (
              <div className="no-data-found">
                <div className="heading-no-data-found">
                  <p>No Tour's Found </p>
                </div>
                <div className="image-no-data-found">
                  <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdscW4wdmp4NWE2cWlqYzd1ZmdpcG9lNHo3Mm1zeG8wMTY0cG85bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OKvgO8uBDWi3Uu6ht3/giphy.gif"
                    alt="no data"
                  />
                </div>
                <div className="refresh-package">
                  <button className="view-all-tours" onClick={handleClearFilter}>
                    View All Tours
                  </button>
                </div>
              </div>
            ) : (
              packagedata.map((data) => (
                <div className="package-deatils-div" key={data.id}>
                  <div className="place-image">
                    <img src={data.image} alt={data.name} />
                  </div>
                  <div className="destination-name">
                    <p>{data.name}</p>
                  </div>
                  <div className="total-days-night">
                    <p>{data.totalDays}</p>
                  </div>
                  <hr className="cards-hr" />
                  <div className="all-inclusaive">
                    <p>
                      All Inclusive <span><PiExclamationMark /></span>
                    </p>
                    <ul>
                      <li><LiaHotelSolid /> <span>Hotel</span></li>
                      <li><GiMeal /><span>Meal</span></li>
                      <li><IoCarSportOutline /><span>Transport</span></li>
                      <li><BsCamera /><span>Sightseens</span></li>
                      <li><GrUserManager /> <span>Tour Manager</span></li>
                    </ul>
                  </div>
                  <hr className="cards-hr" />
                  <div className="customize-holiday">
                    <div className="cs">
                      <p>Customize this holiday</p>
                      <ul>
                        <li>
                          <span><PiPhoneCallLight /></span> 8987654565
                        </li>
                      </ul>
                    </div>
                    <div className="price-package">
                      <p>
                        Starting from <span><LiaRupeeSignSolid /> {data.price}</span> for per person
                      </p>
                    </div>
                  </div>
                  <div className="package-detials-buttons">
                    <div className="deatils-button">
                      <button onClick={()=>Navigate("/packageInfo" , {state:data})}>View Details</button>
                    </div>
                    <div className="enquiry-now">
                      <button onClick={()=> Navigate("/contactUs")}>Enquiry Now</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default GoaPackage;
