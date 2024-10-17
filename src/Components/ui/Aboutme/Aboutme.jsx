import React from 'react'
import { LazyLoadImage,trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Progress } from '@mantine/core';
import  aboutme  from '../../../assets/images/aboutmeProfile.png'
function Aboutme({ scrollPosition}) {
  return (
    <div className='flex sm:flex-col lg:flex-row sm:px-12 md:px-20 py-24 min-h-screen min-w-screen gap-8 font-worksans text-othrtext'>
        <div className='basis-1/2  py-6 flex items-center justify-center'>
        <LazyLoadImage effect='blur' alt='about me page image' src={aboutme}  scrollPosition={scrollPosition} className='aboutme'/>
        </div>
        <div className='basis-1/2 flex flex-col gap-24 '>
           <div className='flex flex-col gap-[17px]'>
              <h3 className='text-markClr text-[20px] font-[600] tracking-widest'>ABOUT ME</h3>  
              <div className='flex flex-col gap-[25px]'>
                 <h1 className='font-[700] text-[50px]'><span className='text-markClr block'>20 Year’s Experience</span>
                  on Product Design</h1>
                  <p className='text-[18px] font-[400] leading-[25px]'>Hello there! I'm <b>Robert Junior</b>. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With <b>20 years</b> of experience as a professional graphic designer</p>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
               <div className='flex sm:flex-col md:flex-row  gap-[25px]'>
                  <button className='aboutmebtns sm:w-full  md:w-[170px] bg-markClr text-white'>Main Skills</button>
                  <button className='aboutmebtns  sm:w-full  md:w-[170px]  text-markClr border-2 border-markClr'>Awards</button>
                  <button className='aboutmebtns sm:w-full  md:w-[170px]  text-markClr border-2 border-markClr'>Education</button>
               </div>
               <div className='flex flex-col gap-4'>
                 <div className='flex flex-col gap-2'>
                    <h1 className='skillsh1'>User Experience Design - UI/UX</h1>
                     <Progress color='blue' value={50} w={'100%'} h={'17px'}/>
                 </div>
                 <div  className='flex flex-col gap-2'>
                    <h1 className='skillsh1'>Web & User Interface Design - Development</h1>
                    <Progress color='blue' value={50} w={'100%'} h={'17px'} bgr={'10px'}/>
                 </div>
                 <div  className='flex flex-col gap-2'>
                    <h1 className='skillsh1'>Interaction Design - Animation</h1>
                    <Progress color='blue' value={50} w={'100%'} h={'17px'}/>
                 </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default trackWindowScroll(Aboutme)