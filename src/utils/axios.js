import axios from "axios"
export const request = axios.create({
    baseURL:process.env.REACT_APP_API_URL,headers:{Authorization:localStorage.getItem('user_info').token}
})
const userInfo = JSON.parse(localStorage.getItem('user_info'));
export const token = userInfo ? userInfo.token : null;
     
