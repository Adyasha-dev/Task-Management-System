import axios from "axios";

export const API = axios.create({
  baseURL: "https://task-management-system-blond-nine.vercel.app/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
