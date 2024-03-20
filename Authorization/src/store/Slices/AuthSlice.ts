import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {
    id: "",
    roles: [],
    username: ""
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Authorize: (state, action) => {
    Authorize: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    // Unauthorize: (state, action) => {
    Unauthorize: (state) => {
      state.isLoggedIn = false;
      state.user = initialState.user
    },
  },
});


export const {Authorize, Unauthorize} = authSlice.actions
export type AuthType = typeof authSlice
export default authSlice.reducer;
