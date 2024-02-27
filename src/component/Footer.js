import React from 'react'

import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-gray-800  text-[14px] sm:text-[17px] w-full h-[350px] mt-10 flex sm:flex-row flex-wrap items-center justify-evenly text-white/[0.55]'>

      {/* 1st col */}
      <div className='gap-4 flex flex-col'>
        <p className='sm:text-[20px]  text-[16px] text-white'> Categories</p>
        <p> Web Builder</p>
        <p> Hoisting</p>
        <p> Data Center</p>
        <p> Robotic-Automation</p>

      </div>

      {/* 2nd col */}
      <div className='gap-4 flex flex-col'>
        <p className='sm:text-[20px]  text-[16px] text-white'> Contact</p>
        <p> Privacy Policy</p>
        <p> Terms Of Service </p>
        <p> Categories</p>
        <p> About</p>
      </div>

      {/* 3rd col */}
      <div className='flex gap-2 items-center sm:text-[20px] text-[16px]'>United States
        <MdKeyboardArrowDown size="26px" />
      </div>

    </div>
  )
}

export default Footer
