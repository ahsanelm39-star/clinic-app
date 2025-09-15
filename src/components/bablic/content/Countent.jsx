import { Link } from 'react-router-dom'
import './Countent.css'

export default function Countent () {
    return (
        <>
            <Link to={"/Contact"}>
                <div className='text-xl text-white rounded-md contact font-bold py-4 px-6'>
                    Contact Us
                </div>
            </Link>
        </>
    )
}