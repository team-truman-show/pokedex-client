import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  margin-bottom: 4rem;
  border-top: 1px solid #dee2e6;
  grid-area: footer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  color: #6c757d;
  text-decoration: none;
`;

export const LogoSvg = styled.img`
  width: 30px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
`;
