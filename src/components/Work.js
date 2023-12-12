import { ActiveDot } from "@/assets/OtherIcons/ActiveDotI";
import { ImageShadow } from "./ImageShadow";
import { Title } from "./Title";
import { JsIcon } from "@/assets/svgs/JsIcon";
import { Buttons } from "./Buttons";
import { WorkDetails } from "./WorkDetails";

export const Work = (props) => {
  const data = [
    {
      title: "Fiskil",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        <Buttons key={1} title={"Github"}></Buttons>,
        <Buttons key={2} title={"React"}></Buttons>,
        <Buttons key={3} title={"NextJs"}></Buttons>,
        <Buttons key={4} title={"TypeScript"}></Buttons>,
        <Buttons key={5} title={"C Sharp"}></Buttons>,
        <Buttons key={6} title={"MongoDB"}></Buttons>,
        <Buttons key={7} title={"Inkliw"}></Buttons>,
        <Buttons key={8} title={"InstaJs"}></Buttons>,
        <Buttons key={9} title={"MongoDB"}></Buttons>,
      ],
      image: <img src="./Work.png"></img>,
      order: "order-0",
    },
    {
      title: "Fiskil",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        <Buttons key={10} title={"Github"}></Buttons>,
        <Buttons key={12} title={"React"}></Buttons>,
        <Buttons key={13} title={"NextJs"}></Buttons>,
        <Buttons key={14} title={"TypeScript"}></Buttons>,
        <Buttons key={15} title={"C Sharp"}></Buttons>,
        <Buttons key={16} title={"MongoDB"}></Buttons>,
        <Buttons key={17} title={"Inkliw"}></Buttons>,
        <Buttons key={18} title={"InstaJs"}></Buttons>,
        <Buttons key={19} title={"MongoDB"}></Buttons>,
      ],
      image: <img src="./Work.png"></img>,
      order: "order-1",
    },
    {
      title: "Fiskil",
      description:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      buttons: [
        <Buttons key={21} title={"Github"}></Buttons>,
        <Buttons key={22} title={"React"}></Buttons>,
        <Buttons key={23} title={"NextJs"}></Buttons>,
        <Buttons key={24} title={"TypeScript"}></Buttons>,
        <Buttons key={25} title={"C Sharp"}></Buttons>,
        <Buttons key={26} title={"MongoDB"}></Buttons>,
        <Buttons key={27} title={"Inkliw"}></Buttons>,
        <Buttons key={28} title={"InstaJs"}></Buttons>,
        <Buttons key={29} title={"MongoDB"}></Buttons>,
      ],
      image: <img src="./Work.png"></img>,
      order: "order-0",
    },
  ];
  return (
    <div id="Work">
      <Title
        title={"Work"}
        description={"Some of the noteworthy projects I have built:"}
      ></Title>

      <div className="flex flex-col gap-[48px]">
        {data.map((item, index) => {
          return (
            <WorkDetails
              dark={props.dark}
              title={item.title}
              description={item.description}
              buttons={item.buttons}
              image={item.image}
              order={item.order}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

{
  /* <div className={'grid grid-cols-[1fr_1fr]  gap-[48px] rounded-[20px] shadow-md'}>

<div className="p-[48px] flex flex-col gap-[24px]">
    <div>Fiskil</div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
    </p>
    <div className="flex flex-wrap gap-[5px]">
        <Buttons title={'Github'}></Buttons>
        <Buttons title={'React'}></Buttons>
        <Buttons title={'NextJs'}></Buttons>
        <Buttons title={'TypeScript'}></Buttons>
        <Buttons title={'C Sharp'}></Buttons>
        <Buttons title={'MongoDB'}></Buttons>
        <Buttons title={'Inkliw'}></Buttons>
        <Buttons title={'Facebook'}></Buttons>
    </div>
    <div>
        <img src="/LinkIcon.png"></img>
    </div>
</div>

<div className="p-[48px]">
    <img src='./Work.png'></img>
</div>
</div> */
}
