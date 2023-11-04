import axios from "axios";

const getApiHost = () => {
  const api = "http://localhost:4000";

  return api;
};

export const api = axios.create({
  baseURL: getApiHost(),
  withCredentials: true,
});

export default api;
