import { Container, Button, Input, Logo, Box } from "./styles/login.style";

const JoinPage = () => {
  return (
    <>
      <Container>
        <Box>
          <Logo />
          <h3>회원가입</h3>
          <br />
          <Input></Input>
          <Input></Input>
          <Input></Input>

          <Button>가입</Button>
        </Box>
      </Container>
    </>
  );
};

export default JoinPage;
