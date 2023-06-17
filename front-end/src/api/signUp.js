import axios from "axios";

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
