import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    userData: null,
    loginError: null,
  },
  reducers: {
    requestLogin: (state) => {
      state.isLoading = true;
    },
    addUser: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.userData = null;
    },
    addLoginError: (state, action) => {
      state.loginError = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addUser, requestLogin, removeUser, addLoginError } =
  loginSlice.actions;
export default loginSlice.reducer;
