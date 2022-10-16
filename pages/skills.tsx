import type { NextPage } from "next";
import Image from "next/future/image";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/hello");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: await res.json(),
    },
  };
}

const skillset = [
  "Agile / Scrum",
  "React - Redux",
  "Vue - Vuex",
  "Node - Express",
  "HTML, CSS and Javascript",
  "SASS / SCSS",
  "CSS Tools and Frameworks: Tailwind, Ant Design, Bootstrap, Material UI",
  "Responsive Web Design (Media queries, Flexbos & Grid)",
  "Databases (MySQL, MSSQL, NoSQL)",
  "Mobile Development (React Native)",
  "API (REST, GraphQL)",
  "Cloud Computing: (Amazon AWS, Microsoft Azure, Firebase)",
  "Content Management System: (Wordpress, Headless CMS)",
  "Package Managers (NPM, Yarn)",
  "Design Tools (Figma, Balsamic, Adobe Photoshop)",
  "Version Control (GIT, Gitflow)",
  "Data visualization (Highcharts, PowerBI)",
  "Customer Data Platform: Tag Management (Tealium, Google tag manager)",
];

const Skills: NextPage = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12">
        {/* <div className="absolute top-0 -z-10 w-max font-black text-gray-100 opacity-80 tracking-widest text-9xl leading-none">
          TECH & TOOLS
        </div> */}
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          My Skills
        </h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 p-5 rounded-2xl">
            <ul className="list-disc">
              {skillset.map((skill, i) => {
                return <li key={i}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
