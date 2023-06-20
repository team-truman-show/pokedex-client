import PropTypes from "prop-types";
import { useState } from "react";
import { myPWchange } from "../../api/userAPI";

const PasswordChangeModal = ({ closeModal }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    try {
      await myPWchange(newPassword);
      setSuccessMessage("비밀번호 변경 성공!");
      setErrorMessage("");
      closeModal();
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("비밀번호 변경 실패: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlePasswordChange}>
        <h2>비밀번호 변경</h2>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="password"
          name="newPassword"
          placeholder="새로운 비밀번호"
        />
        <button type="submit">변경하기</button>
      </form>
      <button onClick={closeModal}>취소</button>
    </div>
  );
};

PasswordChangeModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default PasswordChangeModal;
