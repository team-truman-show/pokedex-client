import axios from "axios";
import {
  API_URL,
  // headers
} from "../util/auth";

//포켓몬 세부정보
export const pokemonDetail = async (id) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
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
//포켓몬 잡기
export const pokemonCatch = async (pokeid) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
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
//포켓몬 이름으로 찾기
export const pokemonSearch = async (pokename) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
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
//전체 포켓몬
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
    // throw new Error("포켓몬 데이터를 가져오는데 실패했습니다.");
    throw new Error(error.response.data.error);
  }
};
//육성페이지
export const pokeStatus = async (pokeid) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${API_URL}/myPokemon/bringUp?id=${pokeid}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

//포만도
export const pokeFull = async (mypokeid, full) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.patch(
      `${API_URL}/bringup/full`,
      { mypokeid, full },
      { headers }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
//친밀도
export const pokeIntimate = async (mypokeid, intimate) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.patch(
      `${API_URL}/bringup/intimate`,
      { mypokeid, intimate },

      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
//청결도
export const pokeClean = async (mypokeid, clean) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.patch(
      `${API_URL}/bringup/clean`,
      { mypokeid, clean },
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const pokeEvolve = async (mypokeid, pokeid) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${API_URL}/pokemon/evolve?mypokeid=${mypokeid}&pokeid=${pokeid}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
