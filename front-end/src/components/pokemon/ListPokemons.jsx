// Main.js
import { usePokemonSearch } from "/@/hooks/usePokemonSearch";
import PokemonCard from "/@/components/pokemon/CardPokemon";
import { PokemonGrid, Container2 } from "/@/styles/pokemon.style";

const Main = () => {
  const { pokemons, pokemonName, setPokemonNames, searchPokemon } =
    usePokemonSearch();

  const handlePokeSearch = (e) => {
    e.preventDefault();
    searchPokemon(pokemonName);
  };

  return (
    <Container2>
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

      <PokemonGrid>
        {pokemons &&
          pokemons.map((data, index) => (
            <PokemonCard key={index} data={data} />
          ))}
      </PokemonGrid>
    </Container2>
  );
};

export default Main;
