import axios from "axios";

// 액션 타입 정의
const LOGIN = "LOGIN";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";
const SIGN_UP = "SIGN_UP";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = 'http://127.0.0.1:3000';

export const login = (email, password) => {
  // 로그인 액션 생성자 함수
  // return {
  //   type: "LOGIN",
  //   payload: { email, password },
  // };
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      // 로그인 성공 후에 필요한 동작 수행
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
      // 실패에 따른 에러 처리
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const signUp = (email, password, nick) => {
  // 회원가입 액션 생성자 함수
  // return {
  //   type: "SIGN_UP",
  //   payload: { email, password },
  // };
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/join`, {
        nick,
        email,
        password,
      });
      dispatch({
        type: SIGN_UP,
        payload: response.data,
      });
      // 회원가입 성공 후에 필요한 동작 수행
      dispatch({
        type: LOGIN,
        payload: response.data,
        // 응답 데이터를 페이로드로 전달
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error,
      });
      // 실패에 따른 에러 처리
    }
  };
};
