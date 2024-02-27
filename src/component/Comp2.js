import React from 'react'

import Img1 from '../Images/Img1.png'

const Comp2 = () => {
    return (
        <div className='flex flex-col w-[350px]  items-center justify-start mx-2 text-black/[0.65] my-5'>

            {/* img */}  
                <div className='flex flex-col  items-center my-5'>
                    <img src={Img1} className='w-[150px] h-[100px]' />
                </div>
            

            <div className='flex gap-2'>
               <div className='bg-blue-100 rounded-md'><p className='text-[15px] p-1  text-slate-700'>20% Off</p></div> 
               <div className='bg-blue-100 rounded-md'><p className='text-[15px] p-1  text-slate-700'>Limited time</p></div> 
                
            </div>

            <p className='text-center text-slate-600 font-bold text-[17px] my-2'>WebBuilder1</p>
            <p className='text-[18px] font-serif'>Computer Modern classic with wix support</p>

             <div className='flex gap-2 my-4 items-end'>
                <p className='text-[20px] font-semibold'>$39.96</p>
                <p className=' text-black/[0.45] font-medium text-[14px]'>$49.96</p>
                <p className=' text-red-500/[0.85] font-medium text-[14px]'>(20% Off)</p>
            </div>

            <div className='bg-blue-500 w-[300px] rounded-lg flex items-center p-1 justify-center'>
                <p className='text-white p-2 text-[17px] font-bold'>View Deal</p>
            </div>
        </div>
    )
}

export default Comp2
