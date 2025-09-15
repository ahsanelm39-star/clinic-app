import './Reed.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Reed () {


    function about () {
        document.querySelector(".li-about").click()
        document.querySelector(".li-about2").click()
    }


    return (
        <Link onClick={about} to={"/About"}>
            <div className="text-xl reed-more flex items-center cursor-pointer w-fit py-3 px-6 mt-6 rounded-md text-white ont-bold transition-all ">
                <span>Read More</span>
                <span className="text-black ml-2 text-md arwo"><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
        </Link>
)
}
