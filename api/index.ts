import axios from "axios";

const getApiHost = () => {
  const api = "http://localhost:4000";

  return api;
};

export const api = axios.create({
  baseURL: getApiHost(),
  withCredentials: true,
});

api.interceptors.request.use((request: any) => {
  const token = sessionStorage.getItem("token");

  if (!request.headers.Authorization) {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

export default api;
