import { useLocation } from "react-router-dom"

function CourseDetails(){
    
    const location = useLocation()
    const locate = location.state;
    console.log(locate)
    return(
        <>
        <div className="marign-top">

        </div>
        <div>
            <p>{locate.courseTitle}</p>
        </div>
        </>
    )
}

export default CourseDetails;