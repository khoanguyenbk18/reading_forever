export const BASE_URL = 'https://reading-forever.herokuapp.com';
export const BASE_URL_LOCAL = 'http://localhost:5000';
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

export const GET_LIST_MOST_PENDING = `/api/${API_VERSION}/${API_POSTS}/list/pending`;
export const ACCEPT_POST_PENDING = `/api/${API_VERSION}/${API_POSTS}/accept`;
export const REJECT_POST_PENDING = `/api/${API_VERSION}/${API_POSTS}/reject`;
export const CREATE_POST = `/api/${API_VERSION}/${API_POSTS}/createPost`;
export const CREATE_COMMENT = `/api/${API_VERSION}/${API_POSTS}/createComment`;
export const GET_POST_DETAIL = postId => `/api/${API_VERSION}/${API_POSTS}/detail?postId=${postId}`;
export const REPORT_POST = `/api/${API_VERSION}/${API_POSTS}/report`;

//USER APIs
export const REGISTER_API = `/api/${API_VERSION}/${API_USERS}/register`;
export const LOGIN_API = `/api/${API_VERSION}/${API_USERS}/login`;
export const GET_PROFILE_API = `/api/${API_VERSION}/${API_USERS}/profile`;
export const UPDATE_PROFILE_API = `/api/${API_VERSION}/${API_USERS}/editProfile`;
