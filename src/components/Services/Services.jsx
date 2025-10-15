import './Services.css'
// import { useEffect } from 'react'



export default function Services () {
// useEffect(()=>{
//     const sSection =  document.querySelector(".main-services")
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY >= sSection.offsetTop - 500){
//             sSection.classList.add("movement")
//             }else{
//             sSection.classList.remove("movement")
//         }
//     })
// },[])




    const data = [
        {
            id:1,
            icon:"/images/look-1.png",
            h2:"Diagnostics",
        },
        {
            id:2,
            icon:"/images/Treatment bag.jpg",
            h2:"Treatment",
        },
        {
            id:3,
            icon:"/images/scissors.png",
            h2:"Surgery",
        },
        {
            id:4,
            icon:'/images/ambulase-2.png',
            h2:"Emergency",
        },
        {
            id:5,
            icon:"/images/Injection-1.png",
            h2:"Vaccine",
        },
        {
            id:6,
            icon:"/images/doctors-icons.png",
            h2:"Qualified Doctors",
        },
    ]

const newData = data.map((d)=>{
    return (
        <div key={d.id} className="box">
            <img src={d.icon} alt="" className='w-20 mb-4'/>
            <h2>{d.h2}</h2>
            <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        </div>
    )
})

    return (
        <div className='main-services'>
            <div className="services-head mb-10 pt-10 text-center px-4">
                <span className='text-2xl font-bold'>services</span>
                <h2 className='text-4xl font-bold mb-8 mt-6'>We Cover A Big Variety Of Medical Services</h2>
                <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
            </div>
                <div className="services flex flex-wrap justify-center">
                    <img src="/images/bolit.png" alt="" />
                    <img src="/images/book-+.png" alt="" />
                    {newData}
                </div>
        </div>
    )
}