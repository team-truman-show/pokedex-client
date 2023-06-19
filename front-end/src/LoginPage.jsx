import { Container, Button, Input, Logo, Box } from "./styles/login.style";

const LoginPage = () => {
  //axios.get(""); 데이터 받아오기
  //페이지 넘어가기
  //return: 보여지는 곳

  return (
    <>
      <Container>
        <Box>
          <Logo />
          <h2>로그인</h2>
          <br />
          <Input></Input>
          <Input></Input>

          <Button>sign in</Button>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
