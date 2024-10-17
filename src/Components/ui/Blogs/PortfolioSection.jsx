import React from 'react'
import { projects } from './Data'

function PortfolioSection() {
  return (
    <div className='flex flex-col gap-[50px]'>
        <div className=' text-center flex flex-col gap-[24px]'>
            <p className='text-markClr text-[20px] tracking-widest'>Our Milestones</p>
            <h1 className='font-[700] text-[50px] leading-[50px]'>Presenting My Design<span className='sm:inline md:block'> Portfolio and Case Studies</span></h1>
        </div>
        <div className='gap-[10px] grid md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
            <button className='py-[17px] px-[33px] w-[142px] h-[50px] text-white bg-markClr flex items-center justify-center text-[20px] font-[600] rounded-full'>All</button>
            <button className='py-[17px] px-[33px] w-[196px] h-[50px] text-white bg-markClr flex items-center justify-center text-[20px] font-[600] rounded-full'>UI/UX Design</button>
            <button className='py-[17px] px-[33px] w-[220px] h-[50px] text-white bg-markClr flex items-center justify-center text-[20px] font-[600] rounded-full'>Branding Design</button>
            <button className='py-[17px] px-[33px] w-[196px] h-[50px] text-white bg-markClr flex items-center justify-center text-[20px] font-[600] rounded-full'>Wordpress</button>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3  gap-[30px]   justify-items-center '>
        {projects.map((item)=>{
          return(
           <div  key={item.id} className=' w-full flex items-center justify-center'>
              <img src={item.img} className='w-full object-fit'></img>
            </div>)
          })}
        </div>
    </div>
  )
}

export default PortfolioSection