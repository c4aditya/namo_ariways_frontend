import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import ClientReview from "../components/ClientReview";
import WeProvide from "../components/WeProvide";
import Achivement from "../components/Achivement";
function Home (){
    return(
        <>
        
        <Hero/>
        <Packages/>
        {/* <ClientReview/> */}
        <WeProvide/>
        <Achivement/>
        
        </>
    
    )
}

export default Home ;