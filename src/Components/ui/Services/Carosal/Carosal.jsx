import React ,{ useState } from 'react'
import blueIcon from '../../../../assets/images/blueCardiconServices.svg'
import whiteicon from '../../../../assets/images/whiteCardiconServices.svg'
import { carosalData } from './Data';
import { IconArrowNarrowLeft,IconArrowNarrowRight } from '@tabler/icons-react';
function Carosal() {
    const [hover,setHover]=useState(null)
    const [carosal,setCarosal]=useState(0)
    console.log(carosal)
    console.log(carosalData.length)
    const handleRightSlide=()=>{
        carosalData.length-1 === carosal ? null:setCarosal(carosal+1)
    }
    const handleLeftSlide=()=>{
        carosal <= 0 ? null : setCarosal(carosal-1)
    }
  return (
    <>
    <div className='flex justify-end gap-[20px]'>
    <div onClick={()=>handleLeftSlide()} className='w-[50px] h-[50px] hover:bg-markClr hover:text-white hover:border-none border-2 border-markClr  text-markClr rounded-full flex items-center justify-center'>
        <IconArrowNarrowLeft stroke={2} size={35} />
    </div>
    <div onClick={()=>handleRightSlide()} className='w-[50px] h-[50px]  border-2 border-markClr text-markClr hover:bg-markClr hover:border-none  hover:text-white rounded-full flex items-center justify-center'>
        <IconArrowNarrowRight stroke={2} size={35} />
    </div>
 </div>

    <div className='flex flex-row gap-[30px] overflow-hidden bg-red-50'>
    {carosalData.slice(carosal).map((item)=>{
        return(
        <div key={ item.id } className='sm:min-h-80 md:min-h-fit sm:min-w-full md:min-w-[406px] md:max-w-[406px] p-[30px] flex flex-col gap-[10px]  border-2 border-markClr hover:bg-white hover:text-othrtext text-white bg-markClr rounded-[10px]' onMouseEnter={()=>{setHover(item.id)}} onMouseLeave={()=>{setHover(null)}}>
            {hover === item.id ? <img src={blueIcon} width={'75px'} height={'75px'}/>:<img src={whiteicon} width={'75px'} height={'75px'}/> }
              {item.skill}
            <p className='text-[18px] font-[400] leading-[28px] tracking-tight'>{item.description}</p>
            <p className='flex gap-2 w-fit items-center justify-center text-[18px] font-[400] leading-[28px] tracking-tight'>Learn more <IconArrowNarrowRight></IconArrowNarrowRight></p>
        </div>)
      })}
    </div></>
  )
}

export default Carosal