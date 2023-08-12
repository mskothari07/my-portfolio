import React from "react";
import PortfolioImg from "../assets/portfolio/portfolio.jpg";
import reflective from "../assets/portfolio/reflective.jpg";
import loginpage from "../assets/portfolio/loginpage.jpg";
import tempit from "../assets/portfolio/tempit.jpg";
import noteit from "../assets/portfolio/noteit.jpg";
import ecom from "../assets/portfolio/ecom.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PortfolioImg,
      href: "https://mskothari.netlify.app/",
      code: "https://github.com/mskothari07/my-portfolio",
    },
    {
      id: 2,
      src: tempit,
      href: "https://tempit.netlify.app/",
      code: "https://github.com/mskothari07/tempit",
    },
    {
      id: 3,
      src: loginpage,
      href: "https://github.com/mskothari07/login-page-desgin",
      code: "https://github.com/mskothari07/login-page-desgin",
    },
    {
      id: 4,
      src: noteit,
      href: "https://noteit-mern.netlify.app/",
      code: "https://github.com/mskothari07/noteIT_app",
    },
    {
      id: 5,
      src: reflective,
      href: "https://github.com/mskothari07/Reflective_journal",
      code: "https://github.com/mskothari07/Reflective_journal",
    },
    {
      id: 6,
      src: ecom,
      href: "https://github.com/mskothari07/ecom-using-redux-redux-saga",
      code: "https://github.com/mskothari07/ecom-using-redux-redux-saga",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" w-full  bg-gradient-to-b  from-gray-800  to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} class="button">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} class="button">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
