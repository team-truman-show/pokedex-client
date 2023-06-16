import { useState } from "react";
// import { useAuth } from "/@/hooks/auth";
import { loginUser } from "/@/services/api";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { handleLogin } = useAuth(); // useAuth 훅에서 handleLogin 함수를 가져오기.

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await handleLogin(email, password); // useAuth 훅에서 가져온 handleLogin 함수를 호출.
      await loginUser(email, password);
      console.log("🚀 ~ file: LoginForm.jsx:14 ~ handleSubmit ~ e:", e);
      history.push("/");
    } catch (error) {
      console.error("로그인 실패:", error.message);
    }
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
    </form>
  );
};

export default LoginForm;
