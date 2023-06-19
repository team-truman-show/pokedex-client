import styled from "styled-components";

export const Container = styled.div`

    background-image: url(./Image/pixel.jpg);
    background-size: 100% 100%;
    height: 500px;
    
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    opacity: 0.8;
    resizeMode="stretch"


`;

export const Button = styled.button`
  background-color: #ffea00;
  color: #000;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  type: text;
  width: 150px;
  height: 25px;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: transparent;
  border-color: transparent transparent #ffea00 transparent;
  border-width: 3px;
`;

export const Logo = styled.div`
  width: 200px;
  height: 100px;
  background-image: url(./Image/Logo.png);
  background-size: cover;
  background-position: center;
`;

export const Box = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  display: flex;
  background-color: #ffffe0;
  border-width: 3px;
  border-style: solid;
  border-color: #ffea00;
  border-radius: 5px;
`;
