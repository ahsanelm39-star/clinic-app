import './View.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




export default function Viwe ({word}) {


    function ser() {
        document.querySelector(".ser").click()
        document.querySelector(".ser2").click()
    }

    return (
        <Link onClick={ser} to={'/Services'}>
            <div className='bg-blue-200 w-fit py-2 pl-6 pr-4 rounded-md flex cursor-pointer view'>
                <span className='font-bold  text-xl'>{word} More</span>
                <span className='ml-4 font-bold text-md bg-white py-1 px-3 rounded-md'><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
        </Link>
    )
} 