export const login = (email, password) => {
  // 로그인 액션 생성자 함수
  return {
    type: "LOGIN",
    payload: { email, password },
  };
};

export const signUp = (email, password) => {
  // 회원가입 액션 생성자 함수
  return {
    type: "SIGN_UP",
    payload: { email, password },
  };
};
