import { createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
  name: "auth",
  initialState: {
    user_info: localStorage.getItem("user_info")
      ? JSON.parse(localStorage.getItem("user_info"))
      : null,
    error: null,
    loading: false,
  },
  reducers: {
    loginUser(state, action) {
      state.user_info = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logoutUser(state) {
      state.user_info = null;
    },
  },
});

export const authReducer = authSLice.reducer;
export const authActions = authSLice.actions;
