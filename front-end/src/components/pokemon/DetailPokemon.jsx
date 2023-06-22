import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonDetail, pokemonCatch } from "../../api/pokemonAPI";
import {
  BigContainer,
  SmallContainer1,
  SmallContainer2,
  StyledImage,
  StyledText,
  ColoredText,
  NameText,
  SmallContainer3,
  StyledButton,
  BalloonContainer,
  ParentContainer,
} from "../../styles/detailPokemon.style";
import { types, back, korean } from "../../styles/types";
import monsterball from "../../../public/Image/monsterball.png";
import Modal from "../Modal";

const Pokemon = () => {
  const { page } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pokemonDetail(page);
        setPokemonData(data);
      } catch (error) {
        // console.error("API 호출 실패:", error.message);
        setModalContent({ message: error.message, isError: true });
      }
    };

    fetchData();
  }, [page]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  const handleButtonClick = async () => {
    try {
      const id = pokemonData.id;
      await pokemonCatch(id);
      setModalContent({ message: "잡기에 성공했습니다!", isError: false });
    } catch (error) {
      // console.error("API 호출 실패:", error.message);
      setModalContent({ message: error.message, isError: true });
    }
  };
  // 데이터를 활용하여 컴포넌트를 구성하고 반환합니다.
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <BigContainer color={back[pokemonData.type1]}>
        <SmallContainer1>
          <StyledImage src={pokemonData.imageurl} />
        </SmallContainer1>
        <SmallContainer2>
          <StyledText>No.{pokemonData.id}</StyledText>
          <NameText>{pokemonData.name}</NameText>
          <StyledText>특성: {pokemonData.feature}</StyledText>
          <StyledText>
            타입:
            <ColoredText color={types[pokemonData.type1]}>
              {korean[pokemonData.type1]}
            </ColoredText>
            {pokemonData.type2 && (
              <ColoredText color={types[pokemonData.type2]}>
                {korean[pokemonData.type2]}
              </ColoredText>
            )}
          </StyledText>

          <StyledText>설명: {pokemonData.description}</StyledText>
        </SmallContainer2>
      </BigContainer>
      <SmallContainer3>
        <br />
        <ParentContainer onClick={handleButtonClick}>
          <BalloonContainer>잡기</BalloonContainer>
        </ParentContainer>
        <StyledButton src={monsterball} alt="버튼 이미지" />
      </SmallContainer3>
      {modalContent && (
        <Modal
          message={modalContent.message}
          onClose={closeModal}
          isError={modalContent.isError}
        />
      )}
    </div>
  );
};

export default Pokemon;
