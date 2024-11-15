import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hello, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Anzel Acharya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I enjoy building sites & apps. My Focus is React(TypeScript). Soon
          will be learning Next.js. Until please explore around.
        </p>
        <div className="flex space-x-4">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
            Download CV
            <span className="ml-2 group-hover:scale-110 duration-300">
              <IoMdDownload />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
