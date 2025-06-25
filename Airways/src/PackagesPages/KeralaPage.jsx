// getting data of kerala 
import keralaPackages from "./KeralaData";
import { FaRupeeSign } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import Filter from "./Flilter";
function KeralPackage(){

    return(
    <>
    <div className="marign-top">

    </div>
    <div className="data-filet">
        {/* <div>
            <Filter/>
        </div> */}

        <div className="main-class-of-pachage-details">

       

          {
          
            keralaPackages.map((data)=>(
                <div className="package-main-class" key={data.id}>

                    <div className="package-inside-image">
                        <img src={data.image}/>
                    </div>

                    <div className="package-inside-details">

                        <div className="left-div-package-inside-details">
                        <div className="package-inside-details-place">
                            <div className="package-inside-details-place-name">
                            <p className="group-color"> Group Booking </p>    
                            <p>{data.name}</p>

                            </div>

                            <div className="listing-adad">
                                <ul>
                                    <li><span><IoMdCheckmark/></span> {data.listing.one}</li>
                                    <li><span><IoMdCheckmark/></span>{data.listing.two}</li>
                                </ul>
                            </div>

                            <div className="about-facalityes">
                                <table>
                                    <tr>
                                        <th>Days</th>
                                        <th>Destinations</th>
                                        <th>Type</th>
                                    </tr>

                                    <tr>
                                        <td>{data.days}</td>
                                        <td>{data.Destination}</td>
                                        <td>{data.type}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>                      
                        </div>

                        <div className="price-package-details">

                            <div className="package-details-price">
                                <p>Starting From </p>
                                <p className="money"><FaRupeeSign />{data.price}</p>
                                <p><FaPersonCircleCheck /> Per Person</p>
                    

                            </div>

                            <div className="button">
                             <button>Enquiry Now</button>
                            </div>

                        </div>
                    </div>


                 
                </div>
            ))
          }
           </div>
        <div>
            
        </div>
    </div>
    
     </>
     )
}

export default KeralPackage;