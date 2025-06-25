import { useLocation } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
function PackageDetails() {
    const location = useLocation();
    const data = location.state.package;
    console.log(data)
    return (
        <>
            <div className="marign-top">

            </div>
            <div className="package-details">

                <div className="image-package-details">
                    <img src={data.image} />
                </div>

            </div>

            <div className="main-top-class-package">
                <div className="content-package-details">
                    <div className="content-package-details-place">
                        <p>{data.name}</p>
                    </div>
                    <div className="para-content-package-details">
                        <p>{data.description}</p>
                    </div>

                    

                    <div className="about-facalityes">
                        <table>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>

                    <div className="days-where-spend">

                        <div className="heading-day-planing">
                            <p>Days We spend</p>
                        </div>
                        <ul>
                            <li><span>Day 1 -</span>{data.daysDetails.one}</li>
                             <li><span>Day 2 -</span>{data.daysDetails.two}</li>
                              <li><span>Day 3-</span>{data.daysDetails.three}</li>
                               <li><span>Day 4 -</span>{data.daysDetails.four}</li>
                               <li><span>Day 5 -</span>{data.daysDetails.five}</li>
                             
                        </ul>
                    </div>

                    <div className="what-we-provide-in-trip">
                        <div className="heading-day-planing">
                            <p>We Provide </p>
                        </div>
                        <ul>
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.one}</li>
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.two}</li>
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.three}</li>
                        </ul>
                    </div>
                </div>

                <div className="form-package-deatils">
                   <div className="heading-packagedeatils">
                    <p>Want Booking Now!</p>
                  
                  <div className="form-on-paclkage-details">
                    
                    <form>
                        <div className="name">
                            <input type="text" placeholder="Full Name "></input>                            
                        </div>

                        <div className="email-phone">
                            <input type="email" placeholder="Enter Email"></input>
                            <input type="number" placeholder="Enter Number"></input>
                        </div>

                        <div className="from-to">
                            <input type="number" placeholder="from"></input>
                            <input type="number" placeholder="To"></input>
                        </div>

                        <div className="package-deatils-button">
                            <button>Enquiry Now</button>
                        </div>
                    </form>
                  </div>
                  </div>
                  </div>
                 

            </div>

        </>
    )
}

export default PackageDetails