// loginPage.js
import LoginForm from "/@/components/form/LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false); // 초기값은 false로 설정

  return (
    <div>
      <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />
      {/* setIsLogin을 전달 */}
    </div>
  );
};

export default LoginPage;
