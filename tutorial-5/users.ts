import express, { Request, Response } from 'express';
import users from './users_data';

export const userRouter = express.Router();

// Login endpoint
userRouter.get('/', async (req: Request, res: Response) => {
    res.json(users);
});