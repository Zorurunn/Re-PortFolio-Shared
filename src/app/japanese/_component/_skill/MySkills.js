import { CypressIconI } from "../../../../../public/CypressIconI";
import { ExpressIcon } from "../../../../../public/ExpressIcon";
import { Planguage } from "./Planguage";
export const MySkills = (props) => {
  return (
    <div>
      <div className=" max-w-[1280px] m-auto grid md:grid-cols-8 grid-cols-3 md:gap-12 gap-6 ">
        <Planguage text="HTML5" source="/icon-html.png" />
        <Planguage text="CSS3" source="/icon-css.png" />
        <Planguage text="Javascript" source="/icon-javscript.svg" />
        <Planguage text="Typescript" source="/icon-typescript.svg" />
        <Planguage text="React" source="/icon-react.svg" />
        <Planguage text="Next.js" source="/icon-nextjs.svg" />
        <Planguage text="Node.js" source="/icon-nodejs.svg" />
        <Planguage
          text="Express.js"
          source={"/icon-express.svg"}
          svg={<ExpressIcon color={props.dark ? "white" : "black"} />}
        />
        <Planguage text="PostgreSQL" source="/icon-postgresql.svg" />
        <Planguage text="MongoDB" source="/icon-mongodb.svg" />
        <Planguage text="GraphQL" source="/icon-graphql.png" />
        <Planguage text="Tailwindcss" source="/icon-tailwindcss.svg" />
        <Planguage text="MaterialUI" source="/icon-materialui.png" />
        <Planguage
          text="Cypress"
          source={"/icon-cypress.svg"}
          svg={<CypressIconI color={props.dark ? "white" : "black"} />}
        />
        <Planguage text="Jest" source="/icon-jest.jpeg" />
        <Planguage text="Git" source="/icon-git.svg" />
      </div>
    </div>
  );
};
