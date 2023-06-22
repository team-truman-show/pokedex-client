import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;

export const Head = styled.div`
  width: 80%;
  font-family: DungGeunMo, sans-serif, Arial;
`;

export const GuardContainer = styled.div`
  width: 80%;
  padding: 0 20px;
`;

export const MyPokemonGrid = styled.div`
  width: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
`;
