import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    userData: null,
  },
  reducers: {
    requestLogin: (state) => {
      state.isLoading = true;
    },
    addUser: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addUser, requestLogin } = loginSlice.actions;
export default loginSlice.reducer;
