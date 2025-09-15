import './Working.css'
import Viwe from '../bablic/View/View'
import { useEffect } from 'react'

export default function Working () {
    useEffect(()=>{
    const wSection =  document.querySelector(".work")
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= wSection.offsetTop - 500){
            wSection.classList.add("movement")
            }else{
            wSection.classList.remove("movement")
        }
    })
},[])






    return (
        <>
            <div className="work">
                <img src="/images/work-bolit.png" alt="" />
                <img src="/images/work-line.png" alt="" />
                <img src="/images/book-+.png" alt="" />
                <div className="text mb-26 text-center">
                    <span className='text-xl font-bold head px-3'>Working Process</span>
                    <h2 className='mt-4 font-bold'>How we works?</h2>
                </div>
                <div className="main-box flex justify-center flex-wrap gap-y-4">
                    <div className="box ">
                        <span>01</span>
                        <h2>Make Appointmnet</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <Viwe word="View"/>
                    </div>
                    <div className="box">
                        <span>02</span>
                        <h2>Take Treatment</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <Viwe word="View"/>
                    </div>
                    <div className="box">
                        <span>03</span>
                        <h2>Registration</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <Viwe word="View"/>
                    </div>
                </div>  
            </div>
        </>
    )
}