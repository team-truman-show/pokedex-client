// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("token"), // localStorage에서 토큰이 존재하는지 확인
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;

export default authSlice.reducer;
