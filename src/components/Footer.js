import { Title } from "./Title"
import { ExperienceCard } from "./ExperienceCard"
import { DotP } from "./DotP"

export const Footer = (props) => {
    return (
        <>
            <div className={props.bg + " " + "w-screen "}>
                <div className={props.maxWidth + " " + "w-screen m-auto pt-[24px] pb-[24px] flex justify-center items-center"}>
                    <div className="flex gap-[10px]">
                        <img src="/copyright.png"></img>
                        <div>2023 | Designed and coded with ❤️️ by Sagar Shah</div>
                    </div>
                </div>
            </div >
        </>
    )
}