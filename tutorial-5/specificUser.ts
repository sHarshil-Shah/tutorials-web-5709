import express, { Request, Response } from 'express';
import users from './users_data';

export const specificUserRouter = express.Router();

// Login endpoint
specificUserRouter.get('/:id', async (req: Request, res: Response) => {
    res.json({
        success: true,
        user: users.find((user) => user.id === req.params.id)
    })
});