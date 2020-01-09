import express from 'express';
import {getListReports,deletePost,rejectReports} from '../controllers/admin_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const adminRouter = express.Router();
adminRouter.get('/report/list',checkTokenMiddleware, getListReports);
adminRouter.post('/report/deletePost',checkTokenMiddleware, deletePost);
adminRouter.post('/report/reject',checkTokenMiddleware, rejectReports);
export default adminRouter;
