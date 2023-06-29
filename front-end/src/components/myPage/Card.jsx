import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { pokeLetgo } from "../../api/pokemonAPI";
import {
  MyPokemonCard,
  BtnWrapper,
  MyPokemonImage,
  MyPokemonName,
  BringButton,
} from "../../styles/myPage/card.style";

const Card = ({ pokeData, myPokeId }) => {
  const history = useHistory();
  const handleCardClick = () => {
    history.push(`/detail/${pokeData.id}`);
  };
  const handleXClick = async (event) => {
    event.stopPropagation();
    try {
      await pokeLetgo(myPokeId);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleBringUp = async (event) => {
    event.stopPropagation(); // 이벤트 전파 중지(상세페이지)
    try {
      const pokemonid = pokeData.id;
      let mypokeid = myPokeId;
      // for (let i = 0; i < myPokeinfo.length; i++)
      //   if (myPokeinfo[i].pokeid == pokemonid) {
      //     mypokeid = myPokeinfo[i].id;
      //     break;
      //   }
      history.push(`/bringup/${mypokeid}/${pokemonid}`);
    } catch (error) {
      console.error(error); // 에러 처리
    }
  };

  return (
    <MyPokemonCard onClick={handleCardClick} key={myPokeId}>
      <div style={{ color: "black" }}>No. {pokeData.id}</div>
      <MyPokemonImage
        src={pokeData.imagegif ? pokeData.imagegif : pokeData.imageurl}
        alt="Pokemon"
      />
      <MyPokemonName>{pokeData.name}</MyPokemonName>
      <BtnWrapper>
        <BringButton onClick={handleXClick}>놓아주기</BringButton>
        <BringButton onClick={handleBringUp}>키우기</BringButton>
      </BtnWrapper>
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
  myPokeId: PropTypes.number.isRequired,
};

export default Card;
