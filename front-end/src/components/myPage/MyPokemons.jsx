import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyPokemons = ({ myPokemonData }) => {
  return (
    <div>
      <h1>지닌 포켓몬</h1>
      <h2>포켓몬 수: {myPokemonData.length}</h2>
      {myPokemonData.map((pokemonData) => (
        <div key={pokemonData.id}>
          <Link to={`/detail/${pokemonData.id}`}>
            <img src={pokemonData.imageurl} alt="Pokemon" />
            <p>No. {pokemonData.id}</p>
            <p>이름: {pokemonData.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

MyPokemons.propTypes = {
  myPokemonData: PropTypes.array.isRequired,
};

export default MyPokemons;
