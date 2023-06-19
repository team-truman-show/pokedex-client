import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonDetail, pokemonCatch } from "/@/api/api";

const Pokemon = () => {
  const { page } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pokemonDetail(page);
        setPokemonData(data);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
      }
    };

    fetchData();
  }, [page]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  const handleButtonClick = async () => {
    try {
      const id = pokemonData.id;
      await pokemonCatch(id);
    } catch (error) {
      console.error("API 호출 실패:", error.message);
    }
  };
  // 데이터를 활용하여 컴포넌트를 구성하고 반환합니다.
  return (
    <div>
      <img src={pokemonData.imageurl} />
      <p>No.{pokemonData.id}</p>
      <p>이름: {pokemonData.name}</p>
      <p>특성: {pokemonData.feature}</p>
      <p>
        타입: {pokemonData.type1}{" "}
        {pokemonData.type2 && <p>{pokemonData.type2}</p>}
        <p>설명: {pokemonData.description}</p>
        <button onClick={handleButtonClick}>잡기</button>
      </p>
    </div>
  );
};

export default Pokemon;
