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
import { types, back } from "../../styles/types";
import monsterball from "../../../public/Image/monsterball.png";

const Pokemon = () => {
  const { page } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pokemonDetail(page);
        setPokemonData(data);
      } catch (error) {
        console.error("API 호출 실패:", error.message);
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
    } catch (error) {
      console.error("API 호출 실패:", error.message);
    }
  };
  // 데이터를 활용하여 컴포넌트를 구성하고 반환합니다.
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
          타입:
          <ColoredText color={types[pokemonData.type1]}>
            {pokemonData.type1}{" "}
          </ColoredText>
          {pokemonData.type2 && (
            <ColoredText color={types[pokemonData.type2]}>
              {pokemonData.type2}
            </ColoredText>
          )}
          <StyledText>설명: {pokemonData.description}</StyledText>
        </SmallContainer2>
      </BigContainer>
      <SmallContainer3>
        <br />
        <ParentContainer>
          <BalloonContainer>잡기</BalloonContainer>
        </ParentContainer>
        <StyledButton
          src={monsterball}
          alt="버튼 이미지"
          onClick={handleButtonClick}
        />
      </SmallContainer3>
    </div>
  );
};

export default Pokemon;
