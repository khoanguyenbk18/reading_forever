import express from 'express';
import {
  getListPosts,
  getListCategories,
  getListMostPopular,
  searchPosts,
  getListPostsByCategory,
  getListPostsPending,
  acceptPost,
  rejectPost,
  createPost,
  getPostDetail,
  createComment
} from '../controllers/post_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const postRouter = express.Router();
postRouter.get('/list', getListPosts);
postRouter.get('/detail', getPostDetail);
postRouter.get('/categories', getListCategories);
postRouter.get('/mostpopular', getListMostPopular);
postRouter.get('/search', searchPosts);
postRouter.get('/list/category', getListPostsByCategory);
postRouter.get('/list/pending', checkTokenMiddleware, getListPostsPending);
postRouter.post('/accept', checkTokenMiddleware, acceptPost);
postRouter.post('/reject', checkTokenMiddleware, rejectPost);
postRouter.post('/createPost', checkTokenMiddleware, createPost);
postRouter.post('/createComment', checkTokenMiddleware, createComment);
export default postRouter;
