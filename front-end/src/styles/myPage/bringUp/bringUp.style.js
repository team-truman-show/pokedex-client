import styled from "styled-components";
export const BigBox = styled.div`
display: flex;
  justify-content: center;
  align-items: center
`
export const MyPokemonImage = styled.img`
  width: 20%;
  height: 20%;
  transition: transform 0.3s;
  object-fit: contain;
  &.moving-image {
    animation: moveImage 15s linear infinite;
  }
  
  @keyframes moveImage {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  &.eating {
    animation: eatAnimation 3s linear;
  }
  
  @keyframes eatAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
`;
