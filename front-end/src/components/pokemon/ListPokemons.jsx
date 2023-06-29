// Main.js
import { usePokemonSearch } from "../../hooks/usePokemonSearch";
import {
  Wrapper,
  SearchBar,
  Input,
  SearchBtn,
  Container,
  Img,
  PostItem,
} from "../../styles/pokemon/listPokemon.style";

const Main = () => {
  const { pokemons, pokemonName, setPokemonNames, searchPokemon } =
    usePokemonSearch();

  const handlePokeSearch = (e) => {
    e.preventDefault();
    searchPokemon(pokemonName);
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
          pokemons.map((data, index) => (
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
    </Wrapper>
  );
};

export default Main;
