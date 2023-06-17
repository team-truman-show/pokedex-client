import axios from "axios";

const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};
const API_URL = import.meta.env.VITE_API_URL;

export const pokeDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/dbidsearch?id=${id}`, {
      headers,
    });
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};

export const pokeCatch = async (pokeid) => {
  try {
    const response = await axios.post(
      `${API_URL}/pokemon/catchpoke`,
      { pokeid },
      { headers }
    );
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};

export const myInfoFetch = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/myinformation`, {
      headers,
    });
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};

export const myPoketFetch = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/mypokemon`, { headers });
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};

export const pokeSearch = async (pokename) => {
  try {
    const response = await axios.get(
      `${API_URL}/pokemon/namesearch?name=${pokename}`,
      { headers }
    );
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};

export const pwchange = async (email, nick, newPassword) => {
  try {
    const response = await axios.patch(`${API_URL}/user/pwchange`, {
      email,
      nick,
      newPassword,
    });
    return response.data;
  } catch (err) {
    throw new Error("정보를 가져오기 실패했습니다.");
  }
};
