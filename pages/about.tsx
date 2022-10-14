import type { NextPage } from "next";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/hello");

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: await res.json(),
    },
  };
}

const About: NextPage = (props) => {
  console.log(props);
  return <>About</>;
};

export default About;
