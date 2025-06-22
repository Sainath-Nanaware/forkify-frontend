import axios from "axios";
import { toast } from "react-toastify";
import { removeToken } from "../features/auth/authService";

const axiosFormClient = axios.create({
  baseURL: "http://localhost:5000",
});

// ✅ Request interceptor: Remove Content-Type and add token
axiosFormClient.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"]; // browser will set it
    }

    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor (same as JSON)
axiosFormClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      removeToken();
      toast.error("Session expired. Please log in again.");
      window.location.href = "/login";
    }

    const message = error?.response?.data?.message || "Something went wrong";
    toast.error(message);
    return Promise.reject(message);
  }
);

export default axiosFormClient;
