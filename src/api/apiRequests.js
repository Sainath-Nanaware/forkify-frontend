import axiosClient from "./axiosClient";
import axiosFormClient from "./axiosFormClient";

// Auth APIs
export const loginUser = (data) => axiosClient.post("/user/login", data);
export const registerUser = (data) => axiosClient.post("/user/register", data);

// User APIs
export const getAllUsersInfo = () => axiosClient.get(`/admin/allUsers`);
export const getUsersInfoByRole = (role) => axiosClient.get(`/admin/user?role=${role}`);
export const deleteUser = (id) => axiosClient.delete(`/users/${id}`);
export const saveRecipe = (data) => axiosClient.post(`user/savedRecipe`,data);
export const allSavedRecipe=(id)=>axiosClient.get(`user/savedRecipes/${id}`)
export const removeSavedRecipe = (userId, recipeId) =>axiosClient.delete(`user/saved-recipe/${userId}/${recipeId}`);

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

export const createRecipe = (formData) => axiosFormClient.post("/recipe/", formData);
export const getRecipesByChefID = (page, limit,id) =>
  axiosClient.get(
    `/recipe/all/chefRecipes?chefId=${id}&page=${page}&limit=${limit}`
  );
export const deleteRecipe=(id)=>axiosClient.delete(`/recipe/${id}`)


export const updatePost = (id, data) => axiosClient.patch(`/posts/${id}`, data);
export const deletePost = (id) => axiosClient.delete(`/posts/${id}`);
