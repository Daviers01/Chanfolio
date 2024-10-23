const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 text-xl leading-relaxed tracking-normal font-medium">
      <div className="flex-1">
        <p className="mb-5">
          I&#39;m a full time developer with almost 7 years of professional
          experience. I specialise in front-end development, but over the years
          I also learned a lot in back-end stuffs.
        </p>
        <p className="mb-5">
          I am highly skilled in JavaScript and knowledgeable in some of it’s
          popular libraries and frameworks such as{" "}
          <span className="text-[#3fa8e0] font-bold">React</span>,{" "}
          <span className="text-[#36d480] font-bold">Vue</span> and{" "}
          <span className="text-[#3c4540] font-bold">Node</span>.
          <span>
            I am now interested in learning{" "}
            <span className="text-[#bc4fc0] font-bold">Qwik</span>, cause I
            think it would be popular in the near future.
          </span>
        </p>
      </div>
      <div className="flex-1">
        <p className="mb-5">
          I'm currently working in{" "}
          <span className="text-[#6a2c55] font-bold">Dentsu</span> as
          Analytics Implementation Consultant. 
        </p>
        <p className="mb-5">
          I am certified Cloud Practitioner in AWS and Microsoft Azure and
          continuously learning anything about Web Analytics, Web Development, Cloud Computing, AI and other cutting-edge
          technologies.
        </p>
        <p className="mb-5">
          I am a father of two bright kids, named Eliana and Eliam, and happily
          married to my ex-girlfriend, my wife, Elizabeth. 💘
        </p>
      </div>
    </div>
  );
};

export default About;
