import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IconDownload } from '@tabler/icons-react';
import photolarge from '../../../assets/images/photolarge.png'
import LogosBottom from './LogosBottom'
function HomePage() {
  return (
  <div id='home' className='flex flex-col min-h-screen'>
      <div className='flex sm:flex-col lg:flex-row sm:px-12 md:px-20 py-24  gap-24'>
        <div className='basis-1/2 font-worksans flex flex-col gap-[50px]'>
          <div className=''>
             <h3 className='text-othrtext text-[25px] font-semibold'>Welcome to my Portfolio</h3>
             <h1 className=' text-othrtext text-[60px] leading-[75px]'>
                Hi I’m<span className='block text-markClr'>Robert Junior</span>Product Designer
             </h1>
             <p className='text-[25px] leading-[35px] text-othrtext'>Collaborating with highly skilled individuals, our agency delivers top-quality services.</p>
          </div>
          <div className='flex sm:flex-col md:flex-row gap-4'>
            <button className='flex items-center justify-center py-[17px] px-[33px] bg-markClr text-white rounded-[50px] md:w-[161.301px] h-[50px] text-[20px] font-semibold hover:bg-white hover:text-markClr hover:border-2 border-markClr'>Hire me</button>
            <button className='flex items-center justify-center text-[20px] gap-[15px] text-markClr font-semibold py-[17px] px-[33px]  md:w-[240.943px] h-[50px] border-2 hover:border-none hover:bg-markClr hover:text-white border-markClr rounded-[50px]'>Download CV
              <IconDownload size={'20px'}/>
            </button>
          </div>
        </div>
        <div  className='basis-1/2 flex items-center justify-center'>
          <div>
            <LazyLoadImage src={photolarge} effect='blur' alt='home page image' className='homepageImage'></LazyLoadImage>
          </div>
        </div>
    </div>
    <LogosBottom/>
  </div>
  )
}

export default HomePage