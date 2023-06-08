import React from "react";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Unlock Movie Magic
            </h2>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-red-700 sm:block">
              Discover Endless Surprises for Picky Viewers!
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Developed by a couple from Myanmar.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                Get Started
              </button>

              <button className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
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
