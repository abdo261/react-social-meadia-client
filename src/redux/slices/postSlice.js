import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const postActions = postSlice.actions
export const postReducer = postSlice.reducer