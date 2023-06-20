import { useState } from "react";
import { signUpUser } from "../../api/userAPI";
import { useHistory } from "react-router-dom";
import {
  Container,
  Button,
  Input,
  Logo,
  Box,
} from "../../styles/userForms.style";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nick, setNick] = useState("");

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password, nick);
      console.log("회원가입 성공!");
      history.push("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <Container>
        <Box>
          <Logo />
          <h3>회원가입</h3>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="닉네임"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">가입하기</Button>
        </Box>
      </Container>
    </form>
  );
};

export default SignUpForm;
