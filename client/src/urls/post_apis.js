import {axiosInstance} from './axiosInstance';
import {
  GET_LIST_POSTS_API,
  GET_LIST_CATEGORIES,
  GET_LIST_MOST_POPULAR,
  GET_SEARCH_LIST_MOST,
  GET_LIST_POSTS_BY_CATEGORY_API
} from './urls';

export const getListPost = pageNumber => {
  return axiosInstance.get(GET_LIST_POSTS_API(pageNumber));
};

export const getListCategories = () => {
  return axiosInstance.get(GET_LIST_CATEGORIES);
};

export const getListMostPopular = () => {
  return axiosInstance.get(GET_LIST_MOST_POPULAR);
};

export const getSearchListPost = queryString => {
  const getlistPostSearch = GET_SEARCH_LIST_MOST(queryString);
  return axiosInstance.get(getlistPostSearch);
};

export const getListPostByCategory = categoryId => {
  const getlistPostSearch = GET_LIST_POSTS_BY_CATEGORY_API(categoryId);
  return axiosInstance.get(getlistPostSearch);
};
