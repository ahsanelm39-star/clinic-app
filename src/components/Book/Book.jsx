import './Book.css'
// import { useEffect } from 'react'

export default function Book () {
// useEffect(()=>{
//     const bSection =  document.querySelector(".book")
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY >= bSection.offsetTop - 500){
//             bSection.classList.add("movement")
//             }else{
//             bSection.classList.remove("movement")
//         }
//     })
// },[])
    return (
        <>
            <div className="book flex flex-wrap justify-between items-center">
                <form action="" className='bg-white rounded-3xl p-6 pt-8'>
                    <h2>Book Appointment</h2>
                    <select>
                        <option>Select Department</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                    <select>
                        <option>Select Doctor</option>
                        <option>One</option>
                        <option>Tow</option>
                        <option>Three</option>
                    </select>
                    <input type="text"  placeholder='Your Name' required/>
                    <input type="text"  placeholder='Phone Number' required/>
                    <input type="date" />
                    <input type="submit" value={"Appointment Now"} />
                </form>
                <div className="image">
                    <img src="/images/booking-phone.png" alt="phone" />
                    <img src="/images/book-giral.png" alt="giral" />
                    <img src="/images/book-setting.png" alt="setting" />
                    <img src="/images/conact-location.png" alt="location" />
                </div>
            </div>
        </>
    )
} 