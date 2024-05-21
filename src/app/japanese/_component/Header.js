import { LocationI } from "@/assets/OtherIcons/LocationI";
import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI";
import { InstagramIcon } from "@/assets/svgs/InstagramIcon";
import { FacebookIcon } from "@/assets/svgs/FacebookIcon";
import { GitIcon } from "@/assets/svgs/GitIcon";
import Link from "next/link";
import { ImageShadow } from "./ImageShadow";

export const Header = (props) => {
  return (
    <div id="Header">
      <div className="grid gap-[80px] grid-cols-[1fr] md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-[48px] px-[20px]  justify-center order-2 md:order-1">
          <div>
            <h1 className="text-4xl mb-[20px]"> こんにちは、ゾルザヤです 👋</h1>
            <p>東京に住むフルスタック開発者で、テクノロジーが大好きです。</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <LocationI color={props.dark ? "#D1D5DB" : "#4B5563"} />
              <p>東京</p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <ActiveDotI color={"#10B981"} width={"8"} height={"8"} />
              </div>
              <p>新規プロジェクトへの対応が可能</p>
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
