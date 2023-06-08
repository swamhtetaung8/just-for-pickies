export const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=27`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=28`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=16`,
  requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=18`,
  requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=878`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&with_genres=35`,
};
