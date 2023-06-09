import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Unlock Movie Magic
            </h2>
            <h1 className="text-3xl font-extrabold text-red-700 sm:text-5xl sm:block">
              Discover Endless Surprises for Picky Viewers!
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Developed by a couple from Myanmar.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="get_started" smooth={500} className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow cursor-pointer hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                Get Started
              </Link>

              <button className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
