import type { NextPage } from "next";
import Image from "next/future/image";
import Button from "../components/Button";

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

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:w-3/5 lg:px-12 pt-10 lg:pt-20 xl:pt-32 2xl:pt-44 text-center lg:text-left">
        <h1 className="pt-8 text-gray-900 text-4xl lg:text-7xl xl:text-8xl font-bold">
          <span className="text-2xl lg:text-4xl text-gray-900 leading-loose pb-6 block">
            👋 Hi, I am
          </span>{" "}
          Christian Laurente
        </h1>
        <p className="text-lg lg:text-2xl pt-6">
          Software Engineer based in PH.
        </p>
        <Button>Click here to know more about me..</Button>
      </div>
      <div className="w-full lg:w-2/5 p-10 lg:p-2 text-center items-start flex justify-center">
        <Image
          className="w-96 lg:w-auto xl:py-10"
          src={"/my-image.png"}
          alt="My image"
          width={400}
          height={900}
        />
      </div>
      {/* <hr className="my-4 mx-auto w-48 h-1 bg-gray-500 rounded border-0 md:my-10 dark:bg-gray-700"></hr> */}
    </div>
  );
};

export default Home;
