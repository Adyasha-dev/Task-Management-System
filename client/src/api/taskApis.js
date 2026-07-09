import { API } from "./axios";

export const createTask = async (taskData) => {
  const { data } = await API.post("/tasks/createTask", taskData);
  return data;
};

export const getTasks = async () => {
  const { data } = await API.get("/tasks/getTasks");
  return data;
};

export const getTask = async (id) => {
  const { data } = await API.get(`/tasks/getTask/${id}`);
  return data;
};

export const updateTask = async (id, taskData) => {
  const { data } = await API.put(`/tasks/${id}`, taskData);
  return data;
};

export const changeTaskStatus = async (id, statusData) => {
  const { data } = await API.patch(`/tasks/${id}/status`, statusData);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await API.delete(`/tasks/${id}`);
  return data;
};
