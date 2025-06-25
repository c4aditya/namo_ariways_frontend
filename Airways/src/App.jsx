import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import "./components/components.css";
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
import FAQ from "./Pages/FAQ"
// import FilterHotelLocation from "./Pages/hotels/FilterHotelLocation";
function App() {


  return (
   <>     
     <Router>
    
     <Navbar/>
      <ScrollUp/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotel" element ={<MainHotelpage/>}/>
        <Route path="/viewHotelDetails" element={<HotelDetail/>} />
        <Route path="/flight" element={<Flight/>} />       
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactUs" element={<ContactUs/>}/>  
        <Route path="/carrer" element={<Carrer/>}/>  
        <Route path="/applyPage" element={<Applypage />} />
        <Route path="/Term_and_Condition" element={<TermAndCondition/>} />
        <Route path="/OurPackages" element={<OurPackages/>} />
        <Route path="/groupDeparture" element={<GroupDeprature/>} />
        <Route path="/honeymoon" element={<Honeymoon/>}  />
        <Route path="/deveotinal" element={<Devotional/>}  />
        <Route path="/package/:place" element={<KeralPackage/>}/>
        <Route path="/packageDetails/:id" element={<PackageDetails/>} />
        <Route path="/FAQ" element={<FAQ/>} />

        {/* <Route path="/hotelLocation" element={<FilterHotelLocation/>} /> */}
      </Routes>
      <Message/>
     <Footer/>

      
     </Router>

    
    
     
   </>
  )
}

export default App
