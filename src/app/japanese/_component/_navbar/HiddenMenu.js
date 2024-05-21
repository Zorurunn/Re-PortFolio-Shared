import { MoonI } from "@/assets/OtherIcons/MoonI";
import { SunI } from "@/assets/OtherIcons/SunI";
import { LittleContainer } from "./LittleContainer";
import { DownloadCv } from "../DownloadButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
const data = [
  { title: "私について", id: "About" },
  { title: "スキル", id: "Skill" },
  { title: "プロジェクト", id: "Work" },
  { title: "お問い合わせ", id: "Contact" },
];
export const HiddenMenu = (props) => {
  const { pathname } = props;
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white z-30 md:hidden">
        <LittleContainer align={"h-16"}>
          <div
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
          </div>
          <div id="details" className="flex justify-center items-center gap-4">
            <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  props.toggle((prev) => !prev);
                }}
              >
                <div style={{ color: props.dark ? "#D1D5DB" : "#4B5563" }}>
                  X
                </div>
                {/* <ExI color={props.dark ? "#D1D5DB" : "#4B5563"} /> */}
              </button>
            </div>
          </div>
        </LittleContainer>

        <hr />

        <LittleContainer>
          <div className="w-full flex flex-col items-start gap-[20px] py-[20px]">
            {data.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    props.toggle((prev) => !prev);
                    const scroll = document.querySelector(`#${item.id}`);
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
                </div>
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
          </div>
        </LittleContainer>

        <hr />

        <LittleContainer>
          <div
            className="w-full flex justify-between py-[20px] "
            onClick={() => {
              props.set((prev) => !prev);
            }}
          >
            <div>テーマの切り替え</div>
            <button className="w-[36px] h-[36px] flex flex-col justify-center items-center">
              <SunI />
              <MoonI />
            </button>
          </div>
        </LittleContainer>

        <LittleContainer>
          <a download href="/Zolzaya+CV+JN.pdf">
            <DownloadCv />
          </a>
        </LittleContainer>
      </div>
    </>
  );
};
