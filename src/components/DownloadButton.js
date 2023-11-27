import React, { useState } from 'react'
import { SunI } from '@/assets/OtherIcons/SunI'
import { darkMode } from '../../tailwind.config'
import { MoonI } from '@/assets/OtherIcons/MoonI'

export const DownloadCv = (props) => {
    return (

        <button className={props.width + ' ' + 'bg-black text-white rounded pr-2 pt-1 pl-2 pb-1 dark:bg-[#D1D5DB] dark:text-black'}>Download CV</button>


    )
}

// flex justify-between h-16 mt-[40px]
{/* <nav className='hidden md:flex justify-between h-16 mt-[40px]'> */ }
