import React from "react";
import MovieContextProvider from "./context/MovieContext";
import Home from "./pages/Home";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieContextProvider>
        <Home />
      </MovieContextProvider>
    </QueryClientProvider>
  );
};

export default App;
