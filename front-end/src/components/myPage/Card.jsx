
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { myInfoFetch } from "../../api/userAPI";

import {
  MyPokemonCard,
  MyPokemonImage,
  MyPokemonName,
  BringButton,
} from "../../styles/myPage/card.style";

const Card = ({ pokeData }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/detail/${pokeData.id}`);
  };

  const handleBringUp = async (event) => {
    event.stopPropagation(); // 이벤트 전파 중지(상세페이지)

    try {
      const myPokeinfo = await myPokeFetch();
      const pokemonid = pokeData.id;
      let mypokeid;
      for (let i = 0; i < myPokeinfo.length; i++)
        if (myPokeinfo[i].pokeid == pokemonid) {
          mypokeid = myPokeinfo[i].id;
          break;
        }
      history.push(`/bringup/${mypokeid}/${pokemonid}`);
    } catch (error) {
      console.error(error); // 에러 처리
    }
  };

  return (
    <MyPokemonCard onClick={handleCardClick} key={pokeData.id}>
      <p style={{ color: "black" }}>No. {pokeData.id}</p>
      <MyPokemonImage
        src={pokeData.imagegif ? pokeData.imagegif : pokeData.imageurl}
        alt="Pokemon"
      />
      <div>
        <MyPokemonName>
          {pokeData.name}
          <BringButton onClick={handleBringUp}>육성</BringButton>
        </MyPokemonName>
      </div>
    </MyPokemonCard>
  );
};

Card.propTypes = {
  pokeData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagegif: PropTypes.string,
    imageurl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
