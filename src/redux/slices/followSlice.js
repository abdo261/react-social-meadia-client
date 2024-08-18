import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
    name:"follow" ,
    initialState:{
        followers:[],
        following:[],
        loading:{
            list:false,
            create:false
        },
        error:null
    },
reducers:{
    setFollowers(state,action){
        state.followers = action.payload
    },
    setLoadingList(state,action){
        state.loading.list = action.payload
    },
    setError(state,action){
        state.error = action.payload
    },
}})

export const followActions = followSlice.actions
export const followReducer = followSlice.reducer