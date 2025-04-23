import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload;
    },
  },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
