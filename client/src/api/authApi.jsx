import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const registerUser = async (userData) => {
  const { data } = await API.post("/register", userData);
  return data;
};

export const loginUser = async (userData) => {
  const { data } = await API.post("/login", userData);
  return data;
};
