import { Request, Response } from "express";
import Post from '../models/Post';

const getPost = async (req: Request, res: Response) => {
    try {
        res.send(await Post.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const addPost = async (req: Request, res: Response) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export default { getPost, addPost };