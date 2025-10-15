import './Testimonial'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Testimonials () {

    useEffect(()=>{
    const tSection =  document.querySelector(".test")
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= tSection.offsetTop - 500){
            tSection.classList.add("movement")
            }else{
            tSection.classList.remove("movement")
        }
    })
},[])

    const [num,setNum] = useState(1)

    const coments = [
        {
            id:1,
            img:"/images/p-1.jpg",
            name:"John Deo",
            p:"I am very happy to deal with this wonderful hospital and that they care and look after all patients."
        },
        {
            id:2,
            img:"/images/p-2.jpg",
            name:"Victoria",
            p:"It was really great dealing with you. Thank you I loved your concern and care for the patients."
        },
        {
            id:3,
            img:"/images/p-3.jpg",
            name:" mohammed",
            p:"This hospital is wonderful in all health aspects, especially dealing with patients. It was wonderful."
        },
        {
            id:4,
            img:"/images/p-4.jpg",
            name:"asile",
            p:"It was really great dealing with you. Thank you I loved your concern and care for the patients."
        },
        {
            id:5,
            img:"/images/p-5.jpg",
            name:"Michael",
            p:"I am very happy to deal with this wonderful hospital and that they care and look after all patients."
        }
    ]

    function move () {
        if(num<5){
            setNum(num+1)
        }
    }
    function move2 () {
        if(num>1){
            setNum(num-1)
        }
    }

    const comentsList = coments.map(( d , i )=>{
        if(i == num-1 ){
        return (
            <div key={d.id} className="box">
                <img src={d.img} alt="" />
                <p>{d.p}</p>
                <div>
                    <span>{d.name}</span>
                    <span>PATIENT</span>
                </div>
            </div>
        )
        }
    })


    return (
        <>
            <div className="test">
                <div className="test-head">
                    <span className='text-2xl'>Testimonial</span>
                    <h2>See What Are The Patients Saying About us</h2>
                    <div className='flex justify-center gap-x-8'>
                        <span onClick={move2} className='font-bold text-4xl cursor-pointer py-2 px-4 rounded-md hover:opacity-80 transition-all'style={
                            {
                                opacity:num == 1 ? "0.4" :"1",
                                pointerEvents: num ==1 ? "none":"all"
                            }
                        }><FontAwesomeIcon icon={faChevronLeft}  /></span>
                        <span onClick={move}  className='font-bold text-4xl cursor-pointer py-2 px-4 rounded-md hover:opacity-80 transition-all' style={
                            {
                                opacity:num == 5 ? "0.4" :"1",
                                pointerEvents: num ==5 ? "none":"all"
                            }
                        }><FontAwesomeIcon icon={faChevronRight} /></span>
                    </div>
                </div>
                    <div className='test-collect'>
                        {comentsList}
                        <span className='text-2xl mt-2 inline-block select-none'>{num}/5</span>
                    </div>
            </div>
        </>
    )
}