import type { NextPage } from "next";
import cx from "classnames";
import GotoCard from "../components/GotoCard";
import Image from "next/future/image";

const socialAccounts = [
  {
    href: "https://www.linkedin.com",
    name: "LINKEDIN.",
  },
  {
    href: "https://www.github.com",
    name: "GITHUB.",
  },
  {
    href: "https://www.github.com",
    name: "FACEBOOK.",
  },
];

const Contact: NextPage = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="relative w-full lg:px-8 pt-10 xl:pt-12 mt-12 md:mt-20">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          LET’S WORK TOGETHER!
        </h1>
        <div className="leading-7 text-chan-dark text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <div className="mt-10 lg:mt-10 py-10 px-2 lg:px-40 text-center leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
            <p>
              I’m currently available for any website gigs or if you would like
              to discuss about a project that you need help, just drop me a
              message on my social accounts or via my personal email address at
              daviers01@gmail.com
            </p>

            <div className="text-right text-lg font-black w-full flex flex-wrap justify-around p-5 my-10">
              {socialAccounts.map((social, i) => {
                return (
                  <a
                    key={social.name + i}
                    {...social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                );
              })}
            </div>

            <GotoCard
              href={"mailto:daviers01@gmail.com"}
              className={cx(
                "group transition-all relative text-left bg-chan-dark hover:bg-transparent border-4 border-spacing-2 border-chan-dark border-solid py-4 px-4 lg:px-12 2xl:px-8 rounded-lg w-full"
              )}
            >
              <p className="transition-all text-xs text-chan-light group-hover:text-chan-dark">
                Send me an
              </p>
              <p className="text-xl lg:text-2xl text-chan-light group-hover:text-chan-dark font-bold">
                Email
              </p>
              <span className="transition-all text-chan-light group-hover:text-chan-dark text-3xl absolute bottom-5 right-7 group-hover:right-5 md:right-14 text-end">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
