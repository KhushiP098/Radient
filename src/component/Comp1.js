import React from 'react'

import { FaStar } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


import Img1 from '../Images/Img1.png'

const Comp1 = ({ index, item }) => {
    return (
        <div className='xl:w-[1100px] my-8'>
            <div className='flex flex-col'>

                {
                    item?.icon
                    &&
                    <div className='bg-orange-500 flex gap-2 rounded-r-md text-white items-center font-serif text-[17px] w-[150px] p-1 m-1 '>
                        {item?.icon}
                        <p>{item?.desc}</p>
                    </div>
                }

                <div className='flex lg:flex-row flex-wrap justify-center  items-center'>

                    {/* img */}
                    <div className='w-[250px] flex items-center justify-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={Img1} className='w-[150px] h-[100px] ' />
                            <p className='text-[14px] font-serif mt-2 text-black/[0.65]'>Builder1</p>
                        </div>
                    </div>

                    {/* center div */}
                    <div className='flex flex-col xl:w-[600px]  w-[300px] font-serif text-[16px]  '>
                        <p className='text-slate-600 font-bold lg:text-[18px] m-1'>{item.head1} -<span className='font-normal lg:text-[18px] text-slate-600'>{item.para1}</span></p>
                        <p className='text-slate-700 font-bold lg:text-[17px] m-1'>Main highlight</p>
                        {
                            item?.highlight &&
                            <div className='flex flex-col mx-5 '>
                                <div className='bg-pink-50 rounded-md text-[16px] p-2  text-black/[0.65]'>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-500 p-1'>9.9</span> Building Responsive </div>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-500 p-1'>8.9</span> Cool </div>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-500 p-1'>8.9</span> Docs </div>
                                </div>

                                <div className='text-black/[0.65] my-2'>
                                    <p className='text-[17px]'>Why we love it</p>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-300 p-1'><FaCheckCircle/></span> Documentation </div>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-300 p-1'><FaCheckCircle/></span> Easy use </div>
                                    <div className='flex items-center gap-2 m-1'> <span className='bg-white text-blue-300 p-1'><FaCheckCircle/></span> Out of Box </div>
                                </div>
                            </div>

                        }

                        <p className=' text-black/[0.65] m-4 lg:text-[17px]'>{item.para2}</p>

                        <div className='flex gap-1 items-center  text-blue-500 text-[17px]'>Show More
                            <MdKeyboardArrowDown size="24px" />
                        </div>
                    </div>


                    {/* button & rating */}
                    <div className='w-[250px] lg:h-[250px] flex flex-row lg:flex-col items-center justify-between  '>

                        <div className='flex flex-col items-center'>
                            <p className='text-[35px] text-blue-900'>{item.rating}</p>
                            <p className='text-blue-700'>{item.remark}</p>

                            <div className='flex gap-2 mt-2 items-center justify-center'>
                                <FaStar color='gold' size="12px" /> <FaStar color='gold' size="12px" /> <FaStar color='gold' size="12px" /> <FaStar color='gold' size="12px" /> <FaStar color='gold' size="12px" />
                            </div>
                        </div>

                        <div className='bg-blue-500 lg:w-[250px] mt-5 w-[100px] rounded-lg flex items-center p-1 justify-center'>
                            <p className='text-white p-2 text-[17px]'>View</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Comp1
