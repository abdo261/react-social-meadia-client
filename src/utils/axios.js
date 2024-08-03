import axios from "axios";

let userInfo = null;
try {
  userInfo = JSON.parse(localStorage.getItem("user_info"));
} catch (e) {
  console.error("Error parsing user_info from localStorage", e);
}

export const token = userInfo ? userInfo.token : null;

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

if (token) {
  request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
