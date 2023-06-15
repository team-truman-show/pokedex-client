import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handleLogout = () => {
    setIsLogin(false);
    history.push("/");
  };

  const moveLogin = () => {
    history.push("/login");
  };

  const moveSignUp = () => {
    history.push("/join");
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoSvg src={pokeLogo} alt="Pokemon Logo" />
      </LogoLink>

      <nav>
        <NavLink to="/">Home</NavLink>{" "}
      </nav>

      <div>
        {isLogin ? (
          <>
            <NavLink to="/mypage">마이페이지</NavLink>
            <LoginButton onClick={handleLogout} type="button">
              Logout
            </LoginButton>
          </>
        ) : (
          <>
            <LoginButton onClick={moveLogin} type="button">
              Login
            </LoginButton>
            <JoinButton onClick={moveSignUp} type="button">
              SignUp
            </JoinButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
