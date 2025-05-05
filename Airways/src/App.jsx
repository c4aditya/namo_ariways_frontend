import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import "./components/components.css";
import MainHotelpage from "./Pages/hotels/MainHotelpPage";
import HotelDetail from "./Pages/hotels/HotelDetails";
import Footer from "./components/Footer";
import Flight from "./Pages/Flight";
// import FilterHotelLocation from "./Pages/hotels/FilterHotelLocation";
function App() {


  return (
   <>
     
     <Router>

     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotel" element ={<MainHotelpage/>}/>
        <Route path="/viewHotelDetails" element={<HotelDetail/>} />
        <Route path="/flight" element={<Flight/>} />
        {/* <Route path="/hotelLocation" element={<FilterHotelLocation/>} /> */}
      </Routes>
     <Footer/>

      
     </Router>

    
    
     
   </>
  )
}

export default App
