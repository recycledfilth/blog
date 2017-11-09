import { Router } from 'express';
import categoriesController from './controllers/categories.ctrl';
import postsController from './controllers/posts.ctrl';
import usersController from './controllers/users.ctrl';

const router = Router();

router.use('/categories', categoriesController);
router.use('/posts', postsController);
router.use('/users', usersController);

export default router;