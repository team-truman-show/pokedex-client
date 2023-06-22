import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.form`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 25px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #cdcdcd;

  &:focus {
    outline: none;
    border-bottom: 2px solid;
  }
`;

export const SearchBtn = styled.button`
  height: 25px;
  border: 1px solid #cdcdcd;
`;

export const Container = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  // justify-content: center;
`;

export const Img = styled.img`
  width: 60%;
  height: 50%;
  transition: transform 0.3s;
  object-fit: contain;
`;

// export const PostItem = styled.div`
export const PostItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  // width: 100%;
  height: 300px;
  background-color: #f8f8ff;
  border-radius: 5px;
  overflow: hidden;

  &:hover ${Img} {
    transform: scale(1.4);
  }
`;

export const Btn = styled.button`
  border: 1px solid #cdcdcd;
  font-size: 15px;
  font-weight: bold;
  color: #646cff;
`;
