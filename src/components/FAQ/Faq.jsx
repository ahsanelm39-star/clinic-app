import './Faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Faq () {
    const [state,setState] = useState(0)

useEffect(()=>{

        document.querySelectorAll(".faq").forEach((f)=>{
        f.addEventListener("click",()=>{
            f.classList.toggle("show-list")
            setState(1)
        })
    })

},[state])


    return (
        <div className='flex gap-x-10 main-faq flex-wrap'>
            <div className='main-2-faq'>
                <div  className='bg-blue-500 show-list rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    How Doctor Can Ease Your Pain?
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div  className='bg-blue-500  rounded-xl faq cursor-pointer  text-white font-bold text-xl'> 
                    How do iWithdraw a subject?
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div  className='bg-blue-500  rounded-xl faq cursor-pointer text-white font-bold text-xl '> 
                    What's a Payment statment?
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div  className='bg-blue-500 rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    Understand Doctor Before You Regret?
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div className='bg-blue-500 rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    How Can I Contact You?
                    
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div id='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
            </div>
            <div className='main-2-faq'>
                <div className='bg-blue-500 rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    What types of systems do you support?
                    
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div className='bg-blue-500  rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    We Teach You How To Feel Better?
                    
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div className='bg-blue-500 show-list rounded-xl faq cursor-pointer  text-white font-bold text-xl '> 
                    Understand Doctor Before You Regret?
                    
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div  className='bg-blue-500 rounded-xl  faq cursor-pointer text-white font-bold text-xl '> 
                    How Doctor Can Ease Your Pain
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
                <div className='bg-blue-500 rounded-xl faq cursor-pointer  text-white font-bold text-xl'> 
                    How Doctor Can Ease Your Pain
                    <span className='ml-6'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div className='list'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis incidunt ipsum corporis amet commodi. Fugit qui 
                        earum molestiae consequuntur! Libero, tempore tenetur. Voluptatibus, 
                        et! Numquam itaque cum a tenetur omnis.
                    </div>
                </div>
            </div>
        </div>
    )
}