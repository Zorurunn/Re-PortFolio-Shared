import { MailI } from "@/assets/OtherIcons/MailI";
import { CopyI } from "@/assets/OtherIcons/CopyI";
import { PhoneI } from "@/assets/OtherIcons/PhoneI";
import { FacebookIcon } from "@/assets/svgs/FacebookIcon";
import { InstagramIcon } from "@/assets/svgs/InstagramIcon";
import { GitIcon } from "@/assets/svgs/GitIcon";
import Link from "next/link";
import { Title } from "./Title";

export const Contact = (props) => {
  return (
    <div id="Contact">
      <div className={"flex flex-col gap-[48px] justify-center items-center"}>
        <Title
          title={"お問い合わせ"}
          description={`開発者をお探しの方、質問がある方、または簡単にコネクトしたい方は、お気軽にご連絡ください。`}
        ></Title>

        <div className="flex flex-col justify-center items-center gap-[18px] ">
          <div className="flex gap-[10px]">
            <MailI
              w={"16px"}
              h={"16px"}
              color={props.dark ? "#D1D5DB" : "#4B5563"}
            ></MailI>
            <div className="text-[16px] md:text-[28px]">
              udvalfora@gmail.com
            </div>
            <PhoneI color={props.dark ? "#D1D5DB" : "#4B5563"}></PhoneI>
          </div>
          <div className="flex gap-[10px]">
            <CopyI color={props.dark ? "#D1D5DB" : "#4B5563"}></CopyI>
            <div className="text-[16px] md:text-[28px]">
              (+81) 080-4282-0122
            </div>
            <PhoneI color={props.dark ? "#D1D5DB" : "#4B5563"}></PhoneI>
          </div>
        </div>
        <div>
          {/* <div>You may also find me on these platforms!</div> */}
          <div className="flex gap-2 justify-center items-center mt-3">
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
          <div className="flex gap-[0px] justify-center items-center">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
