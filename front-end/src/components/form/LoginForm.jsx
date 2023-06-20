// src/components/form/LoginForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "/@/redux/slices/authSlice";
import { loginUser } from "/@/api/userAPI";
import { useHistory } from "react-router-dom";
import { Container, Button, Input, Logo, Box } from "/@/styles/userForms.style";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      console.log("로그인 성공");
      dispatch(login());
      history.push("/main");
    } catch (error) {
      setError("로그인 실패");
      console.error("로그인 실패:", error.message);
    }
  };

  const handlePassword = () => {
    history.push("/PwPage"); // 비밀번호 변경 페이지 경로로 이동
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Box>
          <Logo />
          <h2>로그인</h2>
          <label htmlFor="email"></label>
          <Input
            type="email"
            id="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"></label>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">로그인</Button>
          <Button type="button" onClick={handlePassword}>
            비밀번호 찾기
          </Button>
          {error && <p>{error}</p>}
        </Box>
      </Container>
    </form>
  );
};

export default LoginForm;
