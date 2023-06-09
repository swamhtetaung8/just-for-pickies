import { requests } from "./requests";

export const getAction = async () => {
  const api = await fetch(requests.requestAction);
  const data = await api.json();
  return data;
};
export const getAnimation = async () => {
  const api = await fetch(requests.requestAnimation);
  const data = await api.json();
  return data;
};
export const getDrama = async () => {
  const api = await fetch(requests.requestDrama);
  const data = await api.json();
  return data;
};
export const getComedy = async () => {
  const api = await fetch(requests.requestComedy);
  const data = await api.json();
  return data;
};
export const getHorror = async () => {
  const api = await fetch(requests.requestHorror);
  const data = await api.json();
  return data;
};
export const getScienceFiction = async () => {
  const api = await fetch(requests.requestScienceFiction);
  const data = await api.json();
  return data;
};
export const getGenerate = async (genreId) => {
  const api = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&with_genres=${genreId}`
  );
  const data = await api.json();
  return data;
};
export const getDetail = async (movieId) => {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await api.json();
  return data;
};
export const getVideo = async (movieId) => {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  const data = await api.json();
  return data;
};
