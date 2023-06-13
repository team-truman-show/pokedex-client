import { useState } from "react";
import {
  HeaderContainer,
  LogoLink,
  LogoSvg,
  NavLink,
  LoginButton,
  JoinButton,
} from "../styles/header.style";
import pokeLogo from "../assets/monBall.svg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(setIsLogin);

  return (
    <HeaderContainer>
      <LogoLink href="/">
        <LogoSvg src={pokeLogo}></LogoSvg>
      </LogoLink>

      <nav>
        {/* <NavLink href="#">Home</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">FAQs</NavLink>
        <NavLink href="#">About</NavLink> */}
      </nav>

      <div>
        {isLogin ? (
          <>
            <NavLink href="#">마이페이지</NavLink>
            <LoginButton type="button">Logout</LoginButton>
          </>
        ) : (
          <>
            <LoginButton type="button">Login</LoginButton>
            <JoinButton type="button">SignUp</JoinButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
