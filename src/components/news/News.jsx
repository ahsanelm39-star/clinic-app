import './News.css'
import Viwe from '../bablic/View/View'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'


export default function News (){
    useEffect(()=>{
    const neSection =  document.querySelector(".news")
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= neSection.offsetTop - 500){
            neSection.classList.add("movement")
            }else{
            neSection.classList.remove("movement")
        }
    })
},[])



    return (
        <>
            <div className="news">
                <img src="/images/work-bolit.png" alt="" />
                <img src="/images/about-box.png" alt="" />
                <div className="head">
                    <span>Latest News</span>
                    <h2>Our Latest News</h2>
                </div>
                <div className="conten flex gap-8 flex-wrap justify-center">
                    <div className="box">
                        <div className="image">
                            <img src="/images/pic1.jpg" alt="" />
                        </div>
                        <span><FontAwesomeIcon icon={faCalendarDays}/> 21 july 2025</span>
                        <h3>in this hospital there are special surgeon</h3>
                        <Viwe word="Read"/>
                    </div>
                
                    <div className="box">
                        <div className="image">
                            <img src="/images/pic2.jpg" alt="" />
                        </div>
                        <span><FontAwesomeIcon icon={faCalendarDays}/> 20 july 2025</span>
                        <h3>can you get a diflucan prescription online?</h3>
                        <Viwe word="Read"/>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/images/pic3.jpg" alt="" />
                        </div>
                        <span><FontAwesomeIcon icon={faCalendarDays}/> 19july 2025</span>
                        <h3>why is skin surgeon considered underrated</h3>
                        <Viwe word="Read"/>
                    </div>
                </div>
            </div>
        </>
    )
}