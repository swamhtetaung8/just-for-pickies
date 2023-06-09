import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import {
  getAction,
  getAnimation,
  getComedy,
  getDrama,
  getHorror,
  getScienceFiction,
} from "../services/api";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const { data: actionData } = useQuery({
    queryKey: ["action"],
    queryFn: getAction,
  });
  const { data: animationData } = useQuery({
    queryKey: ["animation"],
    queryFn: getAnimation,
  });
  const { data: horrorData } = useQuery({
    queryKey: ["horror"],
    queryFn: getHorror,
  });
  const { data: dramaData } = useQuery({
    queryKey: ["drama"],
    queryFn: getDrama,
  });
  const { data: scienceFictionData } = useQuery({
    queryKey: ["science_fiction"],
    queryFn: getScienceFiction,
  });
  const { data: comedyData } = useQuery({
    queryKey: ["comedy"],
    queryFn: getComedy,
  });

  const [selected,setSelected] = useState();

  const data = {
    actionImage:
      actionData?.results[Math.floor(Math.random() * 20)].backdrop_path,
    animationImage:
      animationData?.results[Math.floor(Math.random() * 20)].backdrop_path,
    comedyImage:
      comedyData?.results[Math.floor(Math.random() * 20)].backdrop_path,
    horrorImage:
      horrorData?.results[Math.floor(Math.random() * 20)].backdrop_path,
    scienceFictionImage:
      scienceFictionData?.results[Math.floor(Math.random() * 20)].backdrop_path,
    dramaImage:
      dramaData?.results[Math.floor(Math.random() * 20)].backdrop_path,
      selected,
      setSelected
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;

export const useCustomMovieContext = () => useContext(MovieContext);
