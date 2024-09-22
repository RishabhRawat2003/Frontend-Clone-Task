import React from 'react'
import { MdStorefront } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

function Header() {
    return (
        <div className='w-full h-20 shadow-md flex justify-between px-6 items-center lg:hidden'>
            <div className=''>Logo</div>
            <div className='w-auto h-auto flex gap-2 items-center md:gap-4'>
                <span className='p-1.5 md:hover:bg-gray-200 active:bg-gray-200 rounded-full'>
                    <MdStorefront size={25} className='cursor-pointer md:size-7' />
                </span>
                <span className='p-1.5 md:hover:bg-gray-200 active:bg-gray-200 rounded-full'>
                    <HiBars3 size={25} className='cursor-pointer md:size-7' />
                </span>
            </div>
        </div>
    )
}

export default Header