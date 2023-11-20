import { ActiveDot } from "@/assets/svgs/ActiveDot"
import { ImageShadow } from "./ImageShadow"
import { Title } from "./Title"
import { JsIcon } from "@/assets/svgs/JsIcon"
import { Buttons } from "./Buttons"
import { WorkDetails } from "./WorkDetails"

export const Work = () => {
    return (
        <>
            <Title title={'Work'} description={'Some of the noteworthy projects I have built:'}></Title>

            <div className="flex flex-col gap-[48px]">
                <WorkDetails></WorkDetails>

                <div className={'grid grid-cols-[1fr_1fr]  gap-[48px] rounded-[20px] shadow-md'}>

                    <div className="p-[48px] flex flex-col gap-[24px]">
                        <div>Fiskil</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                        <div className="flex flex-wrap gap-[5px]">
                            <Buttons title={'Github'}></Buttons>
                            <Buttons title={'React'}></Buttons>
                            <Buttons title={'NextJs'}></Buttons>
                            <Buttons title={'TypeScript'}></Buttons>
                            <Buttons title={'C Sharp'}></Buttons>
                            <Buttons title={'MongoDB'}></Buttons>
                            <Buttons title={'Inkliw'}></Buttons>
                            <Buttons title={'Facebook'}></Buttons>
                        </div>
                        <div>
                            <img src="/LinkIcon.png"></img>
                        </div>
                    </div>

                    <div className="p-[48px]">
                        <img src='./Work.png'></img>
                    </div>
                </div>


                <WorkDetails></WorkDetails>
            </div>
        </>
    )
}