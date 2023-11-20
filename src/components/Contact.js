import { Title } from "./Title"
import { Icon1 } from '@/assets/svgs/Icon1'
import { Icon2 } from '@/assets/svgs/Icon2'
import { Icon3 } from '@/assets/svgs/Icon3'

export const Contact = () => {
    return (
        <>
            <div className={'flex flex-col gap-[48px] justify-center items-center'}>
                <Title title={'Get in touch'} description={`What’s next? Feel free to reach out to me if you\'re looking for${<br></br>} a developer, have a query, or simply want to connect.`}></Title>

                <div className="flex flex-col justify-center items-center gap-[18px]">
                    <div className="flex gap-[10px]">
                        <img src="/mail-icon.png"></img>
                        <div className="text-[28px]">reachsagarshah@gmail.com</div>
                        <img src="/copy-icon.png"></img>
                    </div>
                    <div className="flex gap-[10px]">
                        <img src="/mail-icon.png"></img>
                        <div className="text-[28px]">+91 8980500565</div>
                        <img src="/copy-icon.png"></img>

                    </div>
                </div>
                <div>
                    <div>You may also find me on these platforms!</div>
                    <div className='flex gap-[0px] justify-center items-center'>
                        <div><Icon1></Icon1></div>
                        <div><Icon2></Icon2></div>
                        <div><Icon3></Icon3></div>
                    </div>
                </div>

            </div>
        </>
    )
}