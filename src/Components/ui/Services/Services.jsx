import React from 'react'
import Carosal from './Carosal/Carosal';
import Achievement from './Achievements/Achievement';
function Services() {
  return (
  <>
  <div className='flex flex-col sm:px-12 md:px-20 py-24 min-h-screen min-w-screen gap-[30px] font-worksans text-othrtext'>
     <div className='flex flex-col text-center gap-[15px] sm:px-6 md:px-20 pb-[30px]'>
        <h3 className='text-markClr text-[20px] font-[600] tracking-widest '>Services</h3>
        <h1 className='text-[50px] font-[700] leading-[50px] '>Exploring My Design <span className='text-markClr'>Skills</span></h1>
        <p className='font-[400] leading-[25px] text-[18px]'>We transform your ideas into a distinctive web project that both inspires<br className='sm:hidden md:block'/> you and captivates your customers</p>
     </div>
      <Carosal/>
  </div>
  <div className='bg-markClr flex flex-col gap-[60px] sm:px-12 md:px-20 py-24 min-h-screen min-w-screen font-worksans text-othrtext'>
        <Achievement/>
  </div>
</> 
  )
}

export default Services


