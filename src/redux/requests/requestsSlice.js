import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: {
    requests: null,
    requestsLoader: false,
  },
  reducers: {
    requestConnectionRequests: (state) => {
      state.requestsLoader = true;
    },
    addConnectionRequests: (state, action) => {
      state.requests = action.payload;
      state.requestsLoader = false;
    },
    removeRequest: (state, action) => {
      const newArray = state.requests.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const {
  addConnectionRequests,
  requestConnectionRequests,
  removeRequest,
} = requestsSlice.actions;
export default requestsSlice.reducer;
