import {axiosInstance} from './axiosInstance';
import {GET_LIST_POSTS} from './urls';

export const getListPost = () => {
  return axiosInstance.get(GET_LIST_POSTS(1));
};
