import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router
  .get('/users/:userId', userController.getUser)
  .post('/users', userController.createUser);

export default router;
