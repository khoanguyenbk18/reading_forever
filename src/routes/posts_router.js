import express from 'express';
import {
  getListPosts,
  getListCategories,
  getListMostPopular,
  searchPosts
} from '../controllers/post_controller';

const postRouter = express.Router();
postRouter.get('/list', getListPosts);
postRouter.get('/categories', getListCategories);
postRouter.get('/mostpopular', getListMostPopular);
postRouter.get('/search', searchPosts);
export default postRouter;
