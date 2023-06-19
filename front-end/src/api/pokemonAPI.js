import axios from "axios";
import { API_URL, headers } from "/@/util/auth";

export const pokemonDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/dbidsearch?id=${id}`, {
      headers,
    });
    return response.data;
  } catch (err) {
    throw new Error("포켓몬 정보를 가져오는데 실패했습니다.");
  }
};

export const pokemonCatch = async (pokeid) => {
  try {
    const response = await axios.post(
      `${API_URL}/pokemon/catchpoke`,
      { pokeid },
      { headers }
    );
    return response.data;
  } catch (err) {
    throw new Error("포켓몬을 잡는데 실패했습니다.");
  }
};

export const pokemonSearch = async (pokename) => {
  try {
    const response = await axios.get(
      `${API_URL}/pokemon/namesearch?name=${pokename}`,
      { headers }
    );
    return response.data;
  } catch (err) {
    throw new Error("포켓몬 검색에 실패했습니다.");
  }
};

export const getPokemons = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(`${API_URL}/pokemon/page`, {
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("포켓몬 데이터를 가져오는데 실패했습니다.");
  }
};
