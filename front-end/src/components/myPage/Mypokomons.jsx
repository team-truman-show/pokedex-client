import PropTypes from "prop-types";
import {
  StyledLink,
  MyPokemonCard,
  MyPokemonImage,
  MyPokemonName,
  GuardContainer,
  MyPokemonGrid,
} from "/@/styles/myPage.style";

const MyPokemons = ({ myPokemonData }) => {
  return (
    <div>
      <div>
        <h2>포켓몬 수: {myPokemonData.length}</h2>
      </div>
      <GuardContainer>
        <MyPokemonGrid>
          {myPokemonData.map((pokemonData) => (
            <StyledLink to={`/detail/${pokemonData.id}`} key={pokemonData.id}>
              <MyPokemonCard>
                <p style={{ color: "black" }}>No. {pokemonData.id}</p>
                <MyPokemonImage src={pokemonData.imagegif} alt="Pokemon" />
                <MyPokemonName>이름: {pokemonData.name}</MyPokemonName>
              </MyPokemonCard>
            </StyledLink>
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
