"use client";
import { LinkIcon } from "@/assets/OtherIcons/LinkIcon";
import Link from "next/link";
export const WorkDetails = (props) => {
  return (
    <div
      className={
        "grid grid-cols-[1fr] rounded-[20px] shadow-md md:grid-cols-[1fr_1fr] overflow-hidden"
      }
    >
      <div
        className={
          "md:" +
          props.order +
          " " +
          "bg-gray-50 p-[48px] flex justify-center items-center dark:bg-[#374151] "
        }
      >
        <Link href={props.href} target="_blank">
          <div className="rounded-[15px]">{props.image}</div>
        </Link>
      </div>
      <div className={"p-[48px] flex flex-col gap-[24px] dark:bg-[#1F2937]"}>
        <Link href={props.href} target="_blank">
          <div className="hover:text-[#4b5563]">{props.title}</div>
        </Link>
        <div>{props.description}</div>
        <div className="flex flex-wrap gap-[5px]">
          {props.buttons.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          <LinkIcon color={Boolean(props.dark) ? "#D1D5DB" : "#4B5563"} />
        </div>
      </div>
    </div>
  );
};
