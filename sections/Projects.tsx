import Card from "../components/Card";

const Projects = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">My Recent Projects</div>
      <div className="bg-gradient-to-bl from-cyan-500 to-blue-700 p-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-evenly leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
          <Card type="large" className={"bg-white"} name="Banorant" />
          <Card type="large" className={"bg-white"} name="Asdfghjkl" />
        </div>
      </div>
    </>
  );
};

export default Projects;
