import { Title } from "./Title"
import { GitSVG } from '@/assets/svgs/GitSVG'
import { TwitterSVG } from '@/assets/svgs/TwitterSVG'
import { FigmaSVG } from '@/assets/svgs/FigmaSVG'
import { MailI } from "@/assets/OtherIcons/MailI"
import { CopyI } from "@/assets/OtherIcons/CopyI"
import { PhoneI } from "@/assets/OtherIcons/PhoneI"

export const Contact = (props) => {
    return (
        <div id="Contact">
            <div className={'flex flex-col gap-[48px] justify-center items-center'}>
                <Title title={'Get in touch'} description={`What’s next? Feel free to reach out to me if you\'re looking for${<br></br>} a developer, have a query, or simply want to connect.`}></Title>

                <div className="flex flex-col justify-center items-center gap-[18px] ">
                    <div className="flex gap-[10px]">
                        <MailI w={'16px'} h={'16px'} color={props.dark ? '#D1D5DB' : '#4B5563'}></MailI>
                        <div className="text-[16px] md:text-[28px]">reachsagarshah@gmail.com</div>
                        <PhoneI color={props.dark ? '#D1D5DB' : '#4B5563'}></PhoneI>
                    </div>
                    <div className="flex gap-[10px]">
                        <CopyI color={props.dark ? '#D1D5DB' : '#4B5563'}></CopyI>
                        <div className="text-[16px] md:text-[28px]">+91 8980500565</div>
                        <PhoneI color={props.dark ? '#D1D5DB' : '#4B5563'}></PhoneI>
                    </div>
                </div>
                <div>
                    <div>You may also find me on these platforms!</div>
                    <div className='flex gap-[0px] justify-center items-center'>
                        <div><GitSVG color={props.dark ? '#D1D5DB' : '#4B5563'}></GitSVG></div>
                        <div><TwitterSVG color={props.dark ? '#D1D5DB' : '#4B5563'}></TwitterSVG></div>
                        <div><FigmaSVG color={props.dark ? '#D1D5DB' : '#4B5563'}></FigmaSVG></div>
                    </div>
                </div>

            </div>
        </div>
    )
}