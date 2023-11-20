import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ActiveDot } from '@/assets/svgs/ActiveDot'
import { Icon1 } from '@/assets/svgs/Icon1'
import { Icon2 } from '@/assets/svgs/Icon2'
import { Icon3 } from '@/assets/svgs/Icon3'

import { ImageShadow } from './ImageShadow'

export const Header = (props) => {

    return (

        <div className='grid gap-[80px] grid-cols-[1fr] md:grid-cols-[2fr_1fr]  '>
            <div className='flex flex-col gap-[48px] px-[20px]  justify-center order-2 md:order-1'>
                <div>
                    <h1 className='text-4xl mb-[20px]'> Hi, I’m Sagar 👋</h1>
                    <p>
                        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
                        exceptional
                        digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been
                        creating web applications for over 7 years, I still love it as if it was something new.
                    </p>
                </div>
                <div>
                    <div className='flex flex-row gap-[10px]'>
                        <div><FontAwesomeIcon icon={faLocationDot} /></div>
                        <p>Ahmedabad, India</p>
                    </div>
                    <div className='flex flex-row gap-[10px]'>
                        <div className='flex justify-center items-center'><ActiveDot color={'#10B981'} /></div>
                        <p>Available for new projects</p>
                    </div>
                </div>

                <div className='flex gap-[0px]'>
                    <div><Icon1></Icon1></div>
                    <div><Icon2></Icon2></div>
                    <div><Icon3></Icon3></div>
                </div>
            </div>

            <div className='flex justify-center order-1 md:order-2 md:justify-end'>
                <div className='w-[280px] h-[320px]'>
                    <ImageShadow src={'/proPic.png'} alignPic={'md:left-[-40px]'} />
                </div>
            </div>
        </div>
    )
}