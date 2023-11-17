import { ActiveDot } from "@/assets/svgs/ActiveDot"
import { ImageShadow } from "./ImageShadow"
import { Title } from "./Title"
import { JsIcon } from "@/assets/svgs/JsIcon"
import { Buttons } from "./Buttons"

export const Work = (props) => {
    return (
        <>
            <div className={props.bg + " " + "w-screen "}>
                <div className={"w-screen max-w-6xl m-auto"}>
                    <div className={' pt-[90px] pb-[90px] '}>
                        <Title title={'Work'} description={'Some of the noteworthy projects I have built:'}></Title>
                        <div className={'grid grid-cols-[1fr_1fr]  gap-[48px] '}>
                            <div className="p-[48px]">
                                <img src='./Work.png'></img>
                            </div>
                            <div className="p-[48px] flex flex-col gap-[24px]">
                                <div>Fiskil</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                                </p>
                                <div className="flex flex-wrap gap-[5px]">
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                    <Buttons title={'Github'}></Buttons>
                                </div>
                                <div>
                                    <img src="/LinkIcon.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}