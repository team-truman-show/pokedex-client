import { useState, useEffect } from "react";
import { pokemonDetail } from "../../api/pokemonAPI";
import { myInfoFetch, myPokeFetch } from "../../api/userAPI";
import MyInfo from "./MyInfo";
import MyPokemons from "./MyPokemons";
import { Subtitle } from "../../styles/myPage.style";

const Mypage = () => {
  const [myInfo, setMyInfo] = useState("");
  const [myPokemons, setMyPokemons] = useState([]);
  const [myPokeData, setMyPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myData = await myInfoFetch();
        setMyInfo(myData);
        const myPokes = await myPokeFetch();
        setMyPokemons(myPokes);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokeData = async () => {
      const pokeDataArr = await Promise.all(
        myPokemons.map((id) => pokemonDetail(id))
      );
      setMyPokeData(pokeDataArr);
    };

    fetchPokeData();
  }, [myPokemons]);

  if (!myInfo) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <MyInfo myInfo={myInfo} />
      <Subtitle>내 포켓몬</Subtitle>
      <MyPokemons myPokemonData={myPokeData} />
    </div>
  );
};

export default Mypage;
