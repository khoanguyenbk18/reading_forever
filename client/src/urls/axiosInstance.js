import axios from 'axios';
import {BASE_URL} from './urls';
const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.defaults.timeout = 20000; //Timeout request
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export {axiosInstance};
