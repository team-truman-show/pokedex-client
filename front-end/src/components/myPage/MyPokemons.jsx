import PropTypes from "prop-types";

import {
  Wrapper,
  Head,
  GuardContainer,
  MyPokemonGrid,
} from "../../styles/myPokemon.style";
import Card from "./Card";

const MyPokemons = ({ myPokemonData }) => {
  return (
    <Wrapper>
      <Head>
        <h1>내 포켓몬</h1>
        <h2>포켓몬 수: {myPokemonData.length}</h2>
      </Head>
      <GuardContainer>
        <MyPokemonGrid>
          {myPokemonData.map((pokemonData) => (
            <Card key={pokemonData.id} pokeData={pokemonData} />
          ))}
        </MyPokemonGrid>
      </GuardContainer>
    </Wrapper>
  );
};

MyPokemons.propTypes = {
  myPokemonData: PropTypes.array.isRequired,
};

export default MyPokemons;
