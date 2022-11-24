import GotoCard from "../components/GotoCard";
import cx from "classnames";
import Image from "next/future/image";

const Contact = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">Let&#39;s work together</div>
      <div className="flex flex-col lg:flex-row gap-20 text-xl leading-snug tracking-normal font-medium">
        <p className="mb-20">
          I’m currently available for any website gigs or if you would like to
          discuss about a project that you need help, just drop me a message on
          my social accounts or via my personal email address at
          daviers01@gmail.com
        </p>
      </div>
      <div className="leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
        <GotoCard
          href={"mailto:daviers01@gmail.com"}
          className={cx(
            "group transition-all relative text-left bg-chan-gray hover:bg-transparent border-4 border-spacing-2 border-chan-gray border-solid py-4 px-4 lg:px-12 2xl:px-8 rounded-lg w-full"
          )}
        >
          <p className="transition-all text-xs text-chan-light group-hover:text-chan-gray">
            Send me an
          </p>
          <p className="text-xl lg:text-2xl text-chan-light group-hover:text-chan-gray font-bold">
            Email
          </p>
          <span className="transition-all text-chan-light group-hover:text-chan-gray text-3xl absolute bottom-5 right-7 group-hover:right-5 md:right-14 text-end">
            <Image
              className="w-auto xl:py-2 invert group-hover:invert-0"
              src={"/send-icon.png"}
              alt="Send email"
              width={20}
              height={20}
            />
          </span>
        </GotoCard>
      </div>
    </>
  );
};

export default Contact;
