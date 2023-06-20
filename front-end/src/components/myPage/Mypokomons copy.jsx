import PropTypes from "prop-types";

import { GuardContainer, MyPokemonGrid } from "/@/styles/myPage.style";
import Card from "./myPage/Card";

const MyPokemons = ({ myPokemonData }) => {
  return (
    <div>
      <div>
        <h2>포켓몬 수: {myPokemonData.length}</h2>
      </div>
      <GuardContainer>
        <MyPokemonGrid>
          {myPokemonData.map((pokemonData) => (
            <Card key={pokemonData.id} pokeData={pokemonData} />
          ))}
        </MyPokemonGrid>
      </GuardContainer>
    </div>
  );
};

MyPokemons.propTypes = {
  myPokemonData: PropTypes.array.isRequired,
};

export default MyPokemons;
