import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlices/loginSlice";
import feedReducer from "./feedSlices/feedSlice";
import connectionsReducer from "./connections/connectionsSlice";
import requestsRducer from "./requests/requestsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestsRducer,
  },
});

export default appStore;
