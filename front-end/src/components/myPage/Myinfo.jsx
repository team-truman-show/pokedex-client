import PropTypes from "prop-types";

const MyInfo = ({ myInfo }) => {
  return (
    <div>
      <h1>내 정보</h1>
      <p>회원번호: {myInfo.id}</p>
      <p>닉네임: {myInfo.nick}</p>
      <p>이메일: {myInfo.email}</p>
    </div>
  );
};

MyInfo.propTypes = {
  myInfo: PropTypes.object.isRequired,
};

export default MyInfo;
