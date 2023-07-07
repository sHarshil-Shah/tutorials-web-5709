import express, { Request, Response } from 'express';
import users from './users_data';

export const updateRouter = express.Router();

// Login endpoint
updateRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        console.log(req.body);
        const { email, firstName } = req.body;
        console.log(id, email, firstName);
        // Find the user by ID
        const user = users.find((user) => user.id === id);

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        // Update the user object
        user.email = email;
        user.firstName = firstName;

        return res.json({ message: 'User updated', success: true });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', success: false });
    }
});