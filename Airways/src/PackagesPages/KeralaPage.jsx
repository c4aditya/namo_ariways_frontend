// getting data of kerala 
import keralaPackages from "./KeralaData";
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
                            <p>{data.name}</p>
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
                    </div>


                 
                </div>
            ))
          }
        <div>
            
        </div>
    </div>
    
     </>
     )
}

export default KeralPackage;