import PropTypes from "prop-types";
import {
  Wrapper,
  Note,
  NoteImage,
  Body,
  Ball,
  Title,
  Contents,
} from "../../styles/myInfo.style";

const MyInfo = ({ myInfo }) => {
  return (
    <Wrapper>
      <Note>
        <NoteImage src="./Image/note.jpg" alt="Note" />
        <Ball src="./Image/ball.png" alt="Ball" />
        <Body>
          <Title>내 정보</Title>
          <Contents>
            <p>회원번호: {myInfo.id}</p>
            <p>닉네임: {myInfo.nick}</p>
            <p>이메일: {myInfo.email}</p>
          </Contents>
        </Body>
      </Note>
    </Wrapper>
  );
};

MyInfo.propTypes = {
  myInfo: PropTypes.object.isRequired,
};

export default MyInfo;
