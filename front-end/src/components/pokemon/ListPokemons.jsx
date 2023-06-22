// Main.js
import { useState } from "react";
import { usePokemonSearch } from "../../hooks/usePokemonSearch";
import {
  Wrapper,
  SearchBar,
  Input,
  SearchBtn,
  Container,
  Img,
  PostItem,
  Btn,
} from "../../styles/listPokemon.style";

const Main = () => {
  const { pokemons, pokemonName, setPokemonNames, searchPokemon } =
    usePokemonSearch();

  const [visiblePokemons, setVisiblePokemons] = useState(30); // 초기에 10개의 데이터만 보이도록 설정

  const handlePokeSearch = (e) => {
    e.preventDefault();
    searchPokemon(pokemonName);
  };

  const handleLoadMore = () => {
    // 추가로 10개의 데이터를 보이도록 visiblePokemons 값을 증가시킴
    setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + 30);
  };

  return (
    <Wrapper>
      <SearchBar onSubmit={handlePokeSearch}>
        <Input
          type="text"
          placeholder="포켓몬 검색"
          value={pokemonName}
          onChange={(e) => setPokemonNames(e.target.value)}
        />
        <SearchBtn type="submit">검색</SearchBtn>
      </SearchBar>

      <Container>
        {pokemons &&
          pokemons.slice(0, visiblePokemons).map((data, index) => (
            <PostItem to={`/detail/${data.id}`} key={index}>
              {data.imagegif ? (
                <Img src={data.imagegif} />
              ) : (
                <Img src={data.imageurl} />
              )}
              <div>{data.name}</div>
            </PostItem>
          ))}
      </Container>

      {pokemons && visiblePokemons < pokemons.length && (
        <Btn onClick={handleLoadMore}>더 보기</Btn>
      )}
    </Wrapper>
  );
};

export default Main;
