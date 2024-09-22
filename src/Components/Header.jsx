import React, { useState, useEffect, useRef } from 'react';
import { MdStorefront } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
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
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Logo } from './Logo.jsx';

function Header() {
    const [smallSideBar, setSmallSideBar] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [help, setHelp] = useState(false);
    const [resources, setResources] = useState(false);

    const sidebarRef = useRef(null);

    function handleWallet() {
        setWallet(!wallet);
        setHelp(false);
        setResources(false);
    }

    function handleHelp() {
        setHelp(!help);
        setWallet(false);
        setResources(false);
    }

    function handleResources() {
        setResources(!resources);
        setHelp(false);
        setWallet(false);
    }
    function handleSideBar() {
        setSmallSideBar(!smallSideBar);
        setResources(false)
        setHelp(false);
        setWallet(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.bars-icon')) {
                setSmallSideBar(false);
            }
        }

        if (smallSideBar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [smallSideBar]);


    return (
        <div className='w-full h-20 shadow-md flex justify-between px-6 items-center lg:hidden'>
            <div className=''><Logo /></div>
            <div className='w-auto h-auto flex gap-2 items-center md:gap-4'>
                <span className='p-1.5 md:hover:bg-gray-200 active:bg-gray-200 rounded-full'>
                    <MdStorefront size={25} className='cursor-pointer md:size-7' />
                </span>
                <span onClick={handleSideBar} className='p-1.5 md:hover:bg-gray-200 active:bg-gray-200 rounded-full bars-icon'>
                    <HiBars3 size={25} className='cursor-pointer md:size-7' />
                </span>
            </div>
            <div
                ref={sidebarRef}
                className={`${smallSideBar ? 'absolute top-[85px] right-5 w-80 h-96 shadow-xl bg-white rounded-md z-20 overflow-y-scroll flex flex-col p-3' : 'hidden'}`}
            >
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <GoHome size={25} /> Dashboard
                </div>
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <FaRegClipboard size={25} /> Catalog
                </div>
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <LuTag size={25} /> My Products
                </div>
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <BsTruck size={25} /> Orders
                </div>
                <div onClick={handleWallet}
                    className={`${wallet ? 'text-green-600' : 'text-slate-800'} w-full h-auto py-1.5 flex my-2 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm justify-between `}
                >
                    <div className='w-auto h-auto flex items-center gap-4'>
                        <LiaDollarSignSolid size={25} /> Wallet
                    </div>
                    {wallet ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
                </div>
                {wallet && (
                    <div className='w-[85%] h-auto py-1 mx-auto flex flex-col'>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Payments
                        </div>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Taxes
                        </div>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Rewards
                        </div>
                    </div>
                )}
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <VscGraph size={25} /> Insights
                </div>
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <CiSettings size={25} /> Store Settings
                </div>
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <RiHeartAddLine size={25} /> Branding
                </div>
                <hr />
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <MdOutlineWorkspacePremium size={25} /> Printify Premium
                </div>
                <div onClick={handleHelp}
                    className={`${help ? 'text-green-600' : 'text-slate-800'} w-full h-auto py-1.5 flex my-2 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm justify-between `}
                >
                    <div className='w-auto h-auto flex items-center gap-4'>
                        <CiCircleQuestion size={25} /> Need Help?
                    </div>
                    {help ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
                </div>
                {help && (
                    <div className='w-[85%] h-auto py-1 mx-auto flex flex-col'>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Experts program
                        </div>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Help Center
                        </div>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            My Requests
                        </div>
                    </div>
                )}
                <div onClick={handleResources}
                    className={`${resources ? 'text-green-600' : 'text-slate-800'} w-full h-auto py-1.5 flex my-2 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm justify-between `}
                >
                    <div className='w-auto h-auto flex items-center gap-4'>
                        <SlGraduation size={25} /> Resources
                    </div>
                    {resources ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
                </div>
                {resources && (
                    <div className='w-[85%] h-auto py-1 mx-auto flex flex-col'>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Webinars
                        </div>
                        <div className='w-full h-auto py-1 flex my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                            Blog
                        </div>
                    </div>
                )}
                <div className='w-full h-auto py-1.5 flex gap-4 my-2 text-slate-800 px-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100 rounded-sm items-center'>
                    <HiOutlineUserCircle size={25} /> Account
                </div>
            </div>
        </div>
    );
}

export default Header;
