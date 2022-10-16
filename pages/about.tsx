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

const About: NextPage = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-2/5 pt-8 lg:pt-12 xl:pt-0 text-center items-start flex justify-center">
        <Image
          className="w-72 lg:w-auto xl:py-10"
          src={"/my-image.png"}
          alt="My image"
          width={400}
          height={900}
        />
      </div>
      <div className="relative w-full lg:w-3/5 lg:px-8 pt-10 xl:pt-12">
        {/* <div className="absolute -z-10 w-max -top-20 lg:-top-2 left-16 sm:left-36 md:left-56 lg:-left-8 font-black text-gray-100 opacity-80 tracking-widest rotate-90 lg:rotate-0 text-[150px] leading-none">
          ABOUT ME
        </div> */}
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">About me</h1>
        <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <p className="pt-8">
            👋 Hi, I'm <span className="font-bold">Chan Laurente</span> from
            Philippines. I'm a full time software engineer with over 5 years of
            professional experience. I specialise in front end development, but
            also doing backend works. I am highly skilled in JavaScript and
            knowledgeable in some of it’s popular libraries and frameworks such
            as{" "}
            <a href="" className="text-blue-500 font-medium">
              ReactJS
            </a>{" "}
            ,{" "}
            <a href="" className="text-green-500 font-medium">
              VueJS
            </a>{" "}
            and{" "}
            <a href="" className="text-green-800 font-medium">
              NodeJS
            </a>
            . I am now interested in learning{" "}
            <a href="" className="text-purple-500 font-medium">
              Qwik
            </a>
            ! (cause I think it would be popular in the near future).
          </p>
          <p className="pt-8">
            I am currently working at{" "}
            <span className="font-bold">Accenture Inc.</span> as Advanced App
            Engineering Specialist. I am certified Cloud Practitioner in AWS and
            Microsoft Azure and continuously learning Cloud Computing and other
            cutting-edge technologies.
          </p>
          <p className="pt-8">
            I am a father of two bright kids, named Eliana and Eliam, and
            happily married to my ex-girlfriend, my wife, Elizabeth. 💘 On my
            free time, I watch random online tutorials, reading blogs, listening
            to podcasts related to web development or anything that interests
            me. (I have plenty of time) I also play with my kids or playing
            online games such as (Valorant, Wildrift, League of legends).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
