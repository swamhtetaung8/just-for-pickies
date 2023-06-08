import React from "react";
import Hero from "../components/Hero";
import MovieSelect from "../components/MovieSelect";

const Home = () => {
  return (
    <main className="bg-gray-50">
      <Hero />
      <MovieSelect />
    </main>
  );
};

export default Home;
