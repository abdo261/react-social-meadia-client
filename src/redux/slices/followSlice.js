import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
    name:"follow" ,
    initialState:{
        followers:[],
        following:[],
        loading:false,
        error:null
    },
reducers:{
    setFollowers(state,action){
        state.followers = action.payload
    },
    setLoading(state,action){
        state.loading = action.payload
    },
    setError(state,action){
        state.error = action.payload
    },
}})

export const followActions = followSlice.actions
export const followReducer = followSlice.reducer