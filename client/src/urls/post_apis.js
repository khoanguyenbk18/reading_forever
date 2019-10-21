import {axiosInstance} from './axiosInstance';
import {GET_LIST_POSTS_API} from './urls';

export const getListPost = () => {
  return axiosInstance.get(GET_LIST_POSTS_API(1));
};
