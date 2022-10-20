import type { NextPage } from "next";
import Card from "../components/Card";

const experiences = [
  {
    name: "Accenture",
    image: "/logo-accenture.png",
    role: [
      "Advanced App Engineering Specialist",
      "Application Development Team Lead",
    ],
    date: "September 2021 - Present",
  },
  {
    name: "Stratpoint",
    image: "/logo-stratpoint.png",
    role: ["Senior Software Engineer"],
    date: "January 2019 - August 2021",
  },
  {
    name: "PCM",
    image: "/logo-pcm.png",
    subsidiary: "The Right Technology, Delivered.",
    role: ["Front End Web Developer 1", "Associate Front End Web Developer"],
    date: "August 2017 - January 2019",
  },
  {
    name: "Itworks Global Solutions",
    image: "/logo-itworks.png",
    role: ["Web Developer - Internship"],
    date: "March 2016 - July 2016",
  },
  {
    name: "Emerson",
    image: "/logo-emerson.png",
    subsidiary: "Process Management",
    role: ["Technical Support - Internship"],
    date: "June 2014 - March 2015",
  },
];

const Experience: NextPage = (props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          Experiences
        </h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 p-5 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4">
            {experiences.map((props, i) => {
              return <Card key={i} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
