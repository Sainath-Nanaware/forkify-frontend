import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../api/apiRequests";
import { removeToken, setToken, setUserId } from "./authService";

export const login=createAsyncThunk("/login",async(credentials, { rejectWithValue })=>{
        try {
            console.log(credentials);
            const response=await loginUser(credentials)
            setToken(response.data.data.token)
            setUserId(response.data.data.id)
            // console.log(response.data);
            // console.log("token:",response.data.data.token);
            return response.data
        } catch (error) {
                return rejectWithValue(error);
        }

})

export const signUp = createAsyncThunk(
  "/register",
    async (credentials, thunkAPI) => {
      try {
        const response = await registerUser(credentials);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

export const logout=createAsyncThunk("/logout",async()=>{
    removeToken()
})


const authSlice=createSlice({
    name:"auth",
    initialState:{
        userRole:null, 
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
            // console.log("user role in slice:", action.payload.data.role);
            state.userRole = action.payload.data.role;
            console.log("user in slice",state.userRole);
            
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