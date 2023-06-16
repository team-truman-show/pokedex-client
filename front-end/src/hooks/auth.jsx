// import axios from "axios";
// import { useEffect, useState } from "react";
// import { loginUser } from "/@/services/api";
// import Cookies from "js-cookie";

// const API_URL = import.meta.env.VITE_API_URL;

// export const useAuth = () => {
//   const [accessToken, setAccessToken] = useState("");

//   useEffect(() => {
//     const savedAccessToken = Cookies.get("accessToken");
//     setAccessToken(savedAccessToken);
//   }, []);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await loginUser(email, password);
//       const { accessToken, refreshToken } = response;

//       Cookies.set("accessToken", accessToken);
//       Cookies.set("refreshToken", refreshToken);

//       setAccessToken(accessToken);
//     } catch (error) {
//       console.error("로그인에 실패했습니다.", error);
//     }
//   };

//   const refreshToken = async () => {
//     try {
//       const refreshToken = Cookies.get("refreshToken");

//       const response = await axios.post(`${API_URL}/refresh-token`, {
//         refreshToken,
//       });

//       const newAccessToken = response.data.accessToken;

//       Cookies.set("accessToken", newAccessToken);

//       setAccessToken(newAccessToken);
//     } catch (error) {
//       console.error("액세스 토큰 갱신에 실패했습니다.", error);
//     }
//   };

//   return {
//     accessToken,
//     handleLogin,
//     refreshToken,
//   };
// };
