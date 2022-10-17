import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className='pb-8 '> <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p></div>
       
        <div className="grid grid-cols-2 md:grid-cols-3  gap-10 my-10  items-center">
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/js.png "
              className="w-20 bg-center ml-auto mr-auto "
              alt="js"
            ></img>
            <p className="text-center text-white my-4 mr-2"><a href="https://github.com/mskothari07/Module3_JavaScript">JAVASCRIPT</a></p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/mongo.png "
              className="w-20 bg-cover mx-auto"
              alt="java"
            ></img>
            <p className="text-center text-white my-4 "><a href="https://github.com/mskothari07/Module2_Db">MongoDb</a></p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/react.png "
              className="w-20 bg-cover mx-auto"
              alt="react"
            ></img>
            <p className="text-center text-white my-4"><a href=" https://github.com/mskothari07/Module4_React">React JS</a></p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/database.png "
              className="w-20 bg-cover mx-auto"
              alt="sql"
            ></img>
            <p className="text-center text-white my-4"><a href="https://github.com/mskothari07/Module2_Db">SQL</a></p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/html-5.png "
              className="w-20 bg-cover mx-auto"
              alt="html"
            ></img>
            <p className="text-center text-white my-4"><a href="https://github.com/mskothari07/Module-1">HTML 5</a></p>
          </div>
          <div className="shadow-lg shadow-[#040c16] px-6 py-6 hover:scale-110 ease-in-out duration-300">
            <img
              src="/css-3.png "
              className="w-20 bg-cover mx-auto"
              alt="css"
            ></img>
            <p className="text-center text-white my-4">CSS</p>
          </div>
          {/* <img src="/java.png " className="w-10"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;