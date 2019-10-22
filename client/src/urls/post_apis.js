import {axiosInstance} from './axiosInstance';
import {GET_LIST_POSTS_API, GET_LIST_CATEGORIES, GET_LIST_MOST_POPULAR} from './urls';

export const getListPost = pageNumber => {
  return axiosInstance.get(GET_LIST_POSTS_API(pageNumber));
};

export const getListCategories = () => {
  return axiosInstance.get(GET_LIST_CATEGORIES);
};

export const getListMostPopular = () => {
  return axiosInstance.get(GET_LIST_MOST_POPULAR);
};
