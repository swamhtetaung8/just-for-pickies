import React, { useEffect, useState } from "react";
import MovieContextProvider from "./context/MovieContext";
import Home from "./pages/Home";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader } from "@mantine/core";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <MovieContextProvider>
        {
          loading ? (
            <div className="flex items-center justify-center w-full h-screen">
              <Loader size="xl" variant="dots" />
            </div>
          ):(
            <Home />
          )
        }
      </MovieContextProvider>
    </QueryClientProvider>
  );
};

export default App;
