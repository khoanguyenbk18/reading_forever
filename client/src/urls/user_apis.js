import {axiosInstance} from './axiosInstance';
import {REGISTER_API, LOGIN_API} from './urls';

export const register = registerBody => {
  return axiosInstance.post(REGISTER_API, registerBody);
};
export const login = loginBody => {
  return axiosInstance.post(LOGIN_API, loginBody);
};
