import { ExI } from "@/assets/OtherIcons/ExI";
import { HamburgerSvg } from "@/assets/svgs/HamburgerSvg"
import { useState } from "react";
import { HiddenMenu } from "./HiddenMenu";
export const Hamburger = (props) => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <nav className='flex justify-between h-16 mt-[40px] md:hidden'>
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
            </nav >

            {!clicked && <HiddenMenu dark={props.dark} toggle={setClicked} set={props.set} />}
        </>

    )
}