import PropTypes from "prop-types";
import {
  MyPokemonCard,
  MyPokemonImage,
  MyPokemonName,
} from "../../styles/card.style";

const Card = ({ pokeData }) => {
  return (
    <MyPokemonCard to={`/detail/${pokeData.id}`} key={pokeData.id}>
      <p style={{ color: "black" }}>No. {pokeData.id}</p>
      <MyPokemonImage
        src={pokeData.imagegif ? pokeData.imagegif : pokeData.imageurl}
        alt="Pokemon"
      />
      <MyPokemonName>{pokeData.name}</MyPokemonName>
    </MyPokemonCard>
  );
};

Card.propTypes = {
  pokeData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagegif: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
