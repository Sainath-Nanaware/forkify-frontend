import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRecipes, getRandomRecipes } from "../../api/apiRequests";

export const getRandomRecipesThunk=createAsyncThunk('/allRecipes',async(limit)=>{
    try{
        console.log(limit)
        const response=await getRandomRecipes(limit)
        console.log("all recipe data:",response.data.data)
        return response.data.data

    }catch(error){
        return rejectWithValue(error);
    }
})



const recipeSlice=createSlice({
    name:"recipes",
    initialState:{
        randomRecipesArray:[],
        error:null,
        loading:false,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
         builder
           .addCase(getRandomRecipesThunk.pending, (state, action) => {
             state.loading = true;
           })
           .addCase(getRandomRecipesThunk.fulfilled, (state, action) => {
             state.loading = false;
             state.randomRecipesArray = action.payload;
           })
           .addCase(getRandomRecipesThunk.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
           });
    }

})


export default recipeSlice.reducer