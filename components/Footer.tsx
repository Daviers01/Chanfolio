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
    <footer className="container px-20 mx-auto bg-gray-50 py-8 fixed bottom-0 left-0 right-0 flex justify-between">
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
    </footer>
  );
};

export default Footer;
