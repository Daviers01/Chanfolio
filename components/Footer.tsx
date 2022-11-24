import GotoCard from "../components/GotoCard";
import cx from "classnames";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";

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
      <div
        className={cx(
          "h-26 pb-10 px-4 w-full container mx-auto relative bottom-0 right-0 left-0 flex flex-row",
          next && prev ? "block" : "hidden"
        )}
      >
        {prev && (
          <GotoCard
            to={prev.link}
            className={cx(
              "mt-2 group transition-all relative text-right bg-chan-gray hover:bg-transparent border-4 border-spacing-2 border-chan-gray border-solid py-3 px-4 lg:px-8 rounded-lg",
              next ? "w-full md:w-1/2 mx-2" : "w-auto"
            )}
          >
            <p className="transition-all text-xs text-chan-light group-hover:text-chan-gray">
              Go back
            </p>
            <p className="text-xl lg:text-2xl text-chan-light group-hover:text-chan-gray font-bold">
              {prev.name}
            </p>
            <span className="transition-all text-chan-light group-hover:text-chan-gray text-3xl absolute bottom-7 lg:bottom-5 left-7 group-hover:left-5 md:left-14 text-end">
              &#8592;
            </span>
          </GotoCard>
        )}

        {next && (
          <GotoCard
            to={next.link}
            className={cx(
              "mt-2 group transition-all relative text-left bg-chan-gray hover:bg-transparent border-4 border-spacing-2 border-chan-gray border-solid py-3 px-4 lg:px-8 rounded-lg",
              prev ? "w-full md:w-1/2 mx-2" : "w-full"
            )}
          >
            <p className="transition-all text-xs text-chan-light group-hover:text-chan-gray">
              Go to
            </p>
            <p className="text-xl lg:text-2xl text-chan-light group-hover:text-chan-gray font-bold">
              {next.name}
            </p>
            <span className="transition-all text-chan-light group-hover:text-chan-gray text-3xl absolute bottom-7 lg:bottom-5 right-7 group-hover:right-5 md:right-14 text-end">
              &#8594;
            </span>
          </GotoCard>
        )}
      </div>

      <div className="h-2 fixed bottom-0 left-0 right-0 z-50 bg-chan-gray"></div>
      <div className="w-2 fixed top-0 left-0 bottom-0 z-50 bg-chan-gray"></div>
      <div className="w-2 fixed top-0 right-0 bottom-0 z-50 bg-chan-gray"></div>
    </>
  );
};

export default Footer;
