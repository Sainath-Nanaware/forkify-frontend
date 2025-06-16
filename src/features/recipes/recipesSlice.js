import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRecipesWithMealType, getRandomRecipes, getRecipeDetails } from "../../api/apiRequests";

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
export const getAllRecipesWithMealTypeThunk = createAsyncThunk(
  "/allRecipes",
  async ({ page, limit,mealType }, { rejectWithValue }) => {
    try {
      console.log("in slice page and limit:", page, limit,mealType);
      const response = await getAllRecipesWithMealType(page, limit,mealType);
      console.log("all recipes data:", response.data.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRecipeDetailsThunk=createAsyncThunk("/recipeDetails",async(id)=>{
  try{
    const response=await getRecipeDetails(id)
    return response.data.data

  }catch(error){
      return rejectWithValue(error);
  }

})



const recipeSlice=createSlice({
    name:"recipes",
    initialState:{
        randomRecipesArray:[],
        allRecipesArray:[],
        singleRecipeDetails:{},
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
           //for get all recipes with mealType
           .addCase(getAllRecipesWithMealTypeThunk.pending, (state, action) => {
             state.loading = true;
           })
           .addCase(
             getAllRecipesWithMealTypeThunk.fulfilled,
             (state, action) => {
               state.loading = false;
               state.allRecipesArray = action.payload.recipes;
               state.totalRecipesCount = action.payload.totalRecipes;
               console.log(
                 "In slice all Recipes Array:",
                 state.allRecipesArray,
                 "totalRecipesCount:",
                 state.totalRecipesCount
               );
             }
           )
           .addCase(
             getAllRecipesWithMealTypeThunk.rejected,
             (state, action) => {
               state.loading = false;
               state.error = action.payload;
             }
           )
           //  for single recipe details
           .addCase(getRecipeDetailsThunk.pending, (state, action) => {
             state.loading = true;
           })
           .addCase(getRecipeDetailsThunk.fulfilled, (state, action) => {
             state.loading = false;
             state.singleRecipeDetails = action.payload;
           })
           .addCase(getRecipeDetailsThunk.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload;
           });
    }

})


export default recipeSlice.reducer