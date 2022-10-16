import Head from "next/head";
import Link from "next/link";

interface IHeaderProps {
  title?: string;
  description?: string;
}

const socialAccounts = [
  {
    href: "./about",
    name: "About me",
  },
  {
    href: "./skills",
    name: "Skills",
  },
  {
    href: "./projects",
    name: "Projects",
  },
  {
    href: "./experience",
    name: "Experience",
  },
  {
    href: "./certification",
    name: "Certifications",
  },
  {
    href: "./blog",
    name: "Blogs",
  },
  {
    href: "./contact",
    name: "Contact",
  },
];

const Header = ({ title, description }: IHeaderProps) => {
  console.log(title, description);
  return (
    <header className="h-20 z-50 bg-gray-50 fixed top-0 left-0 right-0">
      <div className="container mx-auto h-full w-full flex justify-between items-center py-8 px-6 md:px-12">
        <div className="text-left font-black text-lg text-gray-900 w-1/3">
          <Link href="./">{"<Chan />"}</Link>
        </div>
        <div className="text-right text-sm font-bold text-gray-700 w-2/3 flex justify-between">
          {socialAccounts.map((social, i) => {
            return (
              <Link key={social.name + i} href={social.href}>
                <a>{social.name}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
