import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRecipes, getRandomRecipes } from "../../api/apiRequests";

export const getRandomRecipesThunk=createAsyncThunk('/randomRecipes',async(limit)=>{
    try{
        // console.log(limit)
        const response=await getRandomRecipes(limit)
        // console.log("all random recipe data:",response.data.data)
        return response.data.data

    }catch(error){
        return rejectWithValue(error);
    }
})

//createAsyncThunk only passes a single argument (usually called payload) to the async function — not multiple parameters directly then we wrap page snd limit in single object.
export const getAllRecipesThunk = createAsyncThunk(
  "/allRecipes",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      console.log("in slice page and limit:", page, limit);
      const response = await getAllRecipes(page, limit);
      console.log("all recipes data:", response.data.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



const recipeSlice=createSlice({
    name:"recipes",
    initialState:{
        randomRecipesArray:[],
        allRecipesArray:[],
        totalRecipesCount:0,
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
           })
           //for get all recipes
           .addCase(getAllRecipesThunk.pending, (state, action) => {
             state.loading = true;
           })
           .addCase(getAllRecipesThunk.fulfilled, (state, action) => {
             state.loading = false;
             state.allRecipesArray = action.payload.recipes;
             state.totalRecipesCount = action.payload.totalRecipes;
             console.log(
               "In slice all Recipes Array:",
               state.allRecipesArray,
               "totalRecipesCount:",
               state.totalRecipesCount
             );
           })
           .addCase(getAllRecipesThunk.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
           });
    }

})


export default recipeSlice.reducer