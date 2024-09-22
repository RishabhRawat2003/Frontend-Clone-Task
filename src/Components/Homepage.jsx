import React, { useState, useRef, useEffect } from 'react'
import { PiBankThin } from "react-icons/pi";
import { PiArrowsInSimpleThin } from "react-icons/pi";
import { PiArrowsOutSimpleThin } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Iphone from './Images/BestSellers/iphone.webp'
import Hoodie from './Images/BestSellers/hoodie2.webp'
import Shoes from './Images/BestSellers/shoes.webp'
import Tshirt from './Images/BestSellers/tshirts2.jpg'
import Image1 from './Images/image1.webp'
import Gift from './Images/gift.svg'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { BsPlayBtn } from "react-icons/bs";
import Blog from './Images/blog.jpg'
import { SlCamera } from "react-icons/sl";
import Webinar from './Images/webinar.jpg'

function Homepage() {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [hideComponent, setHideComponent] = useState(false)

    const sliderRef = useRef(null)

    function leftArrow() {
        const slider = sliderRef.current
        if (slider.scrollLeft === 0) {
            slider.scrollTo({ left: slider.scrollLeft + 1000, behavior: 'smooth' })
        } else {
            slider.scrollTo({ left: slider.scrollLeft - 200, behavior: 'smooth' })
        }
    }

    function rightArrow() {
        const slider = sliderRef.current;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= maxScrollLeft) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollTo({ left: slider.scrollLeft + 200, behavior: 'smooth' });
        }
    }



    return (
        <div className='bg-[#f7f7f7] mt-1 w-full h-auto flex lg:mt-0'>
            <div className={`${sideBarToggle ? 'lg:w-56 xl:w-64 2xl:w-72' : 'lg:w-16'} hidden lg:block shadow-md h-auto `}>
                <div className={`${sideBarToggle ? 'lg:w-56 xl:w-64 2xl:w-72' : 'lg:w-16'} fixed bg-white flex flex-col h-screen `}>
                    <span className='p-3 bg-black w-1' onClick={() => setSideBarToggle(!sideBarToggle)}></span>
                </div>
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
                <div className='group w-[95%] h-auto bg-white border-[1px] border-gray-300 rounded-md mx-auto p-5 flex flex-col gap-2'>
                    <div className='w-full flex justify-between items-center md:text-lg'>
                        <span className='font-semibold'>Our Bestsellers</span>
                        <span className='text-green-600 md:hover:underline md:hover:underline-offset-4 cursor-pointer active:underline active:underline-offset-4'>See more</span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='w-full h-auto py-1 relative px-2'>
                        <span onClick={leftArrow} className='w-10 h-10 rounded-md flex justify-center items-center border-[1px] border-gray-400 absolute top-[39%] z-20 left-0 bg-white cursor-pointer md:hover:bg-gray-300 active:bg-gray-300'><MdKeyboardArrowLeft size={25} /></span>
                        <div ref={sliderRef} className='w-full h-auto flex overflow-x-scroll gap-4 pb-10'>
                            <div className='min-w-[70%] h-auto flex flex-col gap-3 border-[1px] border-gray-300 sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]'>
                                <div className='relative flex'>
                                    <span className='border-[1px] border-[#c3862c] text-[#9e591c] px-2 py-0.5 absolute top-2 left-2 bg-[#faf7d7] rounded-sm'>Best Seller</span>
                                    <span className='w-8 h-8 rounded-full bg-white border-[1px] border-gray-500 absolute top-2 right-3 flex justify-center items-center'><CiHeart size={25} className='hover:text-gray-600 cursor-pointer' /></span>
                                    <img src={Iphone} alt="phone image" />
                                </div>
                                <div className='px-2 w-full h-auto flex flex-col gap-1 py-1'>
                                    <p className=''>IPhone 16 Pro Max</p>
                                    <p className='text-gray-500 text-sm'>By Apple</p>
                                    <p className='mt-3 text-sm'>From USD 1000</p>
                                    <p className='mb-3 text-sm text-green-500'>From USD 990 with Printify Premium</p>
                                    <p className='text-gray-500 text-sm'>3 color • 4 Varients</p>
                                </div>
                            </div>
                            <div className='min-w-[70%] h-auto flex flex-col gap-3 border-[1px] border-gray-300 sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]'>
                                <div className='relative flex'>
                                    <span className='border-[1px] border-[#c3862c] text-[#9e591c] px-2 py-0.5 absolute top-2 left-2 bg-[#faf7d7] rounded-sm'>Best Seller</span>
                                    <span className='w-8 h-8 rounded-full bg-white border-[1px] border-gray-500 absolute top-2 right-3 flex justify-center items-center'><CiHeart size={25} className='hover:text-gray-600 cursor-pointer' /></span>
                                    <img src={Hoodie} alt="phone image" />
                                </div>
                                <div className='px-2 w-full h-auto flex flex-col gap-1 py-1'>
                                    <p className=''>CozyCloud Hoodie</p>
                                    <p className='text-gray-500 text-sm'>By UrbanComfort</p>
                                    <p className='mt-3 text-sm'>From USD 49.99</p>
                                    <p className='mb-3 text-sm text-green-500'>From USD 44.99 with Printify Premium</p>
                                    <p className='text-gray-500 text-sm'>8 color • 4 sizes • 25 prints</p>
                                </div>
                            </div>
                            <div className='min-w-[70%] h-auto flex flex-col gap-3 border-[1px] border-gray-300 sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]'>
                                <div className='relative flex'>
                                    <span className='border-[1px] border-[#c3862c] text-[#9e591c] px-2 py-0.5 absolute top-2 left-2 bg-[#faf7d7] rounded-sm'>Best Seller</span>
                                    <span className='w-8 h-8 rounded-full bg-white border-[1px] border-gray-500 absolute top-2 right-3 flex justify-center items-center'><CiHeart size={25} className='hover:text-gray-600 cursor-pointer' /></span>
                                    <img src={Shoes} alt="phone image" />
                                </div>
                                <div className='px-2 w-full h-auto flex flex-col gap-1 py-1'>
                                    <p className=''>StrideMax Running Shoes</p>
                                    <p className='text-gray-500 text-sm'>By Velocity Footwear</p>
                                    <p className='mt-3 text-sm'>From USD 39.99</p>
                                    <p className='mb-3 text-sm text-green-500'>From USD 34.99 with Printify Premium</p>
                                    <p className='text-gray-500 text-sm'>3 color • 8 sizes • 15 prints</p>

                                </div>
                            </div>
                            <div className='min-w-[70%] h-auto flex flex-col gap-3 border-[1px] border-gray-300 sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%]'>
                                <div className='relative flex'>
                                    <span className='border-[1px] border-[#c3862c] text-[#9e591c] px-2 py-0.5 absolute top-2 left-2 bg-[#faf7d7] rounded-sm'>Best Seller</span>
                                    <span className='w-8 h-8 rounded-full bg-white border-[1px] border-gray-500 absolute top-2 right-3 flex justify-center items-center'><CiHeart size={25} className='hover:text-gray-600 cursor-pointer' /></span>
                                    <img src={Tshirt} alt="phone image" />
                                </div>
                                <div className='px-2 w-full h-auto flex flex-col gap-1 py-1'>
                                    <p className=''>BreezeFit T-Shirt</p>
                                    <p className='text-gray-500 text-sm'>By ActiveWave Apparel</p>
                                    <p className='mt-3 text-sm'>From USD 29.99</p>
                                    <p className='mb-3 text-sm text-green-500'>From USD 24.99 with Printify Premium</p>
                                    <p className='text-gray-500 text-sm'>5 color • 4 sizes • 30 prints</p>
                                </div>
                            </div>
                        </div>
                        <span onClick={rightArrow} className='w-10 h-10 rounded-md flex justify-center items-center border-[1px] border-gray-400 absolute top-[39%] z-20 right-0 bg-white cursor-pointer md:hover:bg-gray-300 active:bg-gray-300'><MdKeyboardArrowRight size={25} /></span>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Homepage