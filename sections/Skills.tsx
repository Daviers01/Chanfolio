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
  {
    name: "Kajabi",
    image: "/kajabi.svg",
  },
];

const Skills = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">My Skills</div>
      <div className="flex flex-col lg:flex-row gap-20 text-xl leading-snug tracking-normal font-medium">
        <p className="mb-20">
          List of tools and technologies I used in projects that I worked on.
        </p>
      </div>
      <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
        <div className="rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {skillset.map((props, i) => {
            return <Card key={i} {...props} />;
          })}
          {others.map((props, i) => {
            return <Card key={i} {...props} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
