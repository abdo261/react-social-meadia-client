import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
    addComments(state,action){
      state.comments = [...state.comments ,action.payload]
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const commentAction = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
