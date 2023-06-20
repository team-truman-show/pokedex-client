import styled from "styled-components";
import { Link } from "react-router-dom";
import ball from "../../public/Image/ball.png";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-y: auto;
  max-height: 70vh;
`;
export const MyPokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
  max-height: 70vh;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  border-collapse: collapse;

  & > * {
    padding: 10px;
    border-bottom: 1px solid black;
  }

  & > *:nth-child(-n + 3) {
    border-top: 1px solid black;
  }

  & > *:nth-child(3n) {
    border-right: none;
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MyPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-right: 1px solid black;
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
`;
export const MyPokemonImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 0.5rem;
`;
export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  color: black;
`;
export const MyPokemonName = styled.h3`
  font-size: 15px;
  margin-bottom: 0.2rem;
  color: black;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Button = styled.button`
  height: 20px;
  font-size: px;
`;
export const Subtitle = styled.h1`
  color: red;
`;
export const GuardContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const MonsterBall = styled.div`
  width: 200px;
  height: 150px;
  background-image: url(${ball});
  background-size: 100% auto;
  background-position: right center;
  background-repeat: no-repeat;
`;
