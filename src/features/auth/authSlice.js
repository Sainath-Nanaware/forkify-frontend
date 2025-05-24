import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api/apiRequests";
import { removeToken, setToken } from "./authService";

export const login=createAsyncThunk("/login",async(credentials, { rejectWithValue })=>{
        try {
            const response=await loginUser(credentials)
            setToken(response.data.token)
            return response.data
        } catch (error) {
                return rejectWithValue(error);
        }

})

export const logout=createAsyncThunk("/logout",async()=>{
    removeToken()
})


const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null, 
        token:null, 
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
          })
          .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(logout.fulfilled, (state) => {
            state.token = null;
            state.user = null;
          });
    }
})

export default authSlice.reducer;