import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  @media (min-width: 1024px) {
    min-height: 70vh;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 60vh;
  }

  @media (max-width: 767px) {
    min-height: 50vh;
  }
`;
