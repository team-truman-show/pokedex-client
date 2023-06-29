import styled from "styled-components";

export const MyPokemonImage = styled.img`
  width: 60%;
  height: 50%;
  transition: transform 0.3s;
  object-fit: contain;
`;

export const MyPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 300px;
  background-color: #f8f8ff;
  border-radius: 5px;
  overflow: hidden;
  &:hover ${MyPokemonImage} {
    transform: scale(1.4);
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
`;

export const MyPokemonName = styled.div`
  font-size: 20px;
  color: black;
  text-align: center;
`;

export const BringButton = styled.button`
  width: 80px;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: black;
  text-align: center;
  &:hover {
    background-color: #ffd400;
    color: #fff;
  }
`;
