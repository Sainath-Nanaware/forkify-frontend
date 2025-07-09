import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allSavedRecipe, getAllUsersInfo, getUsersInfoByRole } from "../../api/apiRequests";

export const getAllUsers=createAsyncThunk('/allUsers',async()=>{
    try{
        const response=await getAllUsersInfo()
        console.log(response);
        
        return response.data.data
    }catch(error){
        return rejectWithValue(error);
    }
})

export const  getUsersByRole=createAsyncThunk('/usersByRole',async(role)=>{
    try{
        console.log("role in slice:",role)
        const response=await getUsersInfoByRole(role)
         
        return response.data.data

    }catch(error){
        return rejectWithValue(error);

    }
})

export const getAllSavedRecipesThunk=createAsyncThunk('/allSavedRecipes',async(id)=>{
    try{
        console.log("get all saved recipe api call in slice userid:",id)
        const response=await allSavedRecipe(id)
        console.log("get all saved recipe api call in slice data:",response);
        return response.data.data
    }catch(error){
        return rejectWithValue(error);
    }

})

const users=createSlice({
    name:"users",
    initialState:{
        usersInfo:[],
        savedRecipes:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(getAllUsers.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(getAllUsers.fulfilled, (state, action) => {
            (state.loading = false), (state.usersInfo = action.payload);
            console.log(state.usersInfo);
          })
          .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          //get users info by role
          .addCase(getUsersByRole.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(getUsersByRole.fulfilled, (state, action) => {
            (state.loading = false), (state.usersInfo = action.payload);
            console.log("users slice userInfo:", state.usersInfo);
          })
          .addCase(getUsersByRole.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          //get all recipes saved by user
          .addCase(getAllSavedRecipesThunk.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(getAllSavedRecipesThunk.fulfilled, (state, action) => {
            (state.loading = false), (state.savedRecipes = action.payload);
            console.log("saved recipes in slice:",state.savedRecipes)
          })
          .addCase(getAllSavedRecipesThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
})

export default users.reducer