import express from 'express';
import {register, login, getUserProfile,editUserProfile} from '../controllers/user_controller';
import {checkTokenMiddleware} from '../middlewares/check_token_middleware';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile', checkTokenMiddleware, getUserProfile);
userRouter.put('/editProfile', checkTokenMiddleware, editUserProfile);
export default userRouter;
