import express from 'express';
import {getListReports,deletePost} from '../controllers/admin_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const adminRouter = express.Router();
adminRouter.get('/report/list',checkTokenMiddleware, getListReports);
adminRouter.delete('/report/deletePost',checkTokenMiddleware, deletePost);
// adminRouter.get('/detail', getPostDetail);
// adminRouter.get('/categories', getListCategories);
// adminRouter.get('/mostpopular', getListMostPopular);
// adminRouter.get('/search', searchPosts);
// adminRouter.get('/list/category', getListPostsByCategory);
// adminRouter.get('/list/pending', checkTokenMiddleware, getListPostsPending);
// adminRouter.post('/accept', checkTokenMiddleware, acceptPost);
// adminRouter.post('/reject', checkTokenMiddleware, rejectPost);
// adminRouter.post('/createPost', checkTokenMiddleware, createPost);
// adminRouter.post('/createComment', checkTokenMiddleware, createComment);
// adminRouter.post('/report', checkTokenMiddleware, reportPost);
export default adminRouter;
