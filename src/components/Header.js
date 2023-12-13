import { LocationI } from "@/assets/OtherIcons/LocationI";
import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI";
import { GitSVG } from "@/assets/svgs/GitSVG";
import { TwitterSVG } from "@/assets/svgs/TwitterSVG";
import { FigmaSVG } from "@/assets/svgs/FigmaSVG";
import { ImageShadow } from "./ImageShadow";
import { LocationWhite } from "@/assets/OtherIcons/Home/Desktop/LocationWhite";

export const Header = (props) => {
  return (
    <div id="Header">
      <div className="grid gap-[80px] grid-cols-[1fr] md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-[48px] px-[20px]  justify-center order-2 md:order-1">
          <div>
            <h1 className="text-4xl mb-[20px]"> Hi, I’m Sagar 👋</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing ううcscand
              typesetting industry. Lorem Ipsum has been the industry&quot;s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop p
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <LocationI color={props.dark ? "#D1D5DB" : "#4B5563"} />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <ActiveDotI color={"#10B981"} width={"8"} height={"8"} />
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <div className="flex gap-[0px]">
            <div>
              <GitSVG color={props.dark ? "#D1D5DB" : "#4B5563"}></GitSVG>
            </div>
            <div>
              <TwitterSVG
                color={props.dark ? "#D1D5DB" : "#4B5563"}
              ></TwitterSVG>
            </div>
            <div>
              <FigmaSVG color={props.dark ? "#D1D5DB" : "#4B5563"}></FigmaSVG>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2 md:justify-end">
          <div className="w-[280px] h-[320px]">
            <ImageShadow
              border={"dark:border-black"}
              src={"/ProPicNo.png"}
              alignPic={"md:left-[-40px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
