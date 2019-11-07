import express from 'express';
import {getListReports,deletePost} from '../controllers/admin_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const adminRouter = express.Router();
adminRouter.get('/report/list',checkTokenMiddleware, getListReports);
adminRouter.delete('/report/deletePost',checkTokenMiddleware, deletePost);
export default adminRouter;
