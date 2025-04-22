import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlices/loginSlice";
import feedReducer from "./feedSlices/feedSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

export default appStore;
