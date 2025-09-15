import './Numbers.css'
import {useState } from 'react'
import { useEffect } from 'react'

export default function Numbers () {
    const [state,setState] = useState({
        num1:0,
        num2:0,
        num3:0,
        num4:0
    })
    useEffect(()=>{
    const nSection =  document.querySelector(".number")
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= nSection.offsetTop - 600){
            nSection.classList.add("movement")
            setInterval(() => {
                setState({...state,num1:state.num1 < 123 ? state.num1++:122,num2:state.num2 < 401 ? state.num2++:400,num3:state.num3 < 251 ? state.num3++:250 ,num4:state.num4 < 801 ? state.num4++:800})
            }, 100);
        }else{
            nSection.classList.remove("movement")
            setState({...state,num1:0,num2:0,num3:0,num4:0})
        }
    })
},[])
const data = [
    {
        id:1,
        span:state.num1,
        h3:"Years With You",
    },
    {
        id:2,
        span:state.num2,
        h3:"Awards",
    },
    {
        id:3,
        span:state.num3,
        h3:"Dctors",
    },
    {
        id:4,
        span:state.num4,
        h3:"Satisfied Client",
    }
]



const newData = data.map((d)=>{
    return (
        <div key={d.id} className="box">
                    <span>{d.span}</span>
                    <h3>{d.h3}</h3>
                    <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
        </div>
    )
})
    return (
        <>
            <div className="number flex flex-wrap justify-center">
                <img src="/images/footer-sicral.png" alt="" />
                <img src="/images/footer-liner.png" alt="" />
                {newData}
            </div>
        </>
    )
}