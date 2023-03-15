import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUsers from '../middlewares/validateUsers';

const router = Router();

router.post('/', validateUsers, usersController.registerNewUser);

export default router;