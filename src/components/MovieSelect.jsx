import React, { useState } from "react";
import { useCustomMovieContext } from "../context/MovieContext";
import { useDisclosure } from "@mantine/hooks";
import { Loader, Modal, useMantineTheme } from "@mantine/core";
import { getDetail, getGenerate, getVideo } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const MovieSelect = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useMantineTheme();
  const {
    actionImage,
    animationImage,
    dramaImage,
    comedyImage,
    scienceFictionImage,
    horrorImage,
    selected,
    setSelected,
    selectedVideo,
    setSelectedVideo,
  } = useCustomMovieContext();
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

  const handleGenerate = async (genreId) => {
    open();
    setIsLoading(true);
    const { results } = await getGenerate(genreId);
    setSelected(results[Math.floor(Math.random() * results.length)]);

    setIsLoading(false);
  };

  const handleTrailer = async (movieId) => {
    const data = await getVideo(movieId);
    window.location = `https://www.youtube.com/watch?v=${data.results[0]?.key}`;
  };

  console.log(selectedVideo);

  return (
    <section name="get_started" className="bg-gray-100">
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Choose your favorite genre
            </h2>

            <p className="max-w-lg mt-8 text-gray-500">
              Please select the genre you are most interested in or enjoy the
              most. We will automatically generate a movie of that genre.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((genre) => (
            <blockquote
              key={genre.name}
              className="relative flex flex-col h-full overflow-hidden rounded-lg justify-betweenp-7">
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
                <button
                  onClick={() => handleGenerate(genre.genreId)}
                  className="block w-full px-12 py-3 mt-16 text-sm font-medium text-white bg-red-600 rounded shadow lg:mt-28 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                  Generate
                </button>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
      <Modal opened={opened} fullScreen onClose={close} withCloseButton={true}>
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-screen">
            <Loader size="xl" variant="dots" />
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <img
              src={`https://image.tmdb.org/t/p/original${selected?.poster_path}`}
              alt=""
              className="lg:w-[50%] w-full object-contain max-h-[60vh]"
            />
            <div className="flex flex-col space-y-5 ">
              <h1 className="text-3xl font-extrabold text-red-700 sm:text-5xl sm:block">
                {selected?.title}
              </h1>
              <h3 className="text-xl font-light text-gray-800">
                {selected?.release_date}
              </h3>
              <p>{selected?.overview}</p>

              <button
                className="self-start px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow mt-28 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                onClick={() => handleTrailer(selected?.id)}>
                {" "}
                Watch Trailer
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default MovieSelect;
