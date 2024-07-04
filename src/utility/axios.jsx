import axios from 'axios';
import Cookies from "js-cookie";


const token = Cookies.get('access_token')


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    timeout: 5000,  
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `JWT ${token}`
    }, 
});

export default axiosInstance;