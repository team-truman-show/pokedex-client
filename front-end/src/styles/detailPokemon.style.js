// styles/pokemon.style.js
import styled from "styled-components";

export const BigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  background-color: ${({ color }) => `rgb(${color.join(",")})`};
`;

export const SmallContainer1 = styled.div`
  flex: 1;
`;

export const SmallContainer2 = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const SmallContainer3 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledText = styled.p`
  font-family: NeoDunggeunmoPro-Regular;
  font-size: 20px;
  white-space: pre-line;
`;
export const NameText = styled.h1`
  font-family: DungGeunMo;
  font-size: 60px;
`;

export const ColoredText = styled.span`
  font-family: NeoDunggeunmoPro-Regular;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 55px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => `rgb(${color.join(",")})`};
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

export const StyledImage = styled.img`
  width: auto; /* 이미지의 가로 크기를 100%로 설정 */
  height: auto; /* 이미지의 세로 크기를 자동으로 조정 */
`;

export const BalloonContainer = styled.div`
  z-index: 1;
  position: relative;
  top: 40px;
  left: 65px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-family: NeoDunggeunmoPro-Regular, sans-serif, Arial;
  &:hover {
    transform: scale(2);
    font-family: DungGeunMo, sans-serif, Arial;
  }
`;

export const StyledButton = styled.img`
  width: 100px;
  position: relative;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%; /* 적절한 높이를 지정해주세요 */
`;
