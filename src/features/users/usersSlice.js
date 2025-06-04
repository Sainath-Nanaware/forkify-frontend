import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersInfo, getUsersInfoByRole } from "../../api/apiRequests";

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

const users=createSlice({
    name:"users",
    initialState:{
        usersInfo:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getAllUsers.fulfilled,(state, action)=>{
            state.loading=false,
            state.usersInfo=action.payload
            console.log(state.usersInfo);   
        })
        .addCase(getAllUsers.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        //get users info by role
        .addCase(getUsersByRole.pending, (state, action) => {
          state.loading = true;
        })
          .addCase(getUsersByRole.fulfilled, (state, action) => {
            (state.loading = false), (state.usersInfo = action.payload);
            console.log("users slice userInfo:",state.usersInfo);
          })
          .addCase(getUsersByRole.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
})

export default users.reducer