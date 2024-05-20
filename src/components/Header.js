import { LocationI } from "@/assets/OtherIcons/LocationI";
import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI";
import { ImageShadow } from "./ImageShadow";
import { LocationWhite } from "@/assets/OtherIcons/Home/Desktop/LocationWhite";
import { InstagramIcon } from "@/assets/svgs/InstagramIcon";
import { FacebookIcon } from "@/assets/svgs/FacebookIcon";
import { GitIcon } from "@/assets/svgs/GitIcon";
import { TwitterIcon } from "@/assets/svgs/TwitterIcon";
import Link from "next/link";

export const Header = (props) => {
  return (
    <div id="Header">
      <div className="grid gap-[80px] grid-cols-[1fr] md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-[48px] px-[20px]  justify-center order-2 md:order-1">
          <div>
            <h1 className="text-4xl mb-[20px]"> Hi, I&#39;m Zolzaya 👋</h1>
            <p>
              I&#39;m a passionate Full Stack Developer and innovator based in
              Tokyo. With a deep love for technology.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <LocationI color={props.dark ? "#D1D5DB" : "#4B5563"} />
              <p>Tokyo, Japan</p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <ActiveDotI color={"#10B981"} width={"8"} height={"8"} />
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={"https://www.facebook.com/click.on1"} target="_blank">
              <FacebookIcon color={props.dark ? "#D1D5DB" : "#4B5563"} />
            </Link>
            <Link
              href="https://www.instagram.com/zorurunn?igsh=enhwN2p2OTUyYXl0&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon color={props.dark ? "#D1D5DB" : "#4B5563"} />
            </Link>
            <Link href="https://github.com/Zorurunn" target="_blank">
              <GitIcon color={props.dark ? "#D1D5DB" : "#4B5563"} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2 md:justify-end">
          <div className="w-[280px] h-[320px]">
            <ImageShadow
              border={"dark:border-black"}
              src={"/profile.jpeg"}
              alignPic={"md:left-[-40px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
