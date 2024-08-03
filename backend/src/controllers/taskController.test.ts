import request from 'supertest';
import express, { Express } from 'express';
import {
  getTasks,
  createNewTask,
  updateTasks,
  deleteTasks,
} from './taskController';
import * as taskModel from '../models/task-models/taskModel';

const app: Express = express();
app.use(express.json());

app.get('/tasks', getTasks);
app.post('/tasks', createNewTask);
app.put('/tasks', updateTasks);
app.delete('/tasks', deleteTasks);

jest.mock('../models/task-models/taskModel');

describe('Task Controller', () => {
  describe('GET /tasks', () => {
    it('should return 200 and a list of tasks', async () => {
      const mockTasks = [
        { id: 1, title: 'Test Task', description: 'Test Description' },
      ];
      (taskModel.getAllTasks as jest.Mock).mockResolvedValue(mockTasks);

      const response = await request(app).get('/tasks');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTasks);
    });

    it('should return 500 on error', async () => {
      (taskModel.getAllTasks as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      const response = await request(app).get('/tasks');
      expect(response.status).toBe(500);
    });
  });

  describe('POST /tasks', () => {
    it('should return 201 and create a new task', async () => {
      const newTask = { title: 'New Task', description: 'New Description' };
      const createdTask = [{ id: 1, ...newTask }];
      (taskModel.createTask as jest.Mock).mockResolvedValue(createdTask);

      const response = await request(app).post('/tasks').send(newTask);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdTask);
    });

    it('should return 500 on error', async () => {
      const newTask = { title: 'New Task', description: 'New Description' };
      (taskModel.createTask as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      const response = await request(app).post('/tasks').send(newTask);
      expect(response.status).toBe(500);
    });
  });

  describe('PUT /tasks', () => {
    it('should return 201 and update the task', async () => {
      const updatedTask = {
        id: 1,
        title: 'Updated Task',
        description: 'Updated Description',
      };
      (taskModel.updateTask as jest.Mock).mockResolvedValue(updatedTask);

      const response = await request(app).put('/tasks').send(updatedTask);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(updatedTask);
    });

    it('should return 500 on error', async () => {
      const updatedTask = {
        id: 1,
        title: 'Updated Task',
        description: 'Updated Description',
      };
      (taskModel.updateTask as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      const response = await request(app).put('/tasks').send(updatedTask);
      expect(response.status).toBe(500);
    });
  });

  describe('DELETE /tasks', () => {
    it('should return 201 and delete the task', async () => {
      const taskToDelete = { id: 1 };
      const deletedTask = [
        { id: 1, title: 'Deleted Task', description: 'Deleted Description' },
      ];
      (taskModel.deleteTask as jest.Mock).mockResolvedValue(deletedTask);

      const response = await request(app).delete('/tasks').send(taskToDelete);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(deletedTask);
    });

    it('should return 500 on error', async () => {
      const taskToDelete = { id: 1 };
      (taskModel.deleteTask as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      const response = await request(app).delete('/tasks').send(taskToDelete);
      expect(response.status).toBe(500);
    });
  });
});
