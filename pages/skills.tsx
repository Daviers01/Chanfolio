import type { NextPage } from "next";
import Card from "../components/Card";

const skillset = [
  {
    name: "HTML",
    image: "/html-logo.png",
  },
  {
    name: "CSS",
    image: "/css-logo.png",
  },
  {
    name: "Javascript",
    image: "/js-logo.png",
  },
  {
    name: "React",
    image: "/react-logo.png",
  },
  {
    name: "Vue",
    image: "/vue-logo.png",
  },
  {
    name: "NodeJS",
    image: "/node-logo.png",
  },
  {
    name: "Redux",
    image: "/redux-logo.png",
  },
  {
    name: "GraphQL",
    image: "/graphql-logo.png",
  },
  {
    name: "NPM",
    image: "/npm-logo.png",
  },
  {
    name: "Figma",
    image: "/figma-logo.png",
  },
  {
    name: "Git",
    image: "/git-logo.png",
  },
];

const others = [
  {
    name: "AWS",
    image: "/logo-aws.png",
  },
  {
    name: "Microsoft Azure",
    image: "/logo-microsoft.png",
  },
  {
    name: "Tailwind",
    image: "/tailwind-logo.png",
  },
  {
    name: "Ant Design",
    image: "/antd-logo.png",
  },
  {
    name: "Bootstrap",
    image: "/bootstrap-logo.png",
  },
  {
    name: "MySQL",
    image: "/mysql-logo.png",
  },
  {
    name: "Firebase",
    image: "/firebase-logo.png",
  },
  {
    name: "Wordpress",
    image: "/wordpress-logo.png",
  },
  {
    name: "Highcharts",
    image: "/highcharts-logo.png",
  },
  {
    name: "Tealium",
    image: "/logo-tealium.png",
  },
];

const Skills: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">Skills</h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skillset.map((props, i) => {
              return <Card key={i} {...props} />;
            })}
            {others.map((props, i) => {
              return <Card key={i} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
