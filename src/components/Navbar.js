import React, { useState } from 'react'
import { SunI } from '@/assets/OtherIcons/SunI'
import { darkMode } from '../../tailwind.config'
import { MoonI } from '@/assets/OtherIcons/MoonI'
import { DownloadCv } from './DownloadButton'
import { LittleContainer } from './LittleContainer'

export const NavBar = (props) => {
    const data = [
        { title: 'About' },
        { title: 'Work' },
        { title: "Testimonials" },
        { title: "Contact" },
    ]
    return (<>
        <nav className='hidden md:flex justify-between h-16 mt-[40px]'>
            <h1 id="logo" className='flex justify-center items-center' ></h1>
            <div id="details" className='flex justify-center items-center gap-4'>


                <button className='w-[36px] h-[36px] flex flex-col justify-center items-center'


                >

                </button>

            </div>
        </nav >


        <nav className='hidden md:flex justify-between h-16 fixed z-30 bg-white dark:bg-black top-0 left-0 w-full'>
            <div className={"w-screen m-auto max-w-[1100px] px-[16px] h-fit"}>
                <div className={'flex justify-between '}>
                    <h1 h1 id="logo" className='flex justify-center items-center' >SS/</h1>
                    <div id="details" className='flex justify-center items-center gap-4'>
                        {data.map((item) => {
                            return <div>{item.title}</div>
                        })}

                        <button className='w-[36px] h-[36px] flex flex-col justify-center items-center'
                            onClick={() => {
                                props.set((prev) => !prev)
                            }}

                        >
                            <SunI />
                            <MoonI />
                        </button>
                        {/* <button className='bg-black text-white rounded pr-2 pt-1 pl-2 pb-1 dark:bg-white dark:text-black'>Download CV</button> */}
                        <DownloadCv></DownloadCv>
                    </div>
                </div>
            </div>
        </nav >
    </>
    )
}

// flex justify-between h-16 mt-[40px]
{/* <nav className='hidden md:flex justify-between h-16 mt-[40px]'> */ }
