import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: null,
    loading: {
      create:false,
      list:false
    },
    error: null,
    errorValidation:null
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    addComment(state,action){
      state.posts = state.posts.map(p=>(p._id ===action.payload.id ? ({...p,comments:[...p.comments,action.payload.comment]}):(p)))
    },
    addPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost (state,action){
     state.posts =  state.posts.filter(p=>p._id!==action.payload)
    },
    setPost(state, action) {
      state.post = action.payload;
    },
    setLoadingList(state, action) {
      state.loading.list = action.payload;
    },
    setLoadingCreate(state, action) {
      state.loading.create = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setErrorValidation(state, action) {
      state.errorValidation = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
