import Header from "./Header";
import Footer from "./Footer";

import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

function Wrapper(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="overflow-hidden relative">
      <Header />
      <main className="w-full h-full container mx-auto mt-20 mb-10 py-10 px-6 md:px-12 lg:px-24 xl:px-40">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Wrapper;
