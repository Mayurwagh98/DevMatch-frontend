import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlices/loginSlice";
import feedReducer from "./feedSlices/feedSlice";
import connectionsReducer from "./connections/connectionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
  },
});

export default appStore;
