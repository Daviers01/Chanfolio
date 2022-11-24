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
      {/* <div className="text-right text-sm font-bold text-chan-gray hidden lg:flex flex-col justify-center fixed -top-0 left-4 bottom-0 w-30 h-full">
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
      </div> */}
      <header className="h-20 z-50 absolute top-0 left-0 right-0">
        <div className="container mx-auto h-full w-full flex justify-between items-center py-8 px-6">
          <div className="text-left font-black text-2xl text-gray-900">
            <Link href="./">chan.</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
