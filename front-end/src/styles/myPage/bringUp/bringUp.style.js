import styled from 'styled-components';
export const BigBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export const SmallBox = styled.div`
  display: flex;
`;
export const ProgressBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const MyPokemonImage = styled.img`
  width: 20%;
  transition: transform 0.3s;
  object-fit: contain;
  &.moving-image {
    animation: moveImage 1s linear infinite;
  }

  @keyframes moveImage {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
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
