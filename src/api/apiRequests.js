import axiosClient from "./axiosClient";

// Auth APIs
export const loginUser = (data) => axiosClient.post("/user/login", data);
export const registerUser = (data) => axiosClient.post("/user/register", data);

// User APIs
export const getAllUsersInfo = () => axiosClient.get(`/admin/allUsers`);
export const getUsersInfoByRole = (role) => axiosClient.get(`/admin/user?role=${role}`);
export const deleteUser = (id) => axiosClient.delete(`/users/${id}`);

// Recipes APIs
export const getAllRecipes = (page,limit) => axiosClient.get(`/recipe?page=${page}&limit=${limit}`);
export const getAllRecipesWithMealType = (page, limit, mealType) =>
  axiosClient.get(
    `/recipe/mealRecipes/recipe?mealType=${mealType}&page=${page}&limit=${limit}`
  );
  export const getRandomRecipes = (limit) =>
    axiosClient.get(`/recipe/demoRecipes/${limit}`);
  export const getRecipeDetails = (id) =>
    axiosClient.get(`recipe/${id}`);


export const createPost = (data) => axiosClient.post("/posts", data);
export const updatePost = (id, data) => axiosClient.patch(`/posts/${id}`, data);
export const deletePost = (id) => axiosClient.delete(`/posts/${id}`);
