import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 4rem;
  border-top: 1px solid #dee2e6;
`;

export const Logo = styled.a`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  color: #6c757d;
  text-decoration: none;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 0.5rem;
  }

  a {
    color: #6c757d;
    text-decoration: none;
  }
`;
