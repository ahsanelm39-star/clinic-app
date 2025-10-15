import './App.css'
/////component/////
import Header from "/src/components/Header/Header"
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'
import AboutUs from './components/About/About'
import Working from './components/Working/Working'
import Book from './components/Book/Book'
import Services from './components/Services/Services'
import Numbers from './components/Numbers/Numbers'
import Testimonials from './components/Testimonial/Testimonial'
import News from './components/News/News'
import ScoundPageHead from './components/bablic/ScoundPage/ScoundPageHead'
import Team from './components/Team/Team'
import Faq from './components/FAQ/Faq'
import Contact from './components/Contact/Countact'
/////icon///////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
//////routs//////////
import { Route,Routes } from 'react-router-dom'
import { useEffect } from 'react'

export default function App() {
  function up() {
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
      document.querySelector(".go-up").classList.add("shwo")
    }else{
      document.querySelector(".go-up").classList.remove("shwo")
    }
  })
  },[])
  return (
    <>
    <span onClick={up} className='go-up'><FontAwesomeIcon icon={faAngleUp} /></span>
    <Header/>
      <Routes>
        <Route path='/' element={
          <>
            <Landing/>
            <AboutUs chick="home"/>
            <Working/>
            <Book/>
            <Services/>
            <Testimonials/>
            <Numbers/>
            <News/>
            <Footer/>
          </>
        } />

        <Route path='/About' element={
          <>
            <ScoundPageHead word={"About Us"}/>
            <AboutUs chick="content"/>
            <Numbers/>
            <Testimonials/>
            <News/>
            <Footer/>
          </>
          
        } />

        {/* ///////// */}

      <Route path='/Team' element={
        <>
          <ScoundPageHead word={"Our Team"}/>
          <Team/>
          <Testimonials/>
          <Footer/>
        </>
      }/>

      {/* ///////// */}

      <Route path="/FAQ'S" element={
        <>
        <ScoundPageHead word={"Faq's"}/>
        <Faq/>
        <News/>
        <Footer/>
        </>
      }/>
      {/* ///////// */}

      <Route path='/Booking' element={
        <>
        <ScoundPageHead word={"Booking"}/>
        <Book/>
        <Footer/>
        </>
      }/>
      {/* ///////// */}

      <Route path='/Services' element={
        <>
        <ScoundPageHead word={"Services"}/>
        <Services/>
        <Numbers/>
        <Team/>
        <News/>
        <Footer/>
        </>
      }/>
      {/* ///////// */}

      <Route path='/Contact' element={
        <>
        <ScoundPageHead word={"Contact Us"}/>
        <Contact/>
        <Footer/>
        </>
      }/>
      {/* /////////// */}
      </Routes>
    </>
  )
}

