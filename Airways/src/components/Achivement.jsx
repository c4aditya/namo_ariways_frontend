import { IoHappyOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrMap } from "react-icons/gr";
import { MdOutlineRocketLaunch } from "react-icons/md";
function Achivement() {
    return (
        <>
        <div className="background-color">
            <div className="top ach">
                <div className="achivement-top">
                    <div className="heading-achivement">
                        <div className="heading-ach">
                            <h1>We're curating experiences that</h1>

                        </div>

                        <div className="para-ach">
                            <p>Present you a Perfect vacation</p>

                        </div>
                    </div>

                    <div className="top-achivement-content">

                        <div className="icon-text">
                            <div className="icon-ach">
                                <IoHappyOutline />
                            </div>

                            <div className="counts">
                                7,500 + 
                            </div>

                            <div className="text-ach">
                                <p>Happy Clinet </p>

                            </div>
                        </div>


                        <div className="icon-text">
                            <div className="icon-ach">
                                <TfiCup/>
                            </div>

                            <div className="counts">
                                176 +
                            </div>

                            <div className="text-ach">
                                <p>Tour completed</p>

                            </div>
                        </div>


                        <div className="icon-text">
                            <div className="icon-ach">
                                <LiaCertificateSolid />
                            </div>

                            <div className="counts">
                                345 +
                            </div>

                            <div className="text-ach">
                                <p>Tour Experts</p>

                            </div>
                        </div>


                        <div className="icon-text">
                            <div className="icon-ach">
                                <GrMap/>
                            </div>

                            <div className="counts">
                                1789 +
                            </div>

                            <div className="text-ach">
                                <p>Tour destination</p>

                            </div>
                        </div>


                        <div className="icon-text">
                            <div className="icon-ach">
                                <MdOutlineRocketLaunch/>
                            </div>

                            <div className="counts">
                                <p>Our Mission</p>
                            </div>

                            <div className="text-ach">
                                <p>Being Best Travelar Componey in india </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Achivement;