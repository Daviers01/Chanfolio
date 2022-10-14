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
    <div>
      <Header />
      <main className="container mx-auto">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Wrapper;
