import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import Image1 from './Images/image1.webp'

function FirstSaleComponent() {
  return (
    <div className='group w-[95%] h-auto bg-white border-[1px] border-gray-300 rounded-md mx-auto p-5 flex flex-col gap-2 md:flex-row-reverse md:p-0 md:justify-between'>
                    <div className='flex md:w-[60%] md:items-end lg:w-[45%] lg:items-center xl:items-end'>
                        <img src={Image1} alt="image" className='md:object-contain' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3 md:w-[40%] md:my-7 md:ml-4 lg:ml-6 lg:w-[50%]'>
                        <p className='text-2xl font-semibold md:text-3xl'>Double your chances of making that first sale!</p>
                        <p className='font-medium text-slate-800'>Stand out from competition and build a customer base with the help of our AI powered Niche Generator in less than a minute</p>
                        <div className='w-full h-auto flex flex-col gap-4 md:flex-row lg:justify-start lg:mt-7'>
                            <button className='text-black w-full py-1 border-[1px] border-slate-500 rounded-sm md:group-hover:bg-green-600 group-active:bg-green-600 group-active:text-white md:group-hover:text-white md:hover:text-white md:hover:bg-green-800 active:text-white active:bg-green-800 md:w-[40%] md:py-1.5 lg:w-[30%]'>Try it now</button>
                            <button className='text-black w-full py-1 rounded-sm md:hover:bg-slate-200 active:bg-slate-200 flex gap-3 justify-center md:w-[60%] md:py-1.5 lg:w-[40%]'><IoPlayCircleOutline size={25} />What's a niche?</button>
                        </div>
                    </div>
                </div>
  )
}

export default FirstSaleComponent