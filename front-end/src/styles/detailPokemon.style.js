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
export const StyledButton = styled.img`
  width: 100px;
  height: 50ps;
  cursor: pointer;
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
  font-size: 20px;
  white-space: pre-line;
`;
export const NameText = styled.h1`
  font-size: 60px;
`;

export const ColoredText = styled.span`
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
  position: relative;
  display: flex;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  color: #333;
  max-width: 200px;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent transparent #f0f0f0;
    right: -20px;
    transform: translateY(-50%);
  }
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* 적절한 높이를 지정해주세요 */
`;
