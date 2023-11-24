import { Title } from "./Title"
import { ExperienceCard } from "./ExperienceCard"
import { DotP } from "./DotP"
import { CopyRightI } from "@/assets/OtherIcons/CopyRightI"

export const Footer = (props) => {
    return (
        <>
            <div className={props.bg + " " + "w-screen dark:text-[#D1D5DB]"}>
                <div className={props.maxWidth + " " + "w-screen m-auto pt-[24px] pb-[24px] flex justify-center items-center"}>
                    <div className="flex gap-[10px]">
                        <div className='flex justify-center items-center'>
                            <CopyRightI color={props.dark ? '#D1D5DB' : '#4B5563'} />
                        </div>
                        <div className="text-[12px] md:text-[24px]">2023 | Designed and coded with ❤️️ by Sagar Shah</div>
                    </div>
                </div>
            </div >
        </>
    )
}