import React from "react";
import { useCustomMovieContext } from "../context/MovieContext";

const MovieSelect = () => {
  const {
    actionImage,
    animationImage,
    dramaImage,
    comedyImage,
    scienceFictionImage,
    horrorImage,
  } = useCustomMovieContext();
  console.log(actionImage);
  const genres = [
    {
      name: "Action",
      genreId: 28,
      img: actionImage,
    },
    {
      name: "Animation",
      genreId: 16,
      img: animationImage,
    },
    {
      name: "Comedy",
      genreId: 35,
      img: comedyImage,
    },
    {
      name: "Drama",
      genreId: 18,
      img: dramaImage,
    },
    {
      name: "Horror",
      genreId: 27,
      img: horrorImage,
    },
    {
      name: "Science Fiction",
      genreId: 878,
      img: scienceFictionImage,
    },
  ];
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Choose your favorite genre
            </h2>

            <p className="mt-8 max-w-lg text-gray-500">
              Please select the genre you are most interested in or enjoy the
              most. We will automatically generate a movie of that genre.
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-600 px-5 py-3 font-medium text-pink-600 hover:bg-pink-600 hover:text-white sm:mt-0 lg:mt-8">
            Read all reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((genre) => (
            <blockquote
              key={genre.name}
              className="flex h-full flex-col justify-betweenp-7 rounded-lg relative overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/original${genre.img}`}
                className=""
                alt=""
              />
              <div className="absolute bg-gradient-to-tr from-black/80 to-transparent inset-0 z-[5]"></div>
              <div className="absolute inset-0 z-10 p-7 ">
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {genre.name}
                  </h3>
                </div>
                <button className=" mt-28 block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                  Generate
                </button>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSelect;
