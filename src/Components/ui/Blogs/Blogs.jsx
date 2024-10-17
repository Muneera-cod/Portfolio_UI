import React from 'react'
import PortfolioSection from './PortfolioSection'
import Testimonals from './Testimonals'

function Blogs() {
  return (
    <div className='flex flex-col flex-row sm:px-12 md:px-20 py-24 min-h-screen min-w-screen gap-[100px] font-worksans text-othrtext'>
        <PortfolioSection/>
        <Testimonals/>
    </div>
  )
}

export default Blogs