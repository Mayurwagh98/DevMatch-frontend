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
      state.isLoading = false;
    },
    removeUserFromFeed: (state, action) => {
      const newFeed = state.feed.filter((user) => user._id !== action.payload);
      state.feed = newFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
