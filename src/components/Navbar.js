import React, { useState } from "react";
import { SunI } from "@/assets/OtherIcons/SunI";
import { darkMode } from "../../tailwind.config";
import { MoonI } from "@/assets/OtherIcons/MoonI";
import { DownloadCv } from "./DownloadButton";
import { LittleContainer } from "./LittleContainer";
import allClass from "../app/allClass.module.css";
import { MarginOfNav } from "./MarginOfNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
const data = [
  { title: "About" },
  { title: "Skill" },
  { title: "Work" },
  { title: "Contact" },
];
export const NavBar = (props) => {
  const pathname = usePathname;
  return (
    <>
      <nav className="hidden md:flex justify-between h-16 mt-[40px]">
        <h1 id="logo" className="flex justify-center items-center"></h1>
        <div id="details" className="flex justify-center items-center gap-4">
          <button className="w-[36px] h-[36px] flex flex-col justify-center items-center"></button>
        </div>
      </nav>

      <nav
        className={
          "hidden md:flex justify-between h-16 fixed z-30 bg-white dark:bg-black top-0 left-0 w-full"
        }
      >
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
              className="text-[#4b5563] hover:text-stone-950 flex justify-center items-center text-[20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#4b5563"
                stroke="#4b5563"
                width={32}
                height={32}
              >
                <path
                  fill="#4b5563"
                  stroke="#4b5563"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </button>
            <div
              id="details"
              className="flex justify-center items-center gap-4"
            >
              {/* {data.map((item) => {
                            return <div>{item.title}</div>
                        })} */}
              {data.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      const scroll = document.querySelector(`#${item.title}`);
                      const parent = scroll.parentNode;
                      parent.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "start",
                      });
                    }}
                    className="text-[#4b5563] hover:text-stone-950"
                    key={index}
                  >
                    {item.title}
                  </button>
                );
              })}
              <div className="flex gap-2">
                <Link
                  href={"/japanese"}
                  style={{
                    color: props.dark ? "#fff" : "#4b5563",
                    textDecoration: pathname.toString().includes("japanese")
                      ? "underline"
                      : "none",
                  }}
                >
                  JA
                </Link>
                <Link
                  href={"/"}
                  style={{
                    color: props.dark ? "#fff" : "#4b5563",
                    textDecoration: pathname.toString().includes("japanese")
                      ? "none"
                      : "underline",
                  }}
                >
                  EN
                </Link>
              </div>
              <button
                className="w-[36px] h-[36px] flex flex-col justify-center items-center"
                onClick={() => {
                  props.set((prev) => !prev);
                }}
              >
                <SunI />
                <MoonI />
              </button>
              {/* <button className='bg-black text-white rounded pr-2 pt-1 pl-2 pb-1 dark:bg-white dark:text-black'>Download CV</button> */}
              <a download href="/Zolzaya+CV+EN.pdf">
                <DownloadCv />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// flex justify-between h-16 mt-[40px]
{
  /* <nav className='hidden md:flex justify-between h-16 mt-[40px]'> */
}
