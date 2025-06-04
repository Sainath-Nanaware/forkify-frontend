import axiosClient from "./axiosClient";

// Auth APIs
export const loginUser = (data) => axiosClient.post("/user/login", data);
export const registerUser = (data) => axiosClient.post("/user/register", data);

// User APIs
export const getAllUsersInfo = () => axiosClient.get(`/admin/allUsers`);
export const getUsersInfoByRole = (role) => axiosClient.get(`/admin/user?role=${role}`);
export const deleteUser = (id) => axiosClient.delete(`/users/${id}`);

// Posts APIs
export const getPosts = () => axiosClient.get("/posts");
export const createPost = (data) => axiosClient.post("/posts", data);
export const updatePost = (id, data) => axiosClient.patch(`/posts/${id}`, data);
export const deletePost = (id) => axiosClient.delete(`/posts/${id}`);
