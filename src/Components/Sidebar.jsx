import React from 'react'
import { MdStorefront } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegClipboard } from "react-icons/fa";
import { LuTag } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import { LiaDollarSignSolid } from "react-icons/lia";
import { VscGraph } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { RiHeartAddLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Logo, SmallLogo } from './Logo';

function Sidebar() {
    return (
        <>
            <div className='my-8 w-full h-auto flex px-7 items-center'><Logo /></div>
            <div className='w-full h-[1px] bg-gray-300'></div>
            <div className='w-full h-auto overflow-y-scroll flex flex-col'>
                <div className='w-full h-auto flex px-7 items-center my-5'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><MdStorefront size={25} className='text-black' />My new store</span></div>
                <hr />
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-y-md rounded-r-md border-l-[3px] border-green-600'><GoHome size={25} className='text-green-600' />Dashboard</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><FaRegClipboard size={25} className='text-black' />Catalog</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><LuTag size={25} className='text-black' />My products</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><BsTruck size={25} className='text-black' />Orders</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><LiaDollarSignSolid size={25} className='text-black' />Wallet</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><VscGraph size={25} className='text-black' />Insights</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><CiSettings size={25} className='text-black' />Store settings</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><RiHeartAddLine size={25} className='text-black' />Branding</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><MdOutlineWorkspacePremium size={25} className='text-black' />Printify Premium</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><CiCircleQuestion size={25} className='text-black' />Need Help?</span></div>
                <div className='w-full h-auto flex px-7 items-center my-2 mb-4'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><SlGraduation size={25} className='text-black' />Resources</span></div>
                <hr />
                <div className='w-full h-auto flex px-7 items-center my-5'><span className='w-full flex gap-5 items-center px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-md'><HiOutlineUserCircle size={25} className='text-black' />Account</span></div>
            </div>
        </>
    )
}
function SmallSidebar() {
    return (
        <>
            <div className='my-8 w-full h-auto flex justify-center items-center'><SmallLogo /></div>
            <div className='w-full h-[1px] bg-gray-300'></div>
            <div className='w-full h-auto overflow-y-scroll flex flex-col'>
                <div className='w-full h-auto flex justify-center items-center my-5'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><MdStorefront size={25} className='text-black' /></span></div>
                <hr />
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-y-md rounded-r-md border-l-[3px] border-green-600'><GoHome size={25} className='text-green-600' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><FaRegClipboard size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><LuTag size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><BsTruck size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><LiaDollarSignSolid size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><VscGraph size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><CiSettings size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><RiHeartAddLine size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><MdOutlineWorkspacePremium size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><CiCircleQuestion size={25} className='text-black' /></span></div>
                <div className='w-full h-auto flex justify-center items-center my-2 mb-4'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><SlGraduation size={25} className='text-black' /></span></div>
                <hr />
                <div className='w-full h-auto flex justify-center items-center my-5'><span className='px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-md'><HiOutlineUserCircle size={25} className='text-black' /></span></div>
            </div>
        </>
    )
}

export { Sidebar, SmallSidebar }