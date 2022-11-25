import Link from "next/link";

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
  return (
    <>
      <header className="h-20 z-50 w-full container mx-auto ">
        <div className=" h-full w-full flex justify-between items-center py-8 px-6">
          <div className="text-left font-black text-2xl text-gray-900">
            <Link href="./">chan.</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
