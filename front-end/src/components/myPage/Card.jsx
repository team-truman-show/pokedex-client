import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { useState } from "react";
import { pokeLetgo } from "../../api/pokemonAPI";
import {
  MyPokemonCard,
  BtnWrapper,
  MyPokemonImage,
  MyPokemonName,
  BringButton,
} from "../../styles/myPage/card.style";

import GoodByeModal from "../myPage/bringUp/GoodByeModal";


const Card = ({ pokeData, myPokeId }) => {
  const [isGoodByModalOpen, setIsGoodByModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
    imageSrc: "",
  });

  const history = useHistory();
  const handleCardClick = () => {
    history.push(`/detail/${pokeData.id}`);
  };

  // 놓아주기 모달 열기
  const handleGoodByonClick = (event) => {
    event.stopPropagation();
    setIsGoodByModalOpen(true);
    setModalContent({
      title: "놓아주기",
      message: "진짜로 놓아주시겠습니까?",
      isError: false,
      imageSrc: "",
    });
  };

  // 놓아주기
  const handleLetgo = async () => {
    try {
      await pokeLetgo(myPokeId);
      setIsGoodByModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleBringUp = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지(상세페이지)
    const pokemonid = pokeData.id;
    history.push(`/bringup/${myPokeId}/${pokemonid}`);
  };

  const handleGoodByeModalClose = () => {
    setIsGoodByModalOpen(false);
  };

  return (

    <div>
      <MyPokemonCard onClick={handleCardClick} key={myPokeId}>
        <p style={{ color: "black" }}>No. {pokeData.id}</p>
        <MyPokemonImage
          src={pokeData.imagegif ? pokeData.imagegif : pokeData.imageurl}
          alt="Pokemon"
        />
        <div>
          <BringButton type="button" onClick={handleGoodByonClick}>
            놓아주기
          </BringButton>
          <MyPokemonName>
            {pokeData.name}
            <BringButton onClick={handleBringUp}>키우기</BringButton>
          </MyPokemonName>
        </div>
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
