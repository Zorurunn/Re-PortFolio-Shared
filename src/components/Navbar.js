import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export const NavBar = (props) => {

    return (
        <>
            <div className={props.bg + " " + "w-screen "}>
                <div className={"w-screen max-w-6xl m-auto"}>
                    <nav className='flex justify-between h-16 mt-[40px]'>
                        <h1 id="logo" className='flex justify-center items-center' >SS/</h1>
                        <div id="details" className='flex justify-center items-center gap-4'>
                            <div>About</div>
                            <div>Work</div>
                            <div>TestImonials</div>
                            <div>Contact</div>
                            <div><FontAwesomeIcon icon={faSun} /></div>
                            <button className='bg-black text-white rounded pr-2 pt-1 pl-2 pb-1'>Download CV</button>
                        </div>
                    </nav >
                </div>
            </div>
        </>
    )
}