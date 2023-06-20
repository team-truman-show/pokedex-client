import {
  BgImage,
  BgPage,
  Display,
  MainButton,
} from "../../styles/Landing.style";
import { useHistory } from "react-router-dom";
const Landing = () => {
  const history = useHistory();
  const moveSignUp = () => {
    history.push("/signup");
  };
  const moveLogin = () => {
    history.push("/login");
  };

  return (
    <BgPage>
      <BgImage>
        <Display>
          <h2>환영합니다</h2>
          <MainButton onClick={moveLogin} type="button">
            로그인
          </MainButton>
          <br />
          <MainButton onClick={moveSignUp} type="button">
            회원가입
          </MainButton>
        </Display>
      </BgImage>
    </BgPage>
  );
};

export default Landing;
