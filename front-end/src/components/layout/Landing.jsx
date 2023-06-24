import { useEffect, useState } from "react";
import {
  BgImage,
  BgPage,
  Display,
  MainButton,
} from "../../styles/layout/landing.style";

import { useHistory } from "react-router-dom";

const Landing = () => {
  const txt = "환영합니다";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => prevText + txt[count]);
      setCount((prevCount) => prevCount + 1);
    }, 300);

    if (count === txt.length) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval); // 컴포넌트가 unmount될 때 타이머를 멈춥니다.
    };
  }, [count, txt.length]);

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
          <div>
            <h2>{text}</h2>
          </div>
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
