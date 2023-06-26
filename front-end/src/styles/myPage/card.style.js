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

export const MyPokemonName = styled.h3`
  font-size: 15px;
  margin-bottom: 0.2rem;
  color: black;
  position: relative;
`;

export const BringButton = styled.div`
  width: 50px;
  text-align: center;
  display: inline-block;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: black;
  position: absolute;
  left: 90px;
  text-decoration: none;
  &:hover {
    background-color: #ffd400;
    color: #fff;
  }
`;
