// // Main.js

import { useState } from "react";
import { usePokemonSearch } from "/@/hooks/usePokemonSearch";
import { Container, PostItem } from "/@/styles/listPokemon.style";

const Main = () => {
  const { pokemons, pokemonName, setPokemonNames, searchPokemon } =
    usePokemonSearch();

  const [visiblePokemons, setVisiblePokemons] = useState(10); // 초기에 10개의 데이터만 보이도록 설정

  const handlePokeSearch = (e) => {
    e.preventDefault();
    searchPokemon(pokemonName);
  };

  const handleLoadMore = () => {
    // 추가로 10개의 데이터를 보이도록 visiblePokemons 값을 증가시킴
    setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + 10);
  };

  return (
    <>
      <div>
        <form onSubmit={handlePokeSearch}>
          <input
            type="text"
            placeholder="포켓몬찾기"
            value={pokemonName}
            onChange={(e) => setPokemonNames(e.target.value)}
          />
          <button type="submit">검색</button>
        </form>
      </div>

      <Container>
        {pokemons &&
          pokemons.slice(0, visiblePokemons).map((data, index) => (
            <PostItem key={index}>
              <img src={data.imagegif} />
              <div>{data.name}</div>
            </PostItem>
          ))}
      </Container>

      {pokemons && visiblePokemons < pokemons.length && (
        <button onClick={handleLoadMore}>더 보기</button>
      )}
    </>
  );
};

export default Main;
