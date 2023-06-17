import axios from "axios";

const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};
const API_URL = import.meta.env.VITE_API_URL;

export const signUpUser = async (email, password, nick) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, {
      email,
      password,
      nick,
    });
    return response.data;
  } catch (error) {
    throw new Error("회원가입 실패:", error.response.data);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("로그인 실패:", error.response.data);
  }
};

export const logoutUser = async () => {
  try {
    const login = await axios.get(`${API_URL}/user/verify`);
    if (login) {
      localStorage.removeItem("token");
      alert("로그아웃 성공!");
      return;
    } else throw new Error("로그인을 먼저 하세요");
  } catch (error) {
    throw new Error("로그아웃 실패:", error.response.data);
  }
};
