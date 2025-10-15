import './About.css'
import Reed from '../bablic/Reed/ReedMore'
import Countent from '../bablic/content/Countent';
// import { useEffect } from 'react'

export default function AboutUs ({chick}) {


const box = chick == "home" ? <Reed/> : <Countent/>

    return (
        <>
            <div className="about-us py-12 flex">
                <img src="/images/about-box.png" alt="toy" />
                <div className="images flex gap-4">
                    <div>
                        <img src="/images/about-1.jpg" alt="team" />
                        <img src="/images/about-2.jpg" alt="team" />
                    </div>
                    <div>
                        <img src="/images/about-3.jpg" alt="team" />
                        <div>25
                            <span>Year Experience</span>
                        </div>
                    </div>
                </div>
                <div className="box pl-4">
                    <div className="text mb-8">
                        <span className='inline-block mb-4 text-xl font-bold w-40 text-center about'>About Us</span>
                        <h2 className='text-4xl font-bold w-1/1 mb-8'>The Great Place Of Medical Hospital Center</h2>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    </div>
                    <div className="main-icon flex flex-wrap justify-center gap-y-8 mb-10">
                        <div>
                            <img src="/images/ambulase-2.png" alt="" />
                            <span>Emergency Help</span>
                        </div>
                        <div>
                            <img src="/images/Professionals.png" alt="" />
                            <span>Best Professionals</span>
                                
                        </div>
                        <div>
                            <img src="/images/doctors-icons.png" alt="" />
                            <span>Qualified Doctors</span>
                                
                        </div>
                        <div>
                            <img src="/images/Treatment bag.jpg" alt="" />
                            <span>Medical Treatment</span>
                            
                        </div>
                    </div>
                    {box}
                </div>
            </div>
        </>
    )
}