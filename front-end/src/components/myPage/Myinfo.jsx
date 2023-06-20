import PropTypes from "prop-types";
import { MonsterBall } from "/@/styles/myPage.style";

const MyInfo = ({ myInfo }) => {
  return (
    <div>
      <h1>내 정보</h1>
      <div>
        <div>
          <p>회원번호: {myInfo.id}</p>
          <p>닉네임: {myInfo.nick}</p>
          <p>이메일: {myInfo.email}</p>
        </div>
        <div>
          <MonsterBall />
        </div>
      </div>
    </div>
  );
};

MyInfo.propTypes = {
  myInfo: PropTypes.object.isRequired,
};

export default MyInfo;
