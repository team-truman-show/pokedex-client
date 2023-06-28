import axios from 'axios';
import {
  API_URL,
  // headers
} from '../util/auth';

const token = localStorage.getItem('token');
const headers = {
  Authorization: `Bearer ${token}`,
};

export const pokemonDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/dbidsearch?id=${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    // throw new Error("포켓몬 정보를 가져오는데 실패했습니다.");
    throw new Error(error.response.data.error);
  }
};

export const pokemonCatch = async (pokeid) => {
  try {
    const response = await axios.post(
      `${API_URL}/mypokemon/catchpoke`,
      { pokeid },
      { headers }
    );

    return response.data;
  } catch (error) {
    // throw new Error("포켓몬을 잡는데 실패했습니다.");
    throw new Error(error.response.data.error);
  }
};

export const pokemonSearch = async (pokename) => {
  try {
    const response = await axios.get(
      `${API_URL}/pokemon/namesearch?name=${pokename}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    // throw new Error("포켓몬 검색에 실패했습니다.");
    throw new Error(error.response.data.error);
  }
};

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/page`, {
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    // throw new Error("포켓몬 데이터를 가져오는데 실패했습니다.");
    throw new Error(error.response.data.error);
  }
};

export const pokeStatus = async (pokeid) => {
  try {
    const response = await axios.get(
      `${API_URL}/myPokemon/bringUp?pokeid=${pokeid}`,
      {
        headers,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const pokeCleanliness = async (pokeid, cleanliness) => {
  try {
    const response = await axios.fetch(
      `${API_URL}/myPokemon/cleanliness`,
      { pokeid },
      { cleanliness },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const pokeMomentum = async (pokeid, momentum) => {
  try {
    const response = await axios.fetch(
      `${API_URL}/myPokemon/momentum`,
      { pokeid },
      { momentum },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const pokeSatitety = async (pokeid, satitety) => {
  try {
    const response = await axios.fetch(
      `${API_URL}/myPokemon/satitety`,
      { pokeid },
      { satitety },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
