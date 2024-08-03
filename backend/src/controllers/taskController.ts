import { Request, Response } from 'express';
import connection from '../models/connection';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  Task,
} from '../models/task-models/taskModel';

export interface TaskRequest extends Request {
  body: Task;
}

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).send(new Error('Internal Server Error'));
  }
}

export async function createNewTask(req: Request, res: Response) {
  const task = req.body;
  try {
    const result: Task[] = await createTask(task);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).send(new Error('Internal Server Error'));
  }
}

export const updateTasks = async (req: TaskRequest, res: Response) => {
  const task = req.body;

  try {
    const result = await updateTask(task);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).send(new Error('Internal Server Error'));
  }
};

export const deleteTasks = async (req: TaskRequest, res: Response) => {
  const task = req.body;
  try {
    const result: Task[] = await deleteTask(task.id);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).send(new Error('Internal Server Error'));
  }
};
