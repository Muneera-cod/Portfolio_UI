import { Checkbox } from '@mantine/core'
import React from 'react'
import Form from './Form'
function Contactme() {
  return (
    <div className='flex flex-col bg-markClr sm:px-12 md:px-20 py-24 min-h-1/2 min-w-screen gap-[60px] font-worksans text-othrtext'>
      <div className='text-center gap-[24px] flex flex-col'>
        <p className='text-[#E9EFFF] text-[20px] tracking-widest font-[600] uppercase'>contact me</p>
        <h1 className='text-[50px] font-[700] leading-[50px] text-white'>Request Free Consultancy</h1>
      </div>
      <div className='flex sm:flex-col md:flex-row gap-[30px] items-start'>
        <div className='flex flex-col  bg-white p-[30px] gap-[40px] w-full rounded-[15px]'>
           <div>
               <p className='text-[16px] leading-[20px] font-[700]'>Hotline 24/7</p>
               <p className='text-[24px] leading-[30px] font-[700]'>(+23) 5535 68 68</p>
           </div>
           <div className='text-[16px] leading-[26px] font-[400]'>
                <p><span  className='font-[600]'>Address: </span>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                <p><span  className='font-[600]'>Email: </span>nevaeh.simmons@example.com</p>
                <p><span  className='font-[600]'>Fax: </span>(702) 555-0122</p>
                <p><span  className='font-[600]'>Work Hour: </span>Mon - Sat: 9:00 - 18:00</p>
                <br/>
           </div>
        </div>
          <Form/>
        </div>
      </div>

  )
}

export default Contactme