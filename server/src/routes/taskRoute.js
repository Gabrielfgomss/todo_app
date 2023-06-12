import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router
  .get('/tasks', taskController.getAll)
  .post('/tasks', taskController.createTask)
  .patch('/tasks/:taskId', taskController.updateTask);

export default router;
