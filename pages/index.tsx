import type { NextPage } from "next";
import Image from "next/future/image";
import GotoCard from "../components/GotoCard";
import cx from "classnames";

const Home: NextPage = (props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-1/2 p-10 lg:p-2 text-center items-start flex justify-center">
        <Image
          className="w-96 lg:w-auto xl:py-10"
          src={"/my-image.png"}
          alt="My image"
          width={400}
          height={900}
        />
      </div>
      <div className="relative w-full lg:w-1/2 px-4 pt-0 sm:pt-5 md:pt-10 lg:pt-15 xl:pt-20 2xl:pt-40 text-center lg:text-left">
        <h1 className="pt-8 text-gray-900 text-4xl lg:text-7xl xl:text-8xl font-bold">
          <span className="text-2xl lg:text-3xl font-normal text-chan-dark leading-loose pb-3 block">
            👋 Hey, my name is
          </span>{" "}
          <div className="relative font-black">CHRISTIAN LAURENTE</div>
        </h1>
        <p className="text-lg font-normal text-chan-dark lg:text-2xl pt-2 py-8">
          Front-end Developer based in PH{"   "}
          <Image
            className="inline-block"
            src={"/philippines-flag.png"}
            alt="PH flag"
            width={20}
            height={20}
          />
        </p>
        <GotoCard
          to={"./about"}
          className={cx(
            "group transition-all relative text-left bg-chan-dark hover:bg-transparent border-4 border-spacing-2 border-chan-dark border-solid py-4 px-12 2xl:px-8 rounded-lg w-full"
          )}
        >
          <p className="transition-all text-xs text-chan-light group-hover:text-chan-dark">
            Go to
          </p>
          <p className="text-xl lg:text-2xl text-chan-light group-hover:text-chan-dark font-bold">
            About me
          </p>
          <span className="transition-all text-chan-light group-hover:text-chan-dark text-3xl absolute bottom-5 right-7 group-hover:right-5 md:right-14 text-end">
            &#8594;
          </span>
        </GotoCard>
      </div>
      {/* <hr className="my-4 mx-auto w-48 h-1 bg-gray-500 rounded border-0 md:my-10 dark:bg-gray-700"></hr> */}
    </div>
  );
};

export default Home;
