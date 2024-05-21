import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI";
import { ImageShadow } from "./ImageShadow";
import { Title } from "./Title";

export const AboutMe = (props) => {
  return (
    <div id="About">
      <Title title={"About me"}></Title>
      <div
        className={"grid grid-cols-[1fr] gap-[80px] md:grid-cols-[1fr_1fr]  "}
      >
        <div className="flex justify-center md:justify-start">
          <div className="w-[280px] h-[320px] md:w-[400px] md:h-[480px]">
            <ImageShadow
              border={"dark:border-[#111827]"}
              src={"/AboutMe.png"}
              alignPic={"md:left-[40px]"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="text-[24px]">Curious about me? Here you have it:</div>
          <div className="flex flex-col gap-[16px]">
            <p>
              I transitioned into web development because I needed a career
              change and saw the growing popularity of the field. This practical
              decision led me to master both front-end and back-end
              technologies, including HTML, CSS, JavaScript, Node.js, and
              various databases. I am continuously growing and evolving, taking
              on new challenges and learning the latest technologies. Now, I
              build cutting-edge web applications using modern tools like
              Next.js, TypeScript, Tailwind CSS, MongoDB, and more.
            </p>

            <p>
              I am very much a progressive thinker and enjoy working on
              innovative products.
            </p>

            <p>
              One last thing, I&#39;m available for work, so feel free to reach
              out and say hello!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
