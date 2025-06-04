import axios from "axios";
import { toast } from "react-toastify";
import { removeToken } from "../features/auth/authService";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
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

export default axiosClient;
