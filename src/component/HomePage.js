import React from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import {data} from '../Data'

import { CiCircleAlert } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

function HomePage() {

  const Data=data;
  return (
    <div className='flex items-center justify-center'>
      <div className='xl:w-[1200px] w-full flex flex-col '>

        <div className='flex flex-col items-center justify-center'>
          <p className='sm:text-[60px] text-[30px] my-5 text-slate-800 font-serif mt-5'>Best Website Builders in the US</p>

          {/* line */}
          <div className='h-[0.5px] border-t-2 xl:w-[1100px] w-[70vw]'></div>

          <div className='flex gap-4  items-center justify-between py-2 text-black/[0.55] xl:w-[1100px] w-[70vw]'>

            <div className='flex gap-4 items-center'>
              <div className='flex gap-2  items-center'>
                <CiCircleCheck size="22px" />
                <p >Last Updated - February 22,2020</p>
              </div>

              <div className='flex gap-2 items-center'>
                <CiCircleAlert size="22px" />
                <p>Advertising Disclosure </p>
              </div>
            </div>

            <div className='flex gap-1 items-center'>
              <div><p>Top Relevant</p></div>
              <MdKeyboardArrowDown size="24px" />
            </div>

          </div>

          {/* line */}
          <div className='h-[0.5px] border-t-2 xl:w-[1100px] w-[70vw]'></div>
             
          <div className='flex sm:flex-row flex-col gap-2 font-serif items-center text-[16px] text-black/[0.55] mt-6 '>
           <p className='lg:mx-6 mx-2'>Tools</p>
           <p className='lg:mx-6 mx-2'>AWS Builder</p>
           <p className='lg:mx-6 mx-2'>Start Build</p>
           <p className='lg:mx-6 mx-2'>Build Supplies</p>
           <p className='lg:mx-6 mx-2'>Tooling</p>
           <p className='lg:mx-6 mx-2 '>BlueHoisting</p>
          
          </div>

          <div className='flex sm:flex-row flex-col gap-2 font-serif items-center text-[15px] text-black/[0.55] mt-4 '>
           <p className='mx-2'>Home</p>
           <GoChevronRight />
           <p className='mx-2'>Hoisting for all</p>
           <GoChevronRight />
           <p className='mx-2'>Hoisting</p>
           <GoChevronRight />
           <p className='mx-2'>Hoisting6</p>
           <GoChevronRight />
           <p className='mx-2'>Hoisting5</p>
          
          </div>
          
          {
            data.map((item,index)=>(
              <Comp1 key={index} item={item} />
            ))
          }

          <p className='text-[34px] text-center text-slate-800 font-sans my-8'>Related deals you might like for </p>
           
           <div className='flex xl:flex-row flex-col flex-wrap items-center justify-around'>
            <Comp2/>
            <Comp2/>
            <Comp2/>
           </div>

           <div className='flex items-center justify-around my-16'>
            <div ><p className='text-[30px] text-black/[0.65] font-medium'>Sign Up and get exclusive <br/>special deals</p></div>
            <div className='bg-blue-500 rounded-r-lg'><p className='text-[14px] font-semibold text-white py-4 px-6'>Sign Up </p></div>
           </div>


        </div>

      </div>
    </div>
  )
}

export default HomePage
