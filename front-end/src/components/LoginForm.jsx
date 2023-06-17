import { useState } from "react";
import { loginUser } from "/@/api/auth";
import { useHistory, Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token); // 토큰 저장
      console.log("로그인 성공");
      history.push("/");
    } catch (error) {
      console.error("로그인 실패:", error.message);
    }
  };
  const handlePassword = () => {
    history.push("/PwPage"); // 비밀번호 변경 페이지 경로로 이동
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
      <button onClick={handlePassword}>비밀번호찾기</button>
    </form>
  );
};

export default LoginForm;
