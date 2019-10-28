import express from 'express';
import {
  getListPosts,
  getListCategories,
  getListMostPopular,
  searchPosts,
  getListPostsByCategory,
  getListPostsPending,
  acceptPost,
  rejectPost
} from '../controllers/post_controller';

const postRouter = express.Router();
postRouter.get('/list', getListPosts);
postRouter.get('/categories', getListCategories);
postRouter.get('/mostpopular', getListMostPopular);
postRouter.get('/search', searchPosts);
postRouter.get('/list/category', getListPostsByCategory);
postRouter.get('/list/pending', getListPostsPending);
postRouter.post('/accept', acceptPost);
postRouter.post('/reject', rejectPost);
export default postRouter;
