import './Header.css'
///// icons ////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faPlus,faMagnifyingGlass,faList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
/////// states//////
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
    const [loge,setLoge] = useState(false)
    const [open,setOpen] = useState(false)


    useEffect(()=>{
                let lis = document.querySelectorAll(".ul li")
                lis.forEach((li)=>{
                    li.addEventListener("click",()=>{
                        lis.forEach((li2)=>{
                            li2.classList.remove("on")
                        })
                        li.classList.add("on")
                    })
                })
                let lis2 = document.querySelectorAll(".ul-phone li")
                lis2.forEach((li)=>{
                    li.addEventListener("click",()=>{
                        lis2.forEach((li2)=>{
                            li2.classList.remove("on2")
                        })
                        li.classList.add("on2")
                    })
                })
            },[])



    function Span(){
    return (
        <span  onClick={()=>{
            setOpen(false)
            setLoge(false)
            document.querySelector(".list-page").classList.remove("movr-list")
        }}  className='cancil absolute top-4 right-4  text-white font-bold rounded-md py-1 px-3 text-xl cursor-pointer  transition-all'>X</span>
    )
    }
    window.addEventListener("scroll",()=>{
        if(window.scrollY>5){
            document.querySelector("nav").classList.add("shadow")
        }else{
            document.querySelector("nav").classList.remove("shadow")
        }
    })
    function SearchComponent () {
    if(open){
                return (
                    <div className='w-1/1 h-1/1 z-50 fixed flex justify-center items-center searc-page'>
                        <Span/>
                        <div className='input-search border-b-2 w-1/2 flex items-center'>
                            <input type="text"  className=' text-xl w-1/1 outline-0 py-2 px-2' placeholder='Type To Search'/>
                            <span className='icon-search cursor-pointer text-xl transition-all'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        </div>
                    </div>
                )
            }
        }
        function shwoList () {
                document.querySelector(".list-page").classList.add("movr-list")
        }


        function login () {
            setLoge(true)
        }

        if(loge){
            return (
                <>
                    <div className='fixed z-20 h-1/1 bg-white w-1/1 flex justify-center items-center px-6'>
                    <Span/>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                        }} action="" className=' shadow-xl bg-blue-100 justify-center rounded-2xl flex flex-col form-log items-center'>
                            <img src="/images/logo.png" alt="" className='w-55 mb-6'/>
                            <div className='flex flex-col input'>
                                <input className=' border-1 h-14 mb-6  rounded-md  pl-3' type="text" placeholder='Username'  required/>
                                <input className=' border-1 h-14 mb-6  rounded-md  pl-3' type="password" placeholder='password'required />
                                <input className=' border-1 h-14 mb-4  rounded-md log text-white cursor-pointer  font-bold text-xl transition-all sub' type="submit"  value={"Login"}/>
                            </div>
                            <span className='text-blue-600 transition-all hover:text-blue-800 cursor-pointer mb-6'>Forgot Password</span>
                            <div className='flex flex-col span'>
                                <span className='text-xl mb-4 text-center'>Dont have any account?</span>
                                <span className=' flex items-center  justify-center w-70 border-1 h-14 mb-4  rounded-md log2 text-white cursor-pointer transition-all font-bold text-xl' type="submit" >Register</span>                            </div>
                        </form>
                    </div>
                </>
            )
        }


            function Login ({mpoileLogin}) {
                return (
                    <div onClick={login} className= {`${mpoileLogin} flex justify-center login cursor-pointer py-2 px-4 rounded-md ml-5 transition-all `}>
                                <span className="mr-3 font-bold text-white text-xl">Login</span>
                                <span className="text-lg"><FontAwesomeIcon icon={faRightFromBracket} /></span>
                    </div>
                )
            }


        function List () {
                return (
                    <>
                        <div className= ' list-page flex justify-center '>
                                <Span/>
                            <div className='up'>
                                    <img  className=' mx-auto mopile-logo w-45 rounded-md' src="/images/logo.png" alt="" />                   
                                <div>
                                    <ul className='text-white ul-phone w-1/1 my-6'>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={"/"}>
                                            <li>Home</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={'/Services'}>
                                            <li className='ser2'>Services</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={"/FAQ'S"}>
                                            <li className='faq2'>FAQ'S</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={'/Contact'}>
                                            <li>Contact Us</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={"/About"}>
                                            <li className='li-about2'>About Us</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={"/Team"}>
                                            <li className='te2'>Our Team</li>
                                        </Link>
                                        <Link onClick={()=>{
                                            document.querySelector(".list-page").classList.remove("movr-list")
                                        }} to={'/Booking'}>
                                            <li className='bo2'>Booking</li>
                                        </Link>
                                    </ul>
                                        
                                        
                                    
                                </div>
                                <Login mpoileLogin="mpoile-login"/>
                                <div className='sochil flex gap-5 mt-8 text-xl justify-center'>
                                    <a href="https://www.facebook.com/" target='plank'><img className='w-10' src="/images/facebook (2)_1.png" alt="" /></a>
                                    <a href="https://www.instagram.com/" target='plank'><img className='w-10' src="/images/Instagram_logo_2022.svg.webp" alt="" /></a>
                                    <a href="https://www.linkedin.com/" target='plank'><img className='w-10' src="/images/linked.png" alt="" /></a>
                                    <a href="https://twitter.com/" target='plank'><img className='w-10' src="/images/x.avif" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

    return (
        <>
        <List/>
        <SearchComponent/>
            <nav className="   flex justify-between items-center px-10 pt-2">
                    <div>
                        <img className="main-logo" src="/images/logo.png" alt="" />
                    </div>
                    <div className="flex">
                        <ul className="ul flex mr-3">
                            <Link to={"/"}>
                                <li>Home</li>
                            </Link>
                                    <Link to={'/Services'}>
                                        <li className='ser'>Services</li>
                                    </Link>
                            
                                    <Link to={"/FAQ'S"}>
                                        <li className='fa'>FAQ'S</li>
                                    </Link>
                            <Link to={'/Contact'}>
                                <li>Contact Us</li>
                            </Link>
                            <li>Pages <span><FontAwesomeIcon icon={faPlus} /></span>
                                <ul className='absolute bg-white rounded-md  w-45 ul2 transition-all  left-0 pb-2'>
                                    <Link to={"/About"}>
                                        <li className='li-about'>About Us</li>
                                    </Link>
                                    <Link to={"/Team"}>
                                        <li className='te'>Our Team</li>
                                    </Link>
                                    
                                    <Link to={'/Booking'}>
                                        <li className='bo'>Booking</li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                        <div className="flex  items-center">
                            <span onClick={()=> setOpen(true)} className=" search text-xl mr-5 cursor-pointer transition-all "><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <div className="phone">
                                <span className="mr-3 bg-blue-200 text-md inline-block py-1 px-2 rounded-md"><FontAwesomeIcon icon={faPhone} /></span>
                                <span className="text-xl font-bold "><span>(+01) </span>999 888 777</span>
                            </div>
                            <Login/>
                        </div>
                    <span onClick={shwoList} className='list text-2xl ml-4 cursor-pointer hover:opacity-75 transition-all'><FontAwesomeIcon icon={faList} /></span>
                    </div>
            </nav>
            
        </>
    )
}