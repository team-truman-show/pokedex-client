import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { pokeLetgo } from "../../api/pokemonAPI";
import GoodByeModal from "./bringUp/GoodByeModal";
import {
  MyPokemonCard,
  BtnWrapper,
  MyPokemonImage,
  MyPokemonName,
  BringButton,
} from "../../styles/myPage/card.style";

const Card = ({ pokeData, myPokeId }) => {
  const [isGoodByModalOpen, setIsGoodByModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
    imageSrc: "./",
  });
  const history = useHistory();

  //상세페이지
  const handleCardClick = () => {
    history.push(`/detail/${pokeData.id}`);
  };

  //놓아주기모달열기
  const handleGoodByonClick = (event) => {
    event.stopPropagation();
    setIsGoodByModalOpen(true);
    setModalContent({
      title: "놓아주기",
      message: "진짜로 놓아주시겠습니까?",
      isError: false,
      imageSrc: "./Image/pokebye.gif",
    });
  };

  //모달닫기
  const handleGoodByeModalClose = () => {
    setIsGoodByModalOpen(false);
  };

  //놓아주기
  const handleLetgo = async () => {
    try {
      await pokeLetgo(myPokeId);
      setIsGoodByModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  // 육성
  const handleBringUp = async (event) => {
    event.stopPropagation(); // 이벤트 전파 중지(상세페이지)
    try {
      const pokemonid = pokeData.id;
      let mypokeid = myPokeId;
      history.push(`/bringup/${mypokeid}/${pokemonid}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MyPokemonCard onClick={handleCardClick} key={myPokeId}>
        <div style={{ color: "black" }}>No. {pokeData.id}</div>
        <MyPokemonImage
          src={pokeData.imagegif ? pokeData.imagegif : pokeData.imageurl}
          alt="Pokemon"
        />
        <MyPokemonName>{pokeData.name}</MyPokemonName>
        <BtnWrapper>
          <BringButton onClick={handleGoodByonClick}>놓아주기</BringButton>
          <BringButton onClick={handleBringUp}>키우기</BringButton>
        </BtnWrapper>
      </MyPokemonCard>
      <GoodByeModal
        isOpen={isGoodByModalOpen}
        onClose={handleGoodByeModalClose}
        title={modalContent.title}
        myPokeId={myPokeId}
        message={modalContent.message}
        isError={modalContent.isError}
        imageSrc={modalContent.imageSrc}
        onConfirm={handleLetgo}
      />
    </div>
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
