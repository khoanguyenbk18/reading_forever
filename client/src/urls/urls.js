export const BASE_URL = 'http://localhost:5000';
const API_VERSION = 'v1';
const API_POSTS = 'posts';
export const GET_LIST_POSTS = (pageNumber=1) => `/api/${API_VERSION}/${API_POSTS}/list?pageNumer=${pageNumber}`;
