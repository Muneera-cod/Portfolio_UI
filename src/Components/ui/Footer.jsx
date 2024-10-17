import React from 'react'
import logo from '../../assets/images/logoblue.svg'
import fIcon from '../../assets/images/facebook icon.svg'
import XIcon from '../../assets/images/Group 7.svg'
import LIcon from '../../assets/images/icon linkedin.svg'
import EIcon from '../../assets/images/icon email.svg'


function Footer() {
  return (
    <footer className='flex sm:flex-col md:flex-row bg-markClr sm:px-8 md:px-6 lg:px-12 xl:px-20 py-[50px] gap-[30px] text-white'>
       <div className='flex-3 flex sm:flex-col md:flex-row gap-[30px] items-center'>
        <div className='flex items-center gap-1.5'>
        <div className='w-12 h-12 bg-white text-markClr rounded-full flex items-center justify-center'>
        
         <img src={logo} ></img>
       
        </div>
        <p className='text-[25px] font-black font-zens'>Aero Vision</p>
      </div>
      <p className='text-lightbluetext text-[16px] leading-[16px]'>© Copyright 2024. All Rights Reserved.</p>
      </div>
      <div className='flex-1  flex sm:flex-col md:flex-row items-center justify-end gap-4'>
        <p className='text-[18px] text-lightbluetext leading-[18px]'>FOLLOW US</p>
        <div className='gap-2 flex '>
        <img src={fIcon}></img>
        <img src={XIcon}></img>
        <img src={LIcon}></img>
        <img src={EIcon}></img>
        </div>
      </div>
    </footer>
  )
}

export default Footer