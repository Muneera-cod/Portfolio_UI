import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
function MenuNav() {
  return (
    <div className=' menunav bg-[#F8F8F8] sm:w-3/4 md:w-1/2 py-10 px-6  gap-10 flex-col sm:flex md:hidden text-navtext'>
       <nav className='items-center justify-start gap-28 flex '>
            <ul className='flex flex-col  text-[15px]  font-[600] w-full '>
            <Link to='#home' smooth><li className='hover:bg-zinc-200 p-6 rounded-md'>Home</li></Link>
              <Link to='#aboutme' smooth><li className='hover:bg-zinc-200 p-6 rounded-md'>About me</li></Link>
              <Link to='#services' smooth><li className='hover:bg-zinc-200 p-6 rounded-md'>Services</li></Link>
              <Link to='#blogs' smooth><li className='hover:bg-zinc-200 p-6 rounded-md'>Blog</li></Link>
              <Link to='#contactme' smooth><li className='hover:bg-zinc-200 p-6 rounded-md'>Contact me</li></Link>
            </ul>
            </nav>
        <button className='bg-markClr hover:bg-white hover:text-markClr bttnfont  px-8 py-4 rounded-[50px] w-full h-12	flex items-center justify-center'>Let's Chat</button>

    </div>
  )
}

export default MenuNav