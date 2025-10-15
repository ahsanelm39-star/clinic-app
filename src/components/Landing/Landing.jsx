import "./Landing.css"
import Reed from "../bablic/Reed/ReedMore"

export default function Landing (){
    return (
        <>
            <div className="landing">
                <img className="absolute top-1/8 left-1/10" src="/images/bolit.png" alt="toy" />
                <img className="absolute top-1/4 left-1/2" src="/images/landing-box.png" alt="toy" />
                <img className="absolute bottom-1/14 left-1/4 max-sm:left-1/10" src="/images/landing-+.png" alt="toy" />
                <img className="absolute bottom-1/14 right-1/8 max-sm:right-1/10" src="/images/landing-line.png" alt="toy" />
                <div className="landing-box">
                    <div className="text relative z-10">
                        <p >We Provide All Health Care Solution</p>
                        <h1>Protect Your healthy and take care of your health</h1>
                        <Reed/>
                    </div>
                    <div className="image">
                        <img src="/images/landing-img.png" alt="page" />
                    </div>
                </div> 
            </div>
        </>
    )
}    