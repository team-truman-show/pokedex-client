import { useState } from "react";
import { signUpUser } from "../../api/userAPI";
import { useHistory } from "react-router-dom";
import {
  Container,
  Button,
  Input,
  Logo,
  Box,
  FormContainer,
} from "../../styles/form/userForms.style";
import Modal from "../Modal";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nick, setNick] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password, nick);
      // console.log("회원가입 성공!");
      setModalContent({
        message: "회원가입이 완료되었습니다.",
        isError: false,
      });
    } catch (error) {
      // console.error("회원가입 실패:", error.message);
      setModalContent({ message: error.message, isError: true });
    }
  };

  const closeModal = () => {
    if (modalContent && !modalContent.isError) {
      history.push("/login");
    }
    setModalContent(null);
  };

  return (
    <Container>
      <Box>
        <Logo />
        <h3>회원가입</h3>
        <FormContainer onSubmit={handleSignUp}>
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
        </FormContainer>
      </Box>
      {modalContent && (
        <Modal
          message={modalContent.message}
          onClose={closeModal}
          isError={modalContent.isError}
        />
      )}
    </Container>
  );
};

export default SignUpForm;
