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
  },
});

export const { addConnectionRequests, requestConnectionRequests } =
  requestsSlice.actions;
export default requestsSlice.reducer;
