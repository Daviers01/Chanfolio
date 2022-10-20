import Link from "next/link";
import Image from "next/future/image";
import { routes } from "../utils/routes";
import { useState } from "react";
import classNames from "classnames";

const socialAccounts = [
  {
    href: "https://www.linkedin.com/in/daviers01/",
    name: "Linkedin",
    src: "/linkedin.svg",
  },
  {
    href: "https://www.instagram.com/daviers01/",
    name: "Instagram",
    src: "/instagram.svg",
  },
  {
    href: "https://www.facebook.com/pogilangdiperfect/",
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    href: "https://github.com/Daviers01",
    name: "Github",
    src: "/github.svg",
  },
];

interface IHeaderProps {
  title?: string;
  description?: string;
}

const Header = (props: IHeaderProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const toggleMenu = () => {
    setIsMenuToggled((s) => !s);
  };

  return (
    <>
      <div className="text-right text-sm font-bold text-gray-700 hidden lg:flex flex-col justify-center fixed -top-0 left-4 bottom-0 w-30 h-full">
        {socialAccounts.map((social, i) => {
          return (
            <Link key={social.name + i} href={social.href} target="_blank">
              <Image
                className="mx-2 my-2 cursor-pointer ring-0 ring-gray-600 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 rounded-full"
                src={social.src}
                alt={social.name}
                width={40}
                height={40}
              />
            </Link>
          );
        })}
      </div>
      <header className="h-20 z-50 fixed top-0 left-0 right-0 bg-chan-dark">
        <div className="container mx-auto h-full w-full flex justify-between items-center py-8 px-6">
          <div className="text-left font-black text-lg text-gray-900 w-1/5 xl:w-3/5">
            <Link href="./">
              <div className="cursor-pointer">
                <span className="bg-chan-light px-3 py-2 font-black text-chan-dark rounded-md">
                  cl.
                </span>
                <span className="pl-2 tracking-widest font-bold text-chan-light hidden xl:inline">
                  christian laurente
                </span>
              </div>
            </Link>
          </div>

          <div className="w-4/5 xl:w-2/5 h-full relative overflow-hidden">
            <div
              className={classNames(
                "text-right text-xs md:text-sm font-normal w-full tracking-widest text-chan-light opacity-95 flex justify-between absolute transition-transform duration-100 translate-x-0",
                !isMenuToggled && "translate-x-[900px]"
              )}
            >
              {routes.map((route, i) => {
                return (
                  <Link key={route.name + i} href={route.link}>
                    <a className="px-2">{route.name}</a>
                  </Link>
                );
              })}
            </div>
          </div>

          <button className="relative group" onClick={toggleMenu}>
            <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all ">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={classNames(
                    "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
                    isMenuToggled && "rotate-[42deg]"
                  )}
                ></div>
                <div
                  className={classNames(
                    "bg-white h-[2px] w-1/2 rounded transform transition-all duration-300",
                    isMenuToggled && "-translate-x-10"
                  )}
                ></div>
                <div
                  className={classNames(
                    "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
                    isMenuToggled && "-rotate-[42deg]"
                  )}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
