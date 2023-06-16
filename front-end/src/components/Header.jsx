import { useHistory } from "react-router-dom";
// import { useAuth } from "/@/hooks/auth";
import { useState } from "react";
import {
  HeaderContainer,
  LogoLink,
  LogoSvg,
  NavLink,
  Btns,
  LoginButton,
  SignUpButton,
} from "/@/styles/header.style";
import pokeLogo from "/@/assets/monBall.svg";

const Header = () => {
  // const { accessToken } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setIsLogin(false);
    history.push("/");
  };

  const moveSignIn = () => {
    setIsLogin(true);
    history.push("/login");
  };

  const moveSignUp = () => {
    history.push("/signup");
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoSvg src={pokeLogo} alt="Pokemon Logo" />
      </LogoLink>

      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>

      <div>
        {isLogin ? (
          <Btns>
            <LoginButton to="/mypage">마이페이지</LoginButton>
            <SignUpButton onClick={handleLogout} type="button">
              Logout
            </SignUpButton>
          </Btns>
        ) : (
          <Btns>
            <LoginButton onClick={moveSignIn} type="button">
              Sign In
            </LoginButton>
            <SignUpButton onClick={moveSignUp} type="button">
              Sign Up
            </SignUpButton>
          </Btns>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
