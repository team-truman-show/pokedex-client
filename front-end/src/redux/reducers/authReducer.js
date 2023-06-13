const initialState = {
  loggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        loggedIn: false,
        user: null,
      };
    case "SIGN_UP":
      // 회원가입 관련 상태 변경 로직 추가
      // 예를 들어, 회원가입 후 로그인 상태로 변경하는 로직
      return {
        loggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
