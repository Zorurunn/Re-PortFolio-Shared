"use client";
import { Title } from "./Title";

import { Buttons } from "./Buttons";
import { WorkDetails } from "./WorkDetails";

export const Work = (props) => {
  const data = [
    {
      title: "Food delivery application",
      description:
        "This is a food delivery application with an admin page. If the user is an administrator, an admin tab appears in the top right corner, allowing them to add and update the menu. Regular users can order food and check their order status. Please note that this website does not have a responsive design.",
      buttons: [
        <Buttons key={10} title={"Typescript"}></Buttons>,
        <Buttons key={12} title={"ReactJS"}></Buttons>,
        <Buttons key={13} title={"NextJS"}></Buttons>,
        <Buttons key={14} title={"Vercel"}></Buttons>,
        <Buttons key={15} title={"ExpressJS"}></Buttons>,
        <Buttons key={16} title={"NodeJS"}></Buttons>,
        <Buttons key={17} title={"MongoDB"}></Buttons>,
        <Buttons key={18} title={"MUI"}></Buttons>,
        <Buttons key={19} title={"JWT"}></Buttons>,
        <Buttons key={19} title={"Nodemailer"}></Buttons>,
        <Buttons key={19} title={"Cloudinary"}></Buttons>,
      ],
      image: <img src="./FoodDelivery.png"></img>,
      order: "order-1",
      href: "https://food-delivery-zorurunn.vercel.app/",
    },
    {
      title: "Blog web site",
      description:
        "This is a blog website using the Dev.to community and API. Anyone can visit and read the newest blogs. It features trending and latest categories, as well as a search function. Please note that this website does not have a responsive design.",
      buttons: [
        <Buttons key={1} title={"JavaScript"}></Buttons>,
        <Buttons key={2} title={"ReactJS"}></Buttons>,
        <Buttons key={3} title={"NextJs"}></Buttons>,
        <Buttons key={4} title={"Vercel"}></Buttons>,
        <Buttons key={5} title={"ExpressJS"}></Buttons>,
        <Buttons key={6} title={"NodeJs"}></Buttons>,
        <Buttons key={7} title={"Tailwind"}></Buttons>,
      ],
      image: <img src="./BlogWork.png"></img>,
      order: "order-0",
      href: "https://blog-dev-to.vercel.app/blog",
    },
    // {
    //   title: "Fiskil",
    //   description:
    //     "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    //   buttons: [
    //     <Buttons key={21} title={"Github"}></Buttons>,
    //     <Buttons key={22} title={"React"}></Buttons>,
    //     <Buttons key={23} title={"NextJs"}></Buttons>,
    //     <Buttons key={24} title={"TypeScript"}></Buttons>,
    //     <Buttons key={25} title={"C Sharp"}></Buttons>,
    //     <Buttons key={26} title={"MongoDB"}></Buttons>,
    //     <Buttons key={27} title={"Inkliw"}></Buttons>,
    //     <Buttons key={28} title={"InstaJs"}></Buttons>,
    //     <Buttons key={29} title={"MongoDB"}></Buttons>,
    //   ],
    //   image: <img src="./Work.png"></img>,
    //   order: "order-0",
    // },
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
              href={item.href}
            />
          );
        })}
      </div>
    </div>
  );
};
