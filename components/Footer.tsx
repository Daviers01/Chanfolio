import GotoCard from "../components/GotoCard";
import cx from "classnames";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const current = routes.find((route) => route.link === router.route);
  const prev = current
    ? routes.find((route) => route.order == current.order - 1)
    : null;
  const next = current
    ? routes.find((route) => route.order == current.order + 1)
    : null;

  return (
    <>
      <footer className="h-20 z-50 container mx-auto absolute bottom-0 left-0 right-0">
        <div className=" h-full w-full flex justify-between items-center py-8 px-6">
          <div className="text-left font-black text-2xl text-gray-900">
            <Link href="./">chan.</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
