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
