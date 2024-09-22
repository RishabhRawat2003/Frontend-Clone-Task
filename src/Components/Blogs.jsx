import React from 'react'
import { CgNotes } from "react-icons/cg";
import { BsPlayBtn } from "react-icons/bs";
import Blog from './Images/blog.jpg'
import { SlCamera } from "react-icons/sl";
import Webinar from './Images/webinar.jpg'

function Blogs() {
    return (
        <div className='w-[95%] mx-auto h-auto flex flex-col sm:flex-row sm:flex-wrap gap-3 xl:justify-center 2xl:justify-between mb-10'>
            <div className='w-full h-auto flex flex-col gap-3 bg-white border-[1px] border-gray-300 rounded-md p-5 sm:w-[47vh]'>
                <div className='w-full h-auto flex justify-between items-center'>
                    <span className='font-semibold flex gap-3 items-center'><CgNotes size={25} /> Printify Blog</span>
                    <span className='text-green-600 md:hover:underline md:hover:underline-offset-4 cursor-pointer active:underline active:underline-offset-4'>See more</span>
                </div>
                <div className='w-full h-[1px] bg-gray-400'></div>
                <div className='w-full h-auto'>
                    <img src={Blog} alt="blog image" className='rounded-lg' />
                </div>
                <p className='text-slate-600'>Holiday Guide 2024 – Tackle the Shopping Season Like a Pro</p>
                <div className='w-full h-auto flex justify-end'>
                    <span className='px-5 py-1 border-[1px] border-gray-400 active:text-green-500 md:hover:text-green-600 cursor-pointer'>Read article</span>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col gap-3 bg-white border-[1px] border-gray-300 rounded-md p-5 sm:w-[47vh]'>
                <div className='w-full h-auto flex justify-between items-center'>
                    <span className='font-semibold flex gap-3 items-center'><BsPlayBtn size={25} /> How-to POD</span>
                    <span className='text-green-600 md:hover:underline md:hover:underline-offset-4 cursor-pointer active:underline active:underline-offset-4'>See more</span>
                </div>
                <div className='w-full h-[1px] bg-gray-400'></div>
                <iframe
                    src="https://www.youtube.com/embed/jDbvPF20of0?list=PLWx63Do0bEXPQ5Z6RgCvhMqG9EE5ORbw8"
                    title="How to Create Custom Print on Demand Products with Printify in 2024 (Full Tutorial)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg w-full h-60"
                ></iframe>
            </div>
            <div className='w-full h-auto flex flex-col gap-3 bg-white border-[1px] border-gray-300 rounded-md p-5 sm:w-[47vh]'>
                <div className='w-full h-auto flex justify-between items-center'>
                    <span className='font-semibold flex gap-3 items-center'><SlCamera size={25} /> Webinars</span>
                    <span className='text-green-600 md:hover:underline md:hover:underline-offset-4 cursor-pointer active:underline active:underline-offset-4'>See more</span>
                </div>
                <div className='w-full h-[1px] bg-gray-400'></div>
                <div className='w-full h-auto'>
                    <img src={Webinar} alt="blog image" className='rounded-lg' />
                </div>
                <p className='text-slate-600'>From $0 to $250K in a Year: Learn From an Etsy Expert</p>
                <div className='w-full h-auto flex justify-end'>
                    <span className='px-5 py-1 border-[1px] border-gray-400 active:text-green-500 md:hover:text-green-600 cursor-pointer'>Watch webinar</span>
                </div>
            </div>
        </div>
    )
}

export default Blogs