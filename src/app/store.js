import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import usersSlice from "../features/users/usersSlice";
import recipesSlice from "../features/recipes/recipesSlice";

export const store =configureStore({
    reducer:{
        auth:authSlice,
        users:usersSlice,
        recipes:recipesSlice,

    }

})