import React, { useState } from 'react'
import Navbar from '../ui/Navbar'
import { Outlet } from 'react-router-dom'
import HomePage from '../ui/Home/HomePage'
import Footer from '../ui/Footer'
import Aboutme from '../ui/Aboutme/Aboutme'
import Services from '../ui/Services/Services'
import Blogs from '../../Components/ui/Blogs/Blogs'
import Contactme from '../ui/Contactme/Contactme'
function Main() {
  const [hidehomepage,setHidehomePage]=useState(true)
  return (
    <>
    <Navbar setHidehomePage={setHidehomePage}/>
    {hidehomepage && <HomePage/> }

    <Aboutme />
    <Services/>
    <Blogs/>
   
   
    {/* <Outlet/> */}

    <Contactme/>
    <Footer/>
    </>
  )
}

export default Main