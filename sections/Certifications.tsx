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

const Certifications = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">
        My Education & Certifications
      </div>
      <div className="flex flex-col lg:flex-row gap-20 text-xl leading-snug tracking-normal font-medium">
        <p className="mb-20">
          The University where I graduated and some of the certifications and
          exam I completed.
        </p>
      </div>
      <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
        <div className="rounded-2xl grid grid-cols-1 2xl:grid-cols-2 gap-4">
          {certifications.map((props, i) => {
            return <Card key={i} {...props} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Certifications;
