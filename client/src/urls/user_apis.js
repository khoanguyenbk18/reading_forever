import {axiosInstance} from './axiosInstance';
import {REGISTER_API, LOGIN_API, GET_PROFILE_API, UPDATE_PROFILE_API} from './urls';

export const register = registerBody => {
  return axiosInstance.post(REGISTER_API, registerBody);
};
export const login = loginBody => {
  return axiosInstance.post(LOGIN_API, loginBody);
};

export const getProfile = () => {
  return axiosInstance.get(GET_PROFILE_API);
};
export const updateProfile = updateProfileBody => {
  return axiosInstance.put(UPDATE_PROFILE_API, updateProfileBody);
};
