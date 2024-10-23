import Card from "../components/Card";

const experiences = [
  {
    name: "Dentsu",
    image: "/dentsu-logo.png",
    role: ["Analytics Implementation - Staff Consultant"],
    date: "July 2024 - Present",
  },
  {
    name: "Accenture",
    image: "/logo-accenture.png",
    role: [
      "Advanced App Engineering Specialist",
      "Application Development Team Lead",
    ],
    date: "September 2021 - June 2024",
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

const Experiences = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">My Experiences</div>
      <div className="flex flex-col lg:flex-row gap-20 text-xl leading-snug tracking-normal font-medium">
        <div className="flex-1">
          <p className="mb-20">
            Companies that guide and gave me opportunity to grow.
          </p>
        </div>
      </div>
      <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
        <div className="rounded-2xl grid grid-cols-1 gap-4">
          {experiences.map((props, i) => {
            return <Card key={i} {...props} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Experiences;
