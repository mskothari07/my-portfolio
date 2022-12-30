import React from 'react';
import heroImage from '../assets/heroImage.png';
import{MdOutlineKeyboardArrowRight} from "react-icons/md";



const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-5xl font-bold text-white mt-12">
            I'm Cloud Application Devloper at 
            Blazeclan Technologies
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
           Working on different cloud technologies and serving in digital service unit of Blazeclan Technologies
          </p>

          <div>
            <a 
              href="/resume.pdf"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              download
            >
              Get my Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
