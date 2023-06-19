// components/PokemonCard.js
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  PokemonCard as PokemonCardStyle,
  PokemonImage,
  PokemonName,
} from "/@/styles/pokemon.style";

const PokemonCard = ({ data }) => (
  <Link to={`/detail/${data.id}`}>
    <PokemonCardStyle>
      <PokemonImage src={data.imagegif} alt="Pokemon" />
      <PokemonName>{data.name}</PokemonName>
    </PokemonCardStyle>
  </Link>
);

PokemonCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagegif: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
