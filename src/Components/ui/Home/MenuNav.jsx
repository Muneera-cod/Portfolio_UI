import React from 'react'

function MenuNav() {
  return (
    <div className=' menunav bg-[#F8F8F8] sm:w-3/4 md:w-1/2 py-10 px-6  gap-10 flex-col sm:flex md:hidden text-navtext'>
       <nav className='items-center justify-start gap-28 flex '>
            <ul className='flex flex-col  text-[15px]  font-[600] w-full '>
              <li className='hover:bg-zinc-200 p-6 rounded-md'>Home</li>
              <li className='hover:bg-zinc-200 p-6 rounded-md'>About me</li>
              <li className='hover:bg-zinc-200 p-6 rounded-md'>Services</li>
              <li className='hover:bg-zinc-200 p-6 rounded-md'>Blog</li>
              <li className='hover:bg-zinc-200 p-6 rounded-md'>Contact me</li>
            </ul>
            </nav>
        <button className='bg-markClr hover:bg-white hover:text-markClr bttnfont  px-8 py-4 rounded-[50px] w-full h-12	flex items-center justify-center'>Let's Chat</button>

    </div>
  )
}

export default MenuNav