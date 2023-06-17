import axios from "axios";

const API_URL = 'http://127.0.0.1:3000'; // API 엔드포인트 URL

export const joinUser = async (email, password, nick) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, {
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
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const logoutUser = async () => {
  try {
    const login = await axios.get(`${API_URL}/user/verify`);
    if(login)
    {
      localStorage.removeItem('token');
      alert('로그아웃 성공!');
      return ;
    }
    else
      throw new Error("로그인을 먼저 하세요")

  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

export const pokeDetail = async (id) => {
  try{
    const response = await axios.get(`${API_URL}/pokemon/dbidsearch?id=${id}`);
    return response.data;
  }catch(err){
    throw new Error("정보 가져오기 실패했습니다.")
  }
};
