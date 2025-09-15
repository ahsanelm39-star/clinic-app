import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function  Footer () {


    function about () {
        document.querySelector(".li-about").click()
        document.querySelector(".li-about2").click()
    }

    function ser() {
        document.querySelector(".ser").click()
        document.querySelector(".ser2").click()
    }
    function book() {
        document.querySelector(".bo").click()
        document.querySelector(".bo2").click()
    }
    function faq() {
        document.querySelector(".fa").click()
        document.querySelector(".faq2").click()
    }
    function team() {
        document.querySelector(".te").click()
        document.querySelector(".te2").click()
    }


    return (
        <>
            <footer>
                <div className="cont flex flex-wrap justify-center  gap-15 gap-y-5">
                    <div className="box b-1">
                        <img src="/images/logo.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit tempora praesentium aspernatur odio maxime.</p>
                        <div className='flex mt-8'>
                            <span className=' icon font-bold text-2xl mr-4'><FontAwesomeIcon icon={faPhone} /></span>
                            <div className='flex flex-col'>
                                <span className=' text-xl '>Contact Us</span>
                                <span className='font-bold text-2xl'>(+01)999 888 777</span>
                            </div>
                        </div>
                    </div>
                    <div className="box b-2">
                        <h2>Quick Links</h2> 
                        <ul>
                            <div onClick={about} className='flex items-center gap-x-3'>
                                <span><FontAwesomeIcon icon={faArrowRight} />  </span>
                                <Link to={'/About'}><li>Apout Us</li></Link>
                            </div>
                            <div onClick={ser} className='flex items-center gap-x-3'>
                                <span><FontAwesomeIcon icon={faArrowRight} />  </span>
                                <Link to={'/Services'}>
                                    <li>Services</li>
                                </Link>
                            </div>
                            <div onClick={book} className='flex items-center gap-x-3'>
                                <span><FontAwesomeIcon icon={faArrowRight} />  </span>
                                <Link to={'/Booking'}>
                                    <li>Booking</li>
                                </Link>
                            </div>
                            <div onClick={faq} className='flex items-center gap-x-3'>
                                <span><FontAwesomeIcon icon={faArrowRight} />  </span>
                                <Link to={"/FAQ'S"}><li>FAQ'S</li></Link>
                            </div>
                            <div onClick={team} className='flex items-center gap-x-3'>
                                <span><FontAwesomeIcon icon={faArrowRight} />  </span>
                                <Link to={"/Team"}> 
                                    <li>Our Team</li>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    
                    <div className="box b-4">
                        <h2>Subcribe</h2>
                        <form action="">
                            <input type="email"  placeholder='Email Address' required/>
                            <input type="submit" value={"Subscribe Now"}  className='transition-all cursor-pointer'/>
                        </form>
                        <div className='main-icon flex justify-center'>
                            <a href="https://www.facebook.com/" target='plank'><img src="/images/facebook (2)_1.png" alt="" /></a>
                            <a href="https://www.instagram.com/" target='plank'><img src="/images/Instagram_logo_2022.svg.webp" alt="" /></a>
                            <a href="https://www.linkedin.com/" target='plank'><img src="/images/linked.png" alt="" /></a>
                            <a href="https://twitter.com/" target='plank'><img src="/images/x.avif" alt="" /></a>
                        </div>
                    </div>
                </div>
                <hr/> 
                <p className='text-center flex justify-center items-center h-20 text-3xl flex-wrap '><span>Copyright © 2025 Design & Developed by</span> <span className='name ml-2'>Ahmed Mohammed</span></p>
                <img src="/images/footer-+.png" alt="" />
                <img src="/images/footer-liner.png" alt="" />
                <img src="/images/footer-liner.png" alt="" />
                <img src="images/footer-sicral.png" alt="" />
            </footer>
        </>
    )
}