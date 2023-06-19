const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};

const API_URL = import.meta.env.VITE_API_URL;

export { API_URL, headers, token };
