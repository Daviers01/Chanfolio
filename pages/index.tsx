import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Wrapper from "../components/Wrapper";
import Skills from "../sections/Skills";
import Experiences from "../sections/Experiences";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

const Home: NextPage = (props) => {
  return (
    <>
      <Header />
      <Wrapper type="banner">
        <Banner />
      </Wrapper>
      <Wrapper noline className={"pt-10"}>
        <About />
      </Wrapper>
      <Wrapper>
        <Skills />
      </Wrapper>
      <Wrapper noline type="footer">
        <Projects />
      </Wrapper>
      <Wrapper noline>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1 xl:basis-1/3">
            <Experiences />
          </div>

          <div className="flex-1 xl:basis-2/3">
            <Certifications />
          </div>
        </div>
      </Wrapper>
      <Wrapper type="footer">
        <Contact />
      </Wrapper>
    </>
  );
};

export default Home;
