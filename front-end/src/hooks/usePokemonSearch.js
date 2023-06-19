// hooks/usePokemonSearch.js
import { useState, useEffect } from "react";
import { getPokemons } from "/@/api/pokemonAPI";

export const usePokemonSearch = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonNames] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setAllPokemons(data);
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  const searchPokemon = (name) => {
    if (name === "") {
      setPokemons(allPokemons);
    } else {
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.includes(name)
      );
      setPokemons(filteredPokemons);
    }
  };

  return { pokemons, pokemonName, setPokemonNames, searchPokemon };
};
