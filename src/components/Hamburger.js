import { ExI } from "@/assets/OtherIcons/ExI";
import { HamburgerSvg } from "@/assets/svgs/HamburgerSvg";
import { useState } from "react";
import { HiddenMenu } from "./HiddenMenu";
export const Hamburger = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      {/* <nav className='flex justify-between h-16 mt-[40px] md:hidden'>
                <h1 id="logo" className='flex justify-center items-center' ></h1>
                <div id="details" className='flex justify-center items-center gap-4'>
                    <button

                    >
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                        </div>
                    </button>
                </div>
            </nav > */}
      <nav className="flex justify-between h-16 fixed z-30 bg-white dark:bg-black top-0 left-0 w-full md:hidden w-screen m-auto max-w-[1100px]">
        <div className={"w-screen m-auto max-w-[1100px] px-[16px] h-fit"}>
          <div className={"flex justify-between "}>
            <button
              onClick={() => {
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
            <div
              id="details"
              className="flex justify-center items-center gap-4"
            >
              <button
                onClick={() => {
                  setIsDrawerOpen((prev) => !prev);
                }}
              >
                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                  {/* {clicked && <HamburgerSvg color={props.dark ? '#D1D5DB' : '#4B5563'} />} */}
                  <HamburgerSvg color={props.dark ? "#D1D5DB" : "#4B5563"} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isDrawerOpen && (
        <HiddenMenu
          dark={props.dark}
          toggle={setIsDrawerOpen}
          set={props.set}
        />
      )}
    </>
  );
};
