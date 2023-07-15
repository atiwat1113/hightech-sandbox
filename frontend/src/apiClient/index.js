import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
});

/* Request interceptor for API calls */
apiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("authToken");

    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apiClient;
