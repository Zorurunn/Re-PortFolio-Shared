import { ExI } from "@/assets/OtherIcons/ExI";
import { HamburgerSvg } from "@/assets/svgs/HamburgerSvg"
import { useState } from "react";
import { HiddenMenu } from "./HiddenMenu";
export const Hamburger = (props) => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            {/* <nav className='flex justify-between h-16 mt-[40px] md:hidden'>
                <h1 id="logo" className='flex justify-center items-center' ></h1>
                <div id="details" className='flex justify-center items-center gap-4'>
                    <button

                    >
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                        </div>
                    </button>
                </div>
            </nav > */}
            <nav className='flex justify-between h-16 fixed z-30 bg-white dark:bg-black top-0 left-0 w-full md:hidden'>
                <div className={"w-screen m-auto max-w-[1100px] px-[16px] h-fit"}>
                    <div className={'flex justify-between '}>
                        <h1 id="logo" className='flex justify-center items-center' >SS/</h1>
                        <div id="details" className='flex justify-center items-center gap-4'>
                            <button
                                onClick={() => {
                                    setClicked((prev) => !prev);
                                }}
                            >
                                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                                    {clicked && <HamburgerSvg color={props.dark ? '#D1D5DB' : '#4B5563'} />}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav >

            {!clicked && <HiddenMenu dark={props.dark} toggle={setClicked} set={props.set} />}
        </>

    )
}