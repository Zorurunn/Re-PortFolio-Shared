import { Title } from "./Title";
import { ExperienceCard } from "./ExperienceCard";
import { DotP } from "./DotP";
import { useState } from "react";
import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI";

export const Experience = (props) => {
  const data = [
    {
      title: "Sr. Frontend Developer",
      date: "Nov 2021 - Present",
      lists: [
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),

          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description:
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description: "Sed quis justo ac magna.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description:
            "Lorem pretium arcu et massa semper, id fringilla leo semper.",
        },
      ],
    },
    {
      title: "Team Lead",
      date: "Nov 2022 - Present",
      lists: [
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description: "ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description: "Pretium arcu et massa semper, id fringilla leo semper.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description: "Sed quis justo ac magna.",
        },
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description: "Lorem pretium arcu et massa se.",
        },
      ],
    },
    {
      title: "Full Stack Developer",
      date: "Nov 2023 - Present",
      lists: [
        {
          dot: (
            <ActiveDotI
              color={props.dark ? "#D1D5DB" : "black"}
              width={"6"}
              height={"6"}
            />
          ),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit consectetur adipiscing elit",
        },
      ],
    },
  ];
  return (
    <>
      <Title
        title={"Experience"}
        description={"Here is a quick summary of my most recent experiences:"}
      ></Title>

      <div className="w-full flex flex-col justify-center items-center gap-[48px]">
        {data.map((item) => {
          return (
            <ExperienceCard
              title={item.title}
              date={item.date}
              lists={item.lists}
              key={item.title + "1"}
            />
          );
        })}
      </div>
    </>
  );
};
