import PropTypes from 'prop-types';

import {
  Wrapper,
  Head,
  GuardContainer,
  MyPokemonGrid,
} from '../../styles/myPage/myPokemon.style';
import Card from './Card';

const MyPokemons = ({ myPokemonData, myPokeIds }) => {
  return (
    <Wrapper>
      <Head>
        <h1>내 포켓몬</h1>
        <h2>포켓몬 수: {myPokemonData.length}</h2>
      </Head>
      <GuardContainer>
        <MyPokemonGrid>
          {myPokemonData.map((pokemonData, index) => (
            <Card
              key={myPokeIds[index]}
              pokeData={pokemonData}
              myPokeId={myPokeIds[index]}
            />
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
