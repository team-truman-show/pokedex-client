import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  background-image: url("./Image/note.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 100px;
  align-items: center;
`;

export const Body = styled.div`
  position: relative;
  top: 70px;
  width: 280px;
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  // text-align: center;
  &:after {
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("./Image/ball.png");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const Title = styled.h1`
  font-family: DungGeunMo, sans-serif, Arial;
  padding: 0 20px;
`;

export const Contents = styled.div`
  font-family: NeoDunggeunmoPro-Regular, sans-serif, Arial;
  padding: 0 40px;
`;
