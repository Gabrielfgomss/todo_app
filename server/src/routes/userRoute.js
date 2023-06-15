import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router
  .post('/auth/user', userController.getUser)
  .post('/users', userController.createUser);

export default router;
