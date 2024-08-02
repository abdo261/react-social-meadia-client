import axios from "axios";

// Retrieve user info from local storage
let userInfo = null;
try {
  userInfo = JSON.parse(localStorage.getItem('user_info'));
} catch (e) {
  console.error('Error parsing user_info from localStorage', e);
}

// Extract token if user info is available
export const token = userInfo ? userInfo.token : null;

// Create Axios instance with base URL and conditional headers
export const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Ensure this is defined in your .env file
});

// Conditionally set the Authorization header if token is available
if (token) {
    request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
