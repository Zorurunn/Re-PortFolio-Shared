import { ActiveDot } from "@/assets/svgs/ActiveDot"
import { ImageShadow } from "./ImageShadow"
import { Title } from "./Title"
import { Icons } from "./Icons"

export const Skills = () => {
    return (
        <>
            <Title title={'Skills'} description={"The skills, tools and technologies I am really good at:"}></Title>

            <div className="w-full">
                <div className="w-full grid grid-cols-[1fr_1fr_1fr]">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-nextjs.png'} title={'Next.js'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-nodejs.png'} title={'NodeJS'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-express.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-nest.png'} title={'Nest'} width={'w-[66px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-socket.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
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

            <div className="w-full">
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
                <div className="w-full flex justify-between">
                    <Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                    <Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
                </div>
            </div>
        </>
    )
}