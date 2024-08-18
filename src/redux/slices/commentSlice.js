import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: {
      create: false,
      list: false,
    },
    error: null,
    errorValidation: null,
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
    addComments(state, action) {
      state.comments = [...state.comments, action.payload];
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

export const commentAction = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
