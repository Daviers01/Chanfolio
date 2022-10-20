import type { NextPage } from "next";
import Card from "../components/Card";

const certifications = [
  {
    name: "Rizal Technological University",
    image: "/logo-rtu.png",
    role: ["Bachelor of Science in Information and Communication Technology"],
    date: "2012 - 2017",
  },
  {
    name: "Microsoft Certified",
    image: "/logo-microsoft.png",
    role: [
      "Azure Fundamentals (AZ-900)",
      "Azure AI Fundamentals (AI-900)",
      "Azure Data Fundamentals (DP-900)",
    ],
  },
  {
    name: "Amazon Web Services",
    image: "/logo-aws.png",
    role: ["Certified Cloud Practitioner (CLF-C01)"],
  },
  {
    name: "Tealium",
    image: "/logo-tealium.png",
    subsidiary: "Customer Data Platform",
    role: [
      "Tealium IQ - Basic & Advanced",
      "AudienceStream - Basic & Advanced",
    ],
  },
  {
    name: "TESDA",
    image: "/logo-tesda.png",
    subsidiary: "National Certificate",
    role: [
      "Creative Web Design",
      "Computer Hardware Servicing",
      "Electrical Installation and Maintenance",
    ],
  },
];

const Certification: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          Education & Certifications
        </h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((props, i) => {
              return <Card key={i} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
