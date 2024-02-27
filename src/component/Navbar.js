import React from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='bg-slate-800  h-[70px] flex justify-center items-center'>

     <div className='flex space-x-10 w-full  text-[14px] md:text-[17px] justify-center items-center'>
        
        <div className='md:w-[250px] w-[150px] bg-white rounded-md h-[35px] flex items-center'>
          <CiSearch size="26px" className='ml-2'/>
        </div>
        
        <div className='text-white/[0.58] '>Categories</div>
        <div className='text-white/[0.58] '>Website Builders</div>
        <div className='text-white/[0.58] '>Today's deals</div>
     </div>
    </div>
  )
}

export default Navbar
