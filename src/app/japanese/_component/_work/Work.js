"use client";

import { Title } from "../Title";
import { Buttons } from "./Buttons";
import { WorkDetails } from "./WorkDetails";

export const Work = (props) => {
  const data = [
    {
      title: "フードデリバリーサイト",
      description:
        "このウェブサイトには、管理者向けのページもあります。ユーザーが管理者であれば、右上に管理者タブが表示され、メニューの追加や更新が可能です。一般のユーザーは食品を注文し、注文の状態を確認できます。",
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
      title: "ブログサイト",
      description:
        "Dev.toコミュニティとAPIを使用しています。誰でも最新のブログを訪問して読むことができます。トレンドや最新のカテゴリー、検索機能も備えています。",
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
  ];
  return (
    <div id="Work">
      <Title
        title={"プロジェクト"}
        description={"構築したプロジェクトの一部："}
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
