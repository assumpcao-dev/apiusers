import { Router } from 'express';
import UserController from '../controllers/UserController';

export const usersRouter = Router();
const usersController = new UserController();

usersRouter.post('/', usersController.create)