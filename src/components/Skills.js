import { ActiveDot } from "@/assets/OtherIcons/ActiveDotI";
import { ImageShadow } from "./ImageShadow";
import { Title } from "./Title";
import { Icons } from "./Icons";
import { CypressI } from "../assets/SkillsIcons/CypressI";
import { ExpressI } from "@/assets/SkillsIcons/ExpressI";
import { FigmaI } from "@/assets/SkillsIcons/FigmaI";
import { GitI } from "@/assets/SkillsIcons/GitI";
import { JsI } from "@/assets/SkillsIcons/JsI";
import { MongoI } from "@/assets/SkillsIcons/MongoI";
import { NestI } from "@/assets/SkillsIcons/NestI";
import { NextI } from "@/assets/SkillsIcons/NextI";
import { NodeI } from "@/assets/SkillsIcons/NodeI";
// import { PostgrI } from "@/assets/SkillsIcons/PostgrI"
import { ReactI } from "@/assets/SkillsIcons/ReactI";
import { SassI } from "@/assets/SkillsIcons/SassI";
import { SocketI } from "@/assets/SkillsIcons/SocketI";
import { StoryBookI } from "@/assets/SkillsIcons/StoryBokkI";
import { TailwindI } from "@/assets/SkillsIcons/TailwindI";
import { TypeScriptI } from "@/assets/SkillsIcons/TypescriptI";
import { PostgrI } from "@/assets/SkillsIcons/PostgrI";

export const Skills = (props) => {
  const icons = [
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
    {
      icon: <CypressI color={props.dark ? "white" : "black"}></CypressI>,
      title: "Cypress",
    },
  ];
  return (
    <div id="Testimonials">
      <Title
        title={"Skills"}
        description={"The skills, tools and technologies I am really good at:"}
      ></Title>
      {/* grid gap-[20px] grid-cols-8  */}

      <div className="w-full grid grid-cols-3 gap-[60px] sm:grid-cols-5 sm:gap-[40px] md:grid-cols-8 md:gap-[50px] ">
        {icons.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center"
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /* <div className="w-full grid grid-cols-[1fr_1fr_1fr] md:flex md:justify-between mb-[48px]">
<Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nextjs.png'} title={'Next.js'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nodejs.png'} title={'NodeJS'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-express.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nest.png'} title={'Nest'} width={'w-[66px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-socket.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
</div>
<div className="w-full grid grid-cols-[1fr_1fr_1fr] md:flex md:justify-between">
<Icons src={'/icon-postgresql.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-mongodb.png'} title={'TypeScript'} width={'w-[29px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-sass.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-tailwindcss.png'} title={'Next.js'} width={'w-[104px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-figma.png'} title={'NodeJS'} width={'w-[42px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-cypress.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-storybook.png'} title={'Nest'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-git.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
</div> */
}

{
  /* <div className="w-full flex justify-between">
<Icons src={'/jsIcon.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-typescript.png'} title={'TypeScript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-react.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nextjs.png'} title={'Next.js'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nodejs.png'} title={'NodeJS'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-express.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-nest.png'} title={'Nest'} width={'w-[66px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-socket.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>

</div>
<div className="w-full flex justify-between mt-[20px]">
<Icons src={'/icon-postgresql.png'} title={'Javascript'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-mongodb.png'} title={'TypeScript'} width={'w-[29px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-sass.png'} title={'React'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-tailwindcss.png'} title={'Next.js'} width={'w-[104px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-figma.png'} title={'NodeJS'} width={'w-[42px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-cypress.png'} title={'Expresss'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-storybook.png'} title={'Nest'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
<Icons src={'/icon-git.png'} title={'Socket'} width={'w-[64px]'} height={'h-[64px]'}></Icons>
</div> */
}
