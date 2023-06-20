import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;

export const LogoSvg = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Btns = styled.div`
  width: 185px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const LoginButton = styled.button`
  margin-right: 0.5rem;
  padding: 0rem 0.5rem;
  border: 1px solid #ffd400;
  color: #ffd400;
  background-color: transparent;
  border-radius: 0.25rem;
  outline: none;
  text-align: center;
  margin-top: -1px;
  &:hover {
    background-color: #ffd400;
    color: #fff;
  }
`;

export const SignUpButton = styled.button`
  padding: 0.5rem 0.5rem;
  border: none;
  color: #fff;
  background-color: #ffd400;
  border-radius: 0.25rem;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;
