import React , { useEffect, useState }from 'react'
import { IconArrowNarrowLeft,IconArrowNarrowRight,IconStarFilled } from '@tabler/icons-react';
import { peoples } from './Data';
function Testimonals() {
  const [carosal,setCarosal]=useState(0) 
  console.log(carosal)
  console.log(peoples.length)

    useEffect(()=>{
       handleRightSlide}
         ,[carosal])

  const handleRightSlide=()=>{
          const poeditm=peoples.pop()
          peoples.unshift(poeditm)
          console.log(poeditm)
          console.log(peoples)
          setCarosal(carosal+1)
        }

   console.log(peoples)
   
  const handleLeftSlide=()=>{
    const poeditm=peoples.shift()
    peoples.push(poeditm)
    console.log(poeditm)
    console.log(peoples)
    setCarosal(carosal+1)
  } 
  return (
    <>
      <div className='flex flex-col gap-[50px]'>
        <div className='text-center flex flex-col gap-[24px]'>
            <p className='text-markClr text-[20px] tracking-widest font-[600] uppercaset'>Testimonials</p>
            <h1 className='font-[700] text-[50px] leading-[50px]'>The Trust From Clients</h1>
        </div>
        <div className='flex justify-center gap-[20px]'>
            <div onClick={()=>handleLeftSlide()} className='w-[50px] h-[50px] hover:bg-markClr hover:text-white hover:border-none border-2 border-markClr  text-markClr rounded-full flex items-center justify-center'>
                <IconArrowNarrowLeft stroke={2} size={35} />
            </div>
            <div onClick={()=>handleRightSlide()} className='w-[50px] h-[50px]  border-2 border-markClr text-markClr hover:bg-markClr hover:border-none  hover:text-white rounded-full flex items-center justify-center'>
                <IconArrowNarrowRight stroke={2} size={35} />
            </div>
        </div>
        <div className='flex gap-[30px]  md:justify-center items-center overflow-hidden'>
          {peoples.map((item)=>{
            return(
          <div key={item.id} className='flex flex-col gap-[20px] px-[20px] py-[30px]  border-2 border-[#DDD] hover:border-markClr hover:bg-markClr hover:text-white rounded-[15px]  justify-center items-center min-w-72 max-w-72'>
             <div>
                <img src={item.img}></img>
             </div>
             <div className='flex text-yellow-400'><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/></div>
             <p className='text-[16px] leading-[20px] font-[400] text-center text-justify'>{item.info}</p>
             <div className='flex flex-col  justify-center items-center'>
                <h1 className='uppercase font-[600] text-[16px] '>{item.name}</h1>
                <p className='text-[#666] text-[16px] font-[400]'>{item.job}</p>
             </div>
          </div>
          )})}
        
        </div>
      </div>
    </>
  )
}

export default Testimonals