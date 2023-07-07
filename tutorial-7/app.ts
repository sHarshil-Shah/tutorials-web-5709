import express, { Request, Response } from 'express';
import { userRouter } from './users';
import { updateRouter } from './update';
import { addRouter } from './add';
import { specificUserRouter } from './specificUser';
// Create Express app
const app = express();
app.use(express.json());

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.use('/users',userRouter);
app.use('/update',updateRouter);
app.use('/add',addRouter);
app.use('/user', specificUserRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
