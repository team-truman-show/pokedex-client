import { useState } from "react";
import { useHistory } from "react-router-dom";
import { pwchange } from "/@/api/api";

const Pwchange = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [nick, setNick] = useState("");

  const history = useHistory();

  const handlePwChange = async (e) => {
    e.preventDefault();
    try {
      await pwchange(email, nick, newpassword);
      console.log("비밀번호변경 성공!");
      history.push("/login");
    } catch (error) {
      console.error("비밀번호변경 실패:", error.message);
    }
  };

  return (
    <form onSubmit={handlePwChange}>
      <h2>비밀번호변경</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />
      <input
        type="password"
        placeholder="새로운비밀번호"
        value={newpassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">변경하기</button>
    </form>
  );
};
