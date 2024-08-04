import express from 'express';
import {
  getTasks,
  createNewTask,
  updateTasks,
  deleteTasks,
} from './controllers/taskController';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createNewTask);
router.put('/tasks', updateTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;
