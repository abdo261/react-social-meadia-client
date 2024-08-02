import axios from "axios"
const userInfo = JSON.parse(localStorage.getItem('user_info'));
export const token = userInfo ? userInfo?.token : null;
export const request = axios.create({
    baseURL:process.env.REACT_APP_API_URL,headers:{ Authorization: token ? `Bearer ${token}` : ''}
})

     
