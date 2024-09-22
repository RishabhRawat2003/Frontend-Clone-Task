import React from 'react'
import LogoImg from './Images/Logo.png'

function Logo() {
    return (
        <div className='w-auto flex gap-1 text-2xl font-semibold items-center md:text-3xl md:font-bold'>
            <img src={LogoImg} alt="logo" className='w-10' />
            Printify
        </div>
    )
}

function SmallLogo() {
    return (
        <div className='w-auto items-center'>
            <img src={LogoImg} alt="logo" className='w-10' />
        </div>
    )
}

export {Logo , SmallLogo}