import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieSelect from "../components/MovieSelect";
import { Loader } from "@mantine/core";

const Home = () => {
  
  return (
    <main className="bg-gray-50">
      
          <Hero />
          <MovieSelect />
    
    </main>
  );
};

export default Home;
