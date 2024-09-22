import React, { useRef } from 'react'
import { CiHeart } from "react-icons/ci";
import Iphone from './Images/BestSellers/iphone.webp'
import Hoodie from './Images/BestSellers/hoodie2.webp'
import Shoes from './Images/BestSellers/shoes.webp'
import Tshirt from './Images/BestSellers/tshirts2.jpg'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


function Products() {

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
    )
}

export default Products