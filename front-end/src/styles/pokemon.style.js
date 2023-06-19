import styled from "styled-components";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-y: auto;
  max-height: 70vh;
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
`;
export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
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
