// src/components/layout/Header.jsx
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import {
  HeaderContainer,
  LogoLink,
  LogoSvg,
  NavLink,
  Btns,
  LoginButton,
  SignUpButton,
} from "../../styles/header.style";
import pokeLogo from "../../assets/monBall.svg";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    history.push("/"); // 로그아웃 후 홈으로 리다이렉트
  };

  const moveLogin = () => {
    history.push("/login");
  };

  const moveSignUp = () => {
    history.push("/signup");
  };

  const moveMyPage = () => {
    history.push("/mypage");
  };

  return (
    <HeaderContainer>
      <LogoLink to={isLogin ? "/main" : "/"}>
        <LogoSvg src={pokeLogo} alt="Pokemon Logo" />
      </LogoLink>
      <nav>
        <NavLink to={isLogin ? "/main" : "/"}>Home</NavLink>
      </nav>
      <div>
        {isLogin ? (
          <Btns>
            <LoginButton onClick={moveMyPage} type="button">
              <p>마이페이지</p>
            </LoginButton>
            <SignUpButton onClick={handleLogout} type="button">
              로그아웃
            </SignUpButton>
          </Btns>
        ) : (
          <Btns>
            <LoginButton onClick={moveLogin} type="button">
              로그인
            </LoginButton>
            <SignUpButton onClick={moveSignUp} type="button">
              회원가입
            </SignUpButton>
          </Btns>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
