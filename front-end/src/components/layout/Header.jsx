// src/components/layout/Header.jsx
import {
  useState,
  // useEffect
} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  // setUserName,
  // selectUserName,
} from "../../redux/slices/authSlice";
// import { Redirect } from "react-router-dom";
// import { myInfoFetch } from "../../api/userAPI";
import {
  HeaderContainer,
  LogoLink,
  LogoSvg,
  NavLink,
  Btns,
  LoginButton,
  SignUpButton,
} from "../../styles/layout/header.style";
import pokeLogo from "../../assets/monBall.svg";
import Modal from "../Modal";

const Header = () => {
  // const [redirectHome, setRedirectHome] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  // const userName = useSelector(selectUserName);

  // useEffect(() => {
  //   if (isLogin) {
  //     // 로그인 상태일 때만 사용자 정보 가져오기
  //     const fetchData = async () => {
  //       try {
  //         const data = await myInfoFetch();
  //         dispatch(setUserName(data.userName)); // 사용자 이름 설정
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [dispatch, isLogin]);

  // const handleLogout = () => {
  //   try {
  //     localStorage.removeItem("token");
  //     dispatch(logout());
  //     setRedirectHome(true);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // if (redirectHome) {
  //   return <Redirect to="/" />;
  // }

  const onClickReload = () => {
    // window.location.reload();
    isLogin ? window.location.replace("/main") : window.location.replace("/");
  };

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

  const closeModal = () => {
    setError("");
  };

  return (
    <HeaderContainer>
      {/* <LogoLink to={isLogin ? "/main" : "/"}> */}
      <LogoLink onClick={onClickReload}>
        <LogoSvg src={pokeLogo} alt="Pokemon Logo" />
      </LogoLink>
      <nav>
        <NavLink onClick={onClickReload}>Home</NavLink>
      </nav>
      {/* <div> */}
      {isLogin ? (
        <Btns>
          {/* <span>{userName}</span> */}
          <LoginButton onClick={moveMyPage} type="button">
            마이페이지
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
      {/* </div> */}
      {error && <Modal message={error} onClose={closeModal} isError={true} />}
    </HeaderContainer>
  );
};

export default Header;
