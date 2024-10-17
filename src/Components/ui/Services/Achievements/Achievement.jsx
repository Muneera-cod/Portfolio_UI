import React from 'react'
import { datas } from './Data'
function Achievement() {
  return (
    <>
    <div className='text-center flex flex-col gap-[24px]'>
      <p className='text-[#E9EFFF] text-[20px] tracking-widest font-[600] uppercase'>Our Milestones</p>
      <h1 className='text-white font-[700] text-[50px] leading-[50px]'>What sets our studio apart <span className='sm:inline md:block'>for your projects?</span></h1>
    </div>
    <div className='flex  sm:flex-col xl:flex-row py-[50px] gap-[30px] items-center justify-center'>
      {datas.map((item)=>
      {
        return(
              <div key={item.id} className='min-w-[297px] max-w-[297px] p-[30px] gap-[15px] bg-white text-center rounded-[15px]'>
                <h1 className='font-[700] text-[50px] leading-[50px]'>{item.title}</h1>
                <p className='font-[600] text-[20px]'>{item.description}</p>  
              </div>  
              )
    })}
    </div>
    </>
  )
}

export default Achievement