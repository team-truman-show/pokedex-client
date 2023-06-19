// hooks/useToken.js
import { useState, useEffect } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const userToken = getToken();
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  return {
    token,
    saveToken,
    removeToken,
  };
};

export default useToken;
