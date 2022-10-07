import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import postsRoutes from './routes/postsRoutes';

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Endpoints
app.use('/api/posts', postsRoutes);

//Error
app.use('/api', (req: Request, res: Response) => {
    res.status(404).send({ message: 'Not found...' })
});

//Connect to database
const dbUri = 'mongodb+srv://Atlas:FlrEAwOMGrOTMsiM@cluster0.mjc1u1p.mongodb.net/PostsDB?retryWrites=true&w=majority';

mongoose.connect(dbUri)
    .then(() => console.log('Connected to the database!'))
    .catch((err) => console.log('Error' + err));


//Start server
app.listen(8000, () => {
    console.log('Server is running on 8000 port!')
});