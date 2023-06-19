// styles/pokemon.style.js
import styled from "styled-components";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

export const Container2 = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;
