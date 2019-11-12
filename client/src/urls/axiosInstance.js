import axios from 'axios';
import {BASE_URL, BASE_URL_LOCAL} from './urls';
const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.defaults.timeout = 20000; //Timeout request
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  axiosInstance.defaults.headers.common['Authorization'] = user.api_token;
}

export {axiosInstance};
