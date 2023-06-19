import {
  FooterContainer,
  Wrapper,
  Logo,
  LogoSvg,
  Text,
} from "/@/styles/footer.style";
import pokemonLogo from "/@/assets/monBall.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Logo to="/">
          <LogoSvg src={pokemonLogo} alt="Pokemon Logo" />
        </Logo>
        <Text>&copy; {new Date().getFullYear()} Team Truman Show, Inc</Text>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
