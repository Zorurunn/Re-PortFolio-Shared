import { ExI } from "@/assets/OtherIcons/ExI";
import { MoonI } from "@/assets/OtherIcons/MoonI";
import { SunI } from "@/assets/OtherIcons/SunI";
import { DownloadCv } from "./DownloadButton";
import { LittleContainer } from "./LittleContainer";
import allClass from "../app/allClass.module.css";

export const HiddenMenu = (props) => {
  const data = [
    { title: "About" },
    { title: "Work" },
    { title: "Testimonials" },
    { title: "Contact" },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white z-30 md:hidden">
        <LittleContainer align={"h-16"}>
          <button
            onClick={() => {
              props.toggle((prev) => !prev);
              const scroll = document.querySelector(`#Header`);
              const parent = scroll.parentNode;
              parent.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }}
            id="logo"
            className="flex justify-center items-center text-[20px]"
          >
            &lt;SS/&gt;
          </button>
          <div id="details" className="flex justify-center items-center gap-4">
            <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  props.toggle((prev) => !prev);
                }}
              >
                <ExI color={props.dark ? "#D1D5DB" : "#4B5563"} />
              </button>
            </div>
          </div>
        </LittleContainer>

        <hr />

        <LittleContainer>
          <div className="w-full flex flex-col items-start gap-[20px] py-[20px]">
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    props.toggle((prev) => !prev);
                    const scroll = document.querySelector(`#${item.title}`);
                    const parent = scroll.parentNode;
                    parent.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "start",
                    });
                  }}
                  key={index}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </LittleContainer>

        <hr />

        <LittleContainer>
          <div className="w-full flex justify-between py-[20px]">
            <div>Switch Theme</div>
            <button
              className="w-[36px] h-[36px] flex flex-col justify-center items-center"
              onClick={() => {
                props.set((prev) => !prev);
              }}
            >
              <SunI />
              <MoonI />
            </button>
          </div>
        </LittleContainer>

        <LittleContainer>
          <DownloadCv width={"w-full"}></DownloadCv>
        </LittleContainer>
      </div>
    </>
  );
};

// <div className={"w-screen m-auto max-w-[1100px] px-[16px]"}>
// <div className='flex justify-between h-16 mt-[40px] md:hidden'>
//     <h1 id="logo" className='flex justify-center items-center' >SS/</h1>
//     <div id="details" className='flex justify-center items-center gap-4'>
//         <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
//             <ExI />
//         </div>
//     </div>
// </div>
// </div >
// <hr />
