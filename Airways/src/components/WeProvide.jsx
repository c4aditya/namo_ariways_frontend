import { GiHotMeal } from "react-icons/gi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { PiFirstAidKitLight } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";
function WeProvide() {
    const provideData = [
        {
            id: 1,
            title: "Accommodation",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <GiHotMeal/>
        },

        {
            id: 2,
            title: "All meals",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <GiHotMeal/>
        },

        {
            id: 3,
            title: "Our Transport",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <MdOutlineEmojiTransportation />
        },

        {
            id: 4,
            title: "Tour managers",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <CiFlag1/>
        },

        {
            id: 5,
            title: "First Aid",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <PiFirstAidKitLight/>
        },

        {
            id: 6,
            title: "Guide",
            descripction: "Comfortable & convenient hotels cherry picked by our hotel management team",
            iocn : <FaPerson/>
        },
    ]
    return (
        <>
            <div className="top">
                <div className="content-we-provide">
                    <div className="heading-weProvide">
                    <h1>All inclusive tours</h1>
                    </div>

                    <div className="para-weProvide">

                     

                    </div>
                   
                </div>
                <div className="main-weProvide">
                    {
                        provideData.map((data) => (

                            <div className="data" key={data.id}>

                                <div className="image-we-provide">
                                    <div className="i">

                                    {data.iocn}

                                    </div>

                                    <div className="title-weProvide">
                                        <h2>{data.title}</h2>
                                    </div> 

                                </div>

                                <div className="main-content-we-provide">
                                    

                                    <div className="descripction-weProvide">
                                        <p>{data.descripction}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WeProvide;