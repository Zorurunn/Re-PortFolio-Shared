

import { ExI } from "@/assets/OtherIcons/ExI"
import { MoonI } from "@/assets/OtherIcons/MoonI";
import { SunI } from "@/assets/OtherIcons/SunI";
import { DownloadCv } from "./DownloadButton";
import { LittleContainer } from "./LittleContainer";
export const HiddenMenu = (props) => {
    const data = [
        { title: 'About' },
        { title: 'Work' },
        { title: "Testimonials" },
        { title: "Contact" },
    ]
    return (<>
        <div className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white z-20 md:hidden">

            <LittleContainer align={'h-16 mt-[40px]'}>
                <h1 id="logo" className='flex justify-center items-center' >SS/</h1>
                <div id="details" className='flex justify-center items-center gap-4'>
                    <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                        <button
                            onClick={() => {
                                props.toggle((prev) => !prev);
                            }}
                        >
                            <ExI color={props.dark ? '#D1D5DB' : '#4B5563'} />
                        </button>

                    </div>
                </div>
            </LittleContainer>

            <hr />

            <LittleContainer >
                <div className="w-full flex flex-col items-start gap-[20px] py-[20px]">
                    {data.map((item) => {
                        return <button onClick={() => {
                            props.toggle((prev) => !prev);
                        }}>{item.title}</button>
                    })}
                </div>
            </LittleContainer>

            <hr />

            <LittleContainer >
                <div className="w-full flex justify-between py-[20px]">
                    <div>Switch Theme</div>
                    <button className='w-[36px] h-[36px] flex flex-col justify-center items-center'
                        onClick={() => {
                            props.set((prev) => !prev);
                        }}
                    >
                        <SunI />
                        <MoonI />
                    </button>
                </div>
            </LittleContainer>

            <LittleContainer>
                <DownloadCv></DownloadCv>
            </LittleContainer>
        </div>

    </>
    )
}




// <div className={"w-screen m-auto max-w-[1100px] px-[16px]"}>
// <div className='flex justify-between h-16 mt-[40px] md:hidden'>
//     <h1 id="logo" className='flex justify-center items-center' >SS/</h1>
//     <div id="details" className='flex justify-center items-center gap-4'>
//         <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
//             <ExI />
//         </div>
//     </div>
// </div>
// </div >
// <hr />

