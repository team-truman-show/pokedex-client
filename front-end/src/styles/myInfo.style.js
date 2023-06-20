import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Note = styled.div`
  position: relative;
`;

export const NoteImage = styled.img`
  width: 400px;
  position: absolute;
`;

export const Ball = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  opacity: 0.1;
  position: relative;
`;

export const Body = styled.div`
  position: relative;
  top: -310px;
  left: 50px;
`;

export const Title = styled.h1`
  font-family: NeoDunggeunmo, sans-serif, Arial;
  padding: 0 20px;
`;

export const Contents = styled.div`
  font-family: NeoDunggeunmoPro-Regular, sans-serif, Arial;
  padding: 0 40px;
`;
