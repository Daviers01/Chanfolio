import Image from "next/future/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="text-5xl font-bold pb-12">My Recent Projects</div>
      <div className="grid grid-cols-2 lg:flex-row gap-20 justify-around leading-7 text-xs lg:text-sm xl:text-base tracking-normal lg:tracking-wider xl:tracking-widest">
        <div className="flex flex-col hover:lg:scale-105 w-full transition-all">
          <div className="border-2 rounded-sm">
            <div className="p-2 bg-slate-50 rounded-sm">
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
            </div>
            <div className="">
              <Image
                className="mx-auto w-full h-full"
                src={"/preceptor-nest-site.png"}
                alt="My image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-4xl font-bold pt-8 pb-5">Preceptor Nest</div>
          <Link href="https://www.preceptornest.com/" target="_blank">
            <div className="cursor-pointer">Go to site &#8594;</div>
          </Link>
        </div>

        <div className="flex flex-col hover:lg:scale-105 w-full transition-all">
          <div className="border-2 rounded-sm">
            <div className="p-2 bg-slate-50 rounded-sm">
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
            </div>
            <div className="">
              <Image
                className="mx-auto w-full h-full"
                src={"/maatc-site.png"}
                alt="My image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-4xl font-bold pt-8 pb-5">MAATC Review</div>
          <Link href="https://www.npmaatcreview.com/" target="_blank">
            <div className="cursor-pointer">Go to site &#8594;</div>
          </Link>
        </div>

        <div className="flex flex-col hover:lg:scale-105 w-full transition-all">
          <div className="border-2 rounded-sm">
            <div className="p-2 bg-slate-50 rounded-sm">
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
            </div>
            <div className="">
              <Image
                className="mx-auto w-full h-full"
                src={"/abc-index.png"}
                alt="My image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-4xl font-bold pt-8 pb-5">ABC Company</div>
          <Link href="https://abc-company.azurewebsites.net/" target="_blank">
            <div className="cursor-pointer">Go to site &#8594;</div>
          </Link>
        </div>

        <div className="flex flex-col hover:lg:scale-105 w-full transition-all">
          <div className="border-2 rounded-sm">
            <div className="p-2 bg-slate-50 rounded-sm">
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
              <span className="h-2 w-2 bg-gray-600 rounded-full inline-block ml-2"></span>
            </div>
            <div className="">
              <Image
                className="mx-auto w-full h-full"
                src={"/banorant-agents.png"}
                alt="My image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-4xl font-bold pt-8 pb-5">Banorant Guides</div>
          <Link href="https://valorant-guide-pink.vercel.app/" target="_blank">
            <div className="cursor-pointer">Go to site &#8594;</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
