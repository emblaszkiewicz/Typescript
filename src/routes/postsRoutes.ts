import express from "express";
import controller from '../controllers/postsControllers';

const router = express.Router();

router.get('/', controller.getPost);
router.post('/', controller.addPost);

export default router;