export const BASE_URL = 'http://localhost:5000';
const API_VERSION = 'v1';
const API_POSTS = 'posts';
const API_USERS = 'users';
//POST APIs
export const GET_LIST_POSTS_API = (pageNumber = 1) =>
  `/api/${API_VERSION}/${API_POSTS}/list?pageNumber=${pageNumber}`;

export const GET_LIST_POSTS_BY_CATEGORY_API = (categoryId = 1) =>
  `/api/${API_VERSION}/${API_POSTS}/list/category?categoryId=${categoryId}`;

export const GET_LIST_CATEGORIES = `/api/${API_VERSION}/${API_POSTS}/categories`;
export const GET_LIST_MOST_POPULAR = `/api/${API_VERSION}/${API_POSTS}/mostpopular`;
export const GET_SEARCH_LIST_MOST = queryString =>
  `/api/${API_VERSION}/${API_POSTS}/search?queryString=${queryString}`;

//USER APIs
export const REGISTER_API = `/api/${API_VERSION}/${API_USERS}/register`;
export const LOGIN_API = `/api/${API_VERSION}/${API_USERS}/login`;
