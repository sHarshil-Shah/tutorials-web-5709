import { v4 as uuidv4 } from 'uuid';
import express, { Request, Response } from 'express';
import users from './users_data';

export const addRouter = express.Router();

// Login endpoint
addRouter.post('/', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        console.log(req.body);
        const { email, firstName } = req.body;
        if (!email || !firstName) {
            return res.status(400).json({ message: 'firstName or email not found in body', success: false });
        }
        console.log(id, email, firstName);
        // Find the user by ID
        const user = users.push({
            id: uuidv4(), email: email, firstName: firstName,
            lastName: '',
            title: '',
            picture: ''
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        return res.json({
            message: "User added",
            success: true
        }
        );
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', success: false });
    }
});