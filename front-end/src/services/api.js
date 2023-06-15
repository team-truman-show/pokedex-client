import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // API 엔드포인트 URL

export const joinUser = async (email, password, nick) => {
  try {
    const response = await axios.post(`${API_URL}/user/join`, {
      email,
      password,
      nick,
    });
    return response.data;
  } catch (error) {
    throw new Error("회원가입에 실패했습니다.");
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
};

// export const logoutUser = async () => {
//   try {
//     const response = await axios.post(`${API_URL}/logout`);
//     return response.data;
//   } catch (error) {
//     throw new Error("로그아웃에 실패했습니다.");
//   }
// };
