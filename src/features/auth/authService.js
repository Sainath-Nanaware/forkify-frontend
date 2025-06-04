import axiosClient from "../../api/axiosClient";

const TOKEN_KEY = "token";

export const setToken = (token) => {
  console.log(token);
  localStorage.setItem(TOKEN_KEY, token);
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  delete axiosClient.defaults.headers.common["Authorization"];
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
