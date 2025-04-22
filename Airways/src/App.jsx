import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import "./components/components.css";
import MainHotelpage from "./Pages/hotels/MainHotelpPage";
function App() {


  return (
   <>
     
     <Router>

     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotel" element ={<MainHotelpage/>}/>
      </Routes>
      
     </Router>

    
    
     
   </>
  )
}

export default App
