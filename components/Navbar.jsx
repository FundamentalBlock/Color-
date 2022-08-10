import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
      setNav(!nav)
    }
    

  return (
    <div>

        <div className={!nav ? 'w-[30%] left-0 top-0 fixed h-full border-r ease-in-out duration-500 bg-white' : 'fixed left-[-100%]'}>
            <h1 className='font-bold px-1 color-gradient'>COLORS!</h1>
            <ul className='font-bold px-1 py-4'>
            <button onClick={handleNav} className='p-4 border-b border-black w-full'><a href="#white">White</a></button>
            <button onClick={handleNav} className='p-4 border-b border-black w-full'><a href="#black">Black</a></button>
            </ul>
        </div>
        
        <div className=''>
            <button className='text-2xl fixed right-2 color-gradient text-white font-bold'
            onClick={handleNav}>New Color</button>
        </div>
      </div>


  )
}

export default Navbar
