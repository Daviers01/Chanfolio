import type { NextPage } from "next";
import Card from "../components/Card";
import GotoCard from "../components/GotoCard";

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
  console.log(props);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12">
        <div className="hidden sm:block absolute top-8 lg:top-5 2xl:top-0 -left-2 -z-10 w-max font-black text-gray-100 opacity-80 tracking-widest text-[75px] md:text-[85px] lg:text-[105px] xl:text-[125px] 2xl:text-[150px] leading-none">
          TECH & TOOLS
        </div>
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          My Experience
        </h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 p-5 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4">
            {experiences.map((props, i) => {
              return <Card key={i} {...props} />;
            })}

            <GotoCard
              to={"./certification"}
              className="group bg-gray-800 p-8 2xl:p-20 hover:bg-gray-700"
            >
              <p className="text-xs text-white">Go to</p>
              <p className="text-xl lg:text-2xl text-white font-bold">
                Education & Certifications
              </p>
              <span className="text-white text-3xl absolute right-14 md:relative md:right-0 text-end">
                &#8594;
              </span>
            </GotoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
