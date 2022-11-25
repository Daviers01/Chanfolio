import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import cx from "classnames";
import Image from "next/future/image";

type WrapperType = "banner" | "content" | "footer";

interface Wrapper {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  type?: WrapperType;
  noline?: boolean;
  className?: any;
}

function Wrapper({ type = "content", noline, children, className }: Wrapper) {
  return (
    <div
      className={cx(
        "overflow-hidden relative",
        type === "footer" ? "bg-[#f0f0f0]" : "transparent"
      )}
    >
      {type === "content" && !noline && (
        <Image
          className="mx-auto h-24 w-80"
          src={"/line.svg"}
          alt="My image"
          width={20}
          height={20}
        />
      )}
      <main
        className={cx(
          "w-full container mx-auto",
          type === "banner"
            ? "mt-20 mb-0 py-20 px-6 md:px-12 lg:px-24 xl:px-40"
            : "mt-0 mb-0 py-20 px-6 md:px-12 lg:px-24 xl:px-40",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default Wrapper;
