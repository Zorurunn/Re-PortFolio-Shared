import { ActiveDot } from "@/assets/svgs/ActiveDot"
import { ImageShadow } from "./ImageShadow"
import { Title } from "./Title"
import { Icons } from "./Icons"

export const Skills = (props) => {
    return (
        <>
            <div className={props.bg + " " + "w-screen "}>
                <div className={"w-screen max-w-6xl m-auto pt-[90px] pb-[90px]"}>



                    <Title title={'Skills'} description={"The skills, tools and technologies I am really good at:"}></Title>
                    {/* <div className="mt-[16px] text-gray-600 text-center">The skills, tools and technologies I am really good at:</div> */}


                    <div >
                        <div className="flex mb-[48px]">
                            <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-nextjs.png'} title={'Next.js'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-nodejs.png'} title={'NodeJS'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-express.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-nest.png'} title={'Nest'} width={'w-[66px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-socket.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                        </div>
                        <div className="w-full flex">
                            <Icons src={'/icon-postgresql.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-mongodb.png'} title={'TypeScript'} width={'w-[29px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-sass.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-tailwindcss.png'} title={'Next.js'} width={'w-[104px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-figma.png'} title={'NodeJS'} width={'w-[42px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-cypress.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-storybook.png'} title={'Nest'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                            <Icons src={'/icon-git.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}