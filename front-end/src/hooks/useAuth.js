// hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const isAuthenticated = () => {
    return !!token;
  };

  return {
    token,
    setToken,
    headers,
    API_URL,
    isAuthenticated,
  };
};

export default useAuth;
