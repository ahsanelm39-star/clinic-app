import './Team.css'
// import { useEffect } from 'react'

export default function Team () {
//     useEffect(()=>{
//     const teSection =  document.querySelector(".team")
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY >= teSection.offsetTop - 500){
//             teSection.classList.add("movement")
//             }else{
//             teSection.classList.remove("movement")
//         }
//     })
// },[])
    const team = [
        {
            id:1,
            img:'/images/team-1.jpg',
            h2:"Dr. Addition Smith",
            span:"Dentist",
        },
        {
            id:2,
            img:'/images/pngegg (3).png',
            h2:"Dr. Mahfuz Riad",
            span:"Chiropractor",
        },
        {
            id:3,
            img:'/images/team-3.jpg',
            h2:"Dr. David Yaman",
            span:"Cardiologist",
        },
        {
            id:4,
            img:'/images/team-4.jpg',
            h2:"Dr. Addition Smith",
            span:"Dentist",
        },
        {
            id:5,
            img:'/images/team-5.jpg',
            h2:"Dr. Mahfuz Riad",
            span:"Chiropractor",
        },
        {
            id:6,
            img:'/images/team-6.jpg',
            h2:"Dr. David Yaman",
            span:"Cardiologist",
        },

    ]

    const teamList = team.map((t)=>{
        return (
                    <div key={t.id} className=' w-70 bg-white shadow-xl rounded-xl flex flex-col items-center p-6'> 
                        <img src={t.img} alt="" className='w-50 rounded-xl'/>
                        <div>
                            <h2 className='text-2xl m-4 font-bold'>{t.h2}</h2>
                            <span className='block text-center text-lg mb-4'>{t.span}</span>
                            <div className='flex justify-center gap-x-4 text-3xl'>
                            <a href="https://www.facebook.com/" target='plank'><img src="/images/facebook (2)_1.png" alt="" /></a>
                            <a href="https://www.instagram.com/" target='plank'><img src="/images/Instagram_logo_2022.svg.webp" alt="" /></a>
                            <a href="https://www.linkedin.com/" target='plank'><img src="/images/linked.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
        )
    })


    return (
        <>
            <div className='team flex flex-wrap pt-20 pb-10 justify-center gap-6 px-10'>
            {teamList}
            </div>
        </>
    )
}