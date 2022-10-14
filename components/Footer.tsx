import Image from "next/image";

const socialAccounts = [
  {
    href: "https://www.linkedin.com",
    name: "LinkedIn.",
  },
  {
    href: "https://www.github.com",
    name: "Github.",
  },
  {
    href: "mailto:daviers01@gmail.com",
    name: "Daviers01@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="h-20 z-50 bg-gray-50">
      <div className="container mx-auto h-full w-full flex justify-between items-center py-8 px-6 md:px-12">
        <div className="text-left text-sm text-gray-700 w-2/3">
          <p>This site was built from scratch using NextJS.</p>
        </div>
        <div className="text-right text-sm font-bold text-gray-700 w-1/3 flex justify-between">
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
      </div>
    </footer>
  );
};

export default Footer;
