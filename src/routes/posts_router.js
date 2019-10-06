import express from 'express';
import {getLastedPost} from '../controllers/user_controller';

const postRouter = express.Router();
postRouter.get('/LastedPost',getLastedPost);
export default postRouter;
