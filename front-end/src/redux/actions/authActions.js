// src/redux/actions/authActions.js

import { LOGIN, LOGOUT } from "./actionTypes";

export const loginAction = () => {
  // 토큰 생성 및 로컬 스토리지에 저장
  const token = "your_token"; // 토큰 생성 로직 구현
  localStorage.setItem("token", token);

  return { type: LOGIN };
};

export const logoutAction = () => {
  // 로컬 스토리지에서 토큰 제거
  localStorage.removeItem("token");

  return { type: LOGOUT };
};
