import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieSelect from "../components/MovieSelect";
import { Loader } from "@mantine/core";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <main className="bg-gray-50">
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Loader size="xl" variant="dots" />
        </div>
      ) : (
        <>
          <Hero />
          <MovieSelect />
        </>
      )}
    </main>
  );
};

export default Home;
