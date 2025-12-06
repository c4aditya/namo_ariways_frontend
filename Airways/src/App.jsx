import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import FlightTicket from "./components/FlightTickets";
import "./components/components.css";
import Popup from "./components/PupForm";
import MainHotelpage from "./Pages/hotels/MainHotelpPage";
import HotelDetail from "./Pages/hotels/HotelDetails";
import Footer from "./components/Footer";
import Flight from "./Pages/Flight";
import PackageDetails from "./PackagesPages/PackageDetails";
import Aboutus from "./Pages/AboutUs";
import ContactUs from "./Pages/Contaxt";
import Carrer from "./Pages/Carrer";
import Applypage from "./Pages/ApplyPosition";
import TermAndCondition from "./Pages/TermAndConditon";
import ScrollUp from "./components/WindowScrollTop";
import OurPackages from "./Pages/OurPackages";
import Message from "./components/Message";
import GroupDeprature from "./Pages/HolidaysPacakages/GroupDeparture";
import Honeymoon from "./Pages/HolidaysPacakages/HoneyMoon";
import Devotional from "./Pages/HolidaysPacakages/Devotional";
import KeralPackage from "./PackagesPages/KeralaPage";
import GoaPackage from "./PackagesPages/GoaPage";
import AndmanPackage from "./PackagesPages/AndmanPage";
import Uttrakhandpackages from "./PackagesPages/UttrakhandPage";
import JandKpage from "./PackagesPages/JandKpage";
import BanarashPage from "./PackagesPages/BanarashPage";
import HimanchalPradeshPackage from "./PackagesPages/HimanchalPage";
import Acdemy from "./Pages/Acdemy";
import CourseDetails from "./Pages/CourseDetails";
import Caution from "./Pages/Caution"
import AviationJob from "./Pages/AviationJob";
import FAQ from "./Pages/FAQ"
import { useState } from "react";
import { useEffect } from "react";
import PackageDetailsinfo from "./PackagesPages/PackageInfoDetails";
import MainFlightTicketForm from "./components/Main-from_flight";
// import FilterHotelLocation from "./Pages/hotels/FilterHotelLocation";
function App() {
    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2 second baad popup show hoga

    return () => clearTimeout(timer); // Cleanup
  }, []);
  const handleClose = () => setShowPopup(false);

  return (
    <>
  {showPopup && <Popup  onClose={handleClose} />}
      <Router>

        <Navbar/>
        <ScrollUp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caution" element={<Caution />} />
           <Route path="/aviation" element={<AviationJob />} />
          <Route path="/hotel" element={<MainHotelpage />} />
          <Route path="/viewHotelDetails" element={<HotelDetail />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourAcdemy" element={<Acdemy/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/courseDetails" element={<CourseDetails/>}/>
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/applyPage" element={<Applypage />} />
          <Route path="/Term_and_Condition" element={<TermAndCondition />} />
          <Route path="/OurPackages" element={<OurPackages />} />
          <Route path="/groupDeparture" element={<GroupDeprature />} />
          <Route path="/honeymoon" element={<Honeymoon />} />
          <Route path="/deveotinal" element={<Devotional />} />
           <Route path="/packageInfo" element={<PackageDetailsinfo/>} />
          <Route path="/package/goa" element={<GoaPackage />} />
          <Route path="/package/kerala" element={<KeralPackage />} />
          <Route path="/package/Jammu And Kashmir" element={<JandKpage/>} />
          <Route path="/package/Himachal Pradesh" element={<HimanchalPradeshPackage />} />
          <Route path="/package/Uttarakhand" element={<Uttrakhandpackages/>} />
          <Route path="/package/Andaman" element={<AndmanPackage/>} />
          <Route path="/package/banaras" element={<BanarashPage/>} />
          <Route path="/packageDetails/:id" element={<PackageDetails />} />
          <Route path="/ticketBooking" element={<FlightTicket/>} />
          <Route path="/FAQ" element={<FAQ />} />

          <Route path="/flight-ticket-form" element={<MainFlightTicketForm/> } />
          {/* <Route path="/hotelLocation" element={<FilterHotelLocation/>} /> */}
        </Routes>
        <Message />
        <Footer />


      </Router>  
    
    </>
  )
}

export default App
