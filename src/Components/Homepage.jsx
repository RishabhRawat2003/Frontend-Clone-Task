import React, { useState, useRef, useEffect } from 'react'
import { PiBankThin } from "react-icons/pi";
import { PiArrowsInSimpleThin } from "react-icons/pi";
import { PiArrowsOutSimpleThin } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Gift from './Images/gift.svg'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Sidebar, SmallSidebar } from './Sidebar';
import Blogs from './Blogs';
import Products from './Products';
import FirstSaleComponent from './FirstSaleComponent';

function Homepage() {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [hideComponent, setHideComponent] = useState(false)


    return (
        <div className='bg-[#f7f7f7] mt-1 w-full h-auto flex lg:mt-0'>
            <div className={`${sideBarToggle ? 'lg:w-60 xl:w-[276px] 2xl:w-[308px]' : 'lg:w-20'} hidden lg:block h-auto lg:relative`}>
                <div className={`${sideBarToggle ? 'lg:w-56 xl:w-64 2xl:w-72' : 'lg:w-16'} fixed bg-white flex flex-col h-screen shadow-md`}>
                    {
                        sideBarToggle
                            ? <Sidebar />
                            : <SmallSidebar />
                    }
                </div>
                <p onClick={() => setSideBarToggle(!sideBarToggle)} className='w-6 h-6 flex justify-center items-center bg-white shadow-xl rounded-full absolute top-10 right-1 cursor-pointer'>
                    {
                        sideBarToggle ? <MdKeyboardArrowLeft size={25} className='text-black' /> : <MdKeyboardArrowRight size={25} className='text-black' />
                    }
                </p>
            </div>
            <div className='lg:w-[75%] xl:w-[80%] 2xl:w-[75%] lg:mx-auto w-full h-auto flex flex-col gap-7'>
                <div className='mt-7 w-[95%] h-auto text-xl font-bold text-slate-800 px-5 sm:text-2xl md:text-3xl'>
                    You're in! Ready to start creating?
                </div>
                <div className='w-[95%] h-auto bg-white border-[1px] border-gray-300 rounded-md mx-auto p-5'>
                    <div className='w-full h-auto flex gap-1'>
                        <div className={`${hideComponent ? 'hidden md:hidden' : 'hidden md:flex md:flex-col'}`}>
                            <div className='text-2xl font-semibold lg:text-3xl'>Create your first store and <span className='text-green-500'>get a free gift</span>!</div>
                            <div className='w-full flex justify-end'><img src={Gift} alt="gift logo" className='w-48 lg:w-52' /></div>
                        </div>
                        <div className='w-full h-auto flex flex-col'>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <div className='w-auto flex gap-3 font-semibold lg:font-bold items-center'><PiBankThin size={25} className='text-slate-800 ' />Store setup checklist</div>
                                <div className='w-auto cursor-pointer' onClick={() => setHideComponent(!hideComponent)}>{hideComponent ? <PiArrowsOutSimpleThin size={25} className='-rotate-45 text-slate-800 ' /> : <PiArrowsInSimpleThin size={25} className='-rotate-45 text-slate-800 ' />} </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300 my-2'></div>
                            <div className={`${hideComponent ? 'hidden' : 'w-full h-auto flex flex-col my-2 gap-3 md:gap-4'} `}>
                                <div className='w-full h-auto flex justify-between text-gray-300 font-medium md:font-semibold items-center'>Sign up for Printify <MdOutlineDone size={25} className='text-green-500' /></div>
                                <div className='w-full h-auto flex justify-between font-medium md:font-semibold items-center'>Create your first product <div className='w-auto h-auto flex justify-between items-center gap-1 md:gap-4'><p className='w-14 h-2 rounded-md bg-green-200 sm:w-32'><p className='w-2 h-2 rounded-md bg-green-600'></p></p> <MdKeyboardArrowRight size={25} /></div></div>
                                <div className='w-full h-auto flex justify-between text-gray-600 font-medium md:font-semibold items-center'>Connect to Etsy, Shopify, etc <div className='w-auto h-auto flex justify-between items-center gap-1 md:gap-4'><p className='w-14 h-2 rounded-md bg-green-200 sm:w-32'><p className='w-2 h-2 rounded-md bg-green-600'></p></p> <MdKeyboardArrowRight size={25} /></div></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${hideComponent ? 'hidden' : 'w-full h-auto flex my-2'}`}>
                        <div className='w-full h-auto flex flex-col md:flex-row-reverse md:gap-4 md:items-start'>
                            <div className='w-full h-auto flex justify-center items-center py-1.5 bg-green-600 text-white font-medium rounded-sm active:bg-green-700 md:hover:bg-green-700 md:w-72 md:py-2 cursor-pointer md:font-semibold md:rounded-md'>+ Create first product</div>
                            <div className='w-full flex justify-between mt-2 md:justify-end md:gap-2'>
                                <div className='text-gray-600 text-sm lg:text-base'>Complete the steps above and earn a $5.00 discount on your next order!</div>
                                <div className='w-6 h-auto flex items-center'>
                                    <span className='w-6 h-6 flex justify-center items-center rounded-full border-2 border-black'>i</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FirstSaleComponent />
                <Products />
                <Blogs />
            </div>
        </div>
    )
}

export default Homepage