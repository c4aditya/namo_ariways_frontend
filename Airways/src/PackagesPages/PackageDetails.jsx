import { Navigate, useLocation } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function PackageDetails() {
  const Navigate = useNavigate()
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
                        <ul className="main-listing-day-spens">
                            <li><span> <CiLocationOn/> </span> <span>Day 1 -</span>{data.daysDetails.one}</li>
                             <li><span> <CiLocationOn/> </span><span>Day 2 -</span>{data.daysDetails.two}</li>
                              <li><span> <CiLocationOn/> </span><span>Day 3 -</span>{data.daysDetails.three}</li>
                               <li><span> <CiLocationOn/> </span><span>Day 4 -</span>{data.daysDetails.four}</li>
                               <li><span> <CiLocationOn/> </span><span>Day 5 -</span>{data.daysDetails.five}</li>
                             
                        </ul>
                    </div>

                    <div className="what-we-provide-in-trip">
                        <div className="heading-day-planing">
                            <p>We Provide </p>
                        </div>
                        <ul className="main-listing-day-spens">
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.one}</li>
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.two}</li>
                            <li><sapn><IoMdCheckmark /></sapn> {data.points.three}</li>
                        </ul>
                    </div>

                      <div className="padding-last">
                    <button onClick={()=> Navigate("/contactUs")}>Enquiry now</button>
                </div>
                </div>

              

               
                 

            </div>

        </>
    )
}

export default PackageDetails