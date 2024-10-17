import React, { useState } from 'react'
import { IconMenu2 } from '@tabler/icons-react'
import logo from '../../assets/images/air-balloon-large.svg'
import MenuNav from './Home/MenuNav'
import { createPortal } from 'react-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
function Navbar({ setHidehomePage }) {
  const[menuNav,setMenuNav]=useState(false)
  const navigate=useNavigate()
  return (
    <header className='bg-white py-4 sm:px-8 md:px-6 lg:px-12 xl:px-20 flex justify-between items-center text-navtext'>
      <div className='flex items-center gap-1.5'>
        <a href='/'><div className='w-12 h-12 bg-markClr rounded-full flex items-center justify-center'>
         <LazyLoadImage src={logo} effect='blur' alt='logo'></LazyLoadImage>
       
        </div></a>
        <p className='logotitle text-navtext'>Aero Vision</p>
      </div>
      <IconMenu2 className='sm:block md:hidden' onClick={()=>setMenuNav(!menuNav)} />
      {menuNav && createPortal(<MenuNav/>,document.body)
      }
        <nav className='items-center justify-center md:gap-6 lg:gap-12  xl:gap-28  sm:hidden md:flex'>
            <ul className='flex md:gap-8 xl:gap-10 md:text-[14px] lg:text-[15px]  font-[600] text-navtext'>
              <Link to='#home' smooth><li onClick={()=>navigate('/') ? setHidehomePage(false):setHidehomePage(true)} className='listTransform'>Home</li></Link>
              
              {/* <li onClick={()=>{navigate('/aboutme') ? setHidehomePage(true):setHidehomePage(false)}} className='listTransform' >About me</li> */}
              {/* <li  onClick={()=>{navigate('/services') ? setHidehomePage(true):setHidehomePage(false)}} className='listTransform'>Services</li> */}
              {/* <li  onClick={()=>{navigate('/blog') ? setHidehomePage(true):setHidehomePage(false)}} className='listTransform'>Blog</li> */}
              
              <Link to='#aboutme' smooth><li  className='listTransform'>About me</li></Link>
              <Link to='#services' smooth><li  className='listTransform'>Services</li></Link>
              <Link to='#blogs' smooth><li  className='listTransform'>Blog</li></Link>
              <Link to='#contactme' smooth><li  className='listTransform'>Contact me</li></Link>
            </ul>
            <button className='bg-markClr bttnfont md:px-2 lg:px-8 md:py-2 lg:py-4 rounded-[50px] md:w-32 lg:w-40 md:h-10 lg:h-12	flex items-center justify-center hover:bg-white hover:text-markClr hover:border-2 border-markClr'>Let's Chat</button>
        </nav>
    </header>
  )
}

export default Navbar