import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/postSlice";
import { followReducer } from "./slices/followSlice";
import { commentReducer } from "./slices/commentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    follow: followReducer,
    comment: commentReducer,
  },
});

export default store;
