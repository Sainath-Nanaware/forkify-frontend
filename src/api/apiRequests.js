import axiosClient from "./axiosClient";

// Auth APIs
export const loginUser = (data) => axiosClient.post("/auth/login", data);
export const registerUser = (data) => axiosClient.post("/auth/register", data);

// User APIs
export const getUser = (id) => axiosClient.get(`/users/${id}`);
export const updateUser = (id, data) => axiosClient.patch(`/users/${id}`, data);
export const deleteUser = (id) => axiosClient.delete(`/users/${id}`);

// Posts APIs
export const getPosts = () => axiosClient.get("/posts");
export const createPost = (data) => axiosClient.post("/posts", data);
export const updatePost = (id, data) => axiosClient.patch(`/posts/${id}`, data);
export const deletePost = (id) => axiosClient.delete(`/posts/${id}`);
