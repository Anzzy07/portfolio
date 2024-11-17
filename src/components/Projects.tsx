import Khojkhaz from "../assets/images/khojkhaz.jpg";
import Movie from "../assets/images/movierating.png";
import Job from "../assets/images/joblisting.png";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-6">// Check out my recents projects</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Khojkhaz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React Native App - Khojkhaz Real Estate
              </span>

              <div className="pt-8 text-center ">
                <a href="https://github.com/Anzzy07/KhojkhazApp">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React(TypeScript) - Movie Rating
              </span>

              <div className="pt-8 text-center ">
                <a href="https://ratingmovies10.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Anzzy07/rating-movie">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Job})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React(JavaScript) - Job-Listing
              </span>

              <div className="pt-8 text-center ">
                <a href="https://jobslisting01.netlify.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Anzzy07/job-listing">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
