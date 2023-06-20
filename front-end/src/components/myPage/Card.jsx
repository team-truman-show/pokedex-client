import PropTypes from "prop-types";
import {
  StyledLink,
  MyPokemonCard,
  MyPokemonImage,
  MyPokemonName,
} from "../../styles/myPage.style";

const Card = ({ pokeData }) => {
  return (
    <StyledLink to={`/detail/${pokeData.id}`} key={pokeData.id}>
      <MyPokemonCard>
        <p style={{ color: "black" }}>No. {pokeData.id}</p>
        <MyPokemonImage src={pokeData.imagegif} alt="Pokemon" />
        <MyPokemonName>이름: {pokeData.name}</MyPokemonName>
      </MyPokemonCard>
    </StyledLink>
  );
};

Card.propTypes = {
  pokeData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagegif: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
