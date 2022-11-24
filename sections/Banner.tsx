import Image from "next/future/image";

const Banner = () => {
  return (
    <>
      <div className="flex flex-row gap-10 h-full flex-wrap lg:flex-nowrap">
        <div className="flex-1 flex-grow self-center basis-1/3 justify-center items-center ">
          <Image
            className="mx-auto px-10 rounded-[100%]"
            src={"/me.png"}
            alt="My image"
            width={400}
            height={900}
          />
        </div>
        <div className="flex-1 flex flex-grow basis-2/3 justify-start items-center text-center lg:text-left">
          <h1 className="text-gray-900 font-bold text-3xl leading-snug md:text-4xl md:leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug 2xl:text-6xl 2xl:leading-snug">
            Hey there, I&#39;m Chan. <br className="block lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-blue-700">
              {" "}
              Web Developer
            </span>{" "}
            based in Philippines.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
