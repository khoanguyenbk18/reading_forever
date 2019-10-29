import express from 'express';
import {register, login, getUserProfile} from '../controllers/user_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile', checkTokenMiddleware, getUserProfile);

export default userRouter;
