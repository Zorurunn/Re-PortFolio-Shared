import { Title } from "../Title";
import { MySkills } from "./MySkills";

export const Skills = (props) => {
  return (
    <div id="Skill">
      <Title
        title={"スキル"}
        description={"得意とするスキル、ツール、技術："}
      ></Title>

      <MySkills dark={props.dark} />
    </div>
  );
};
