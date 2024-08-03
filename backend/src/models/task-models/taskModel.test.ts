import connection from '../connection';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  Task,
} from './taskModel';

jest.mock('../connection');

describe('Task Model', () => {
  describe('getAllTasks', () => {
    it('should return all tasks', async () => {
      const mockTasks: Task[] = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          complete: false,
        },
      ];
      (connection.execute as jest.Mock).mockResolvedValue([mockTasks]);

      const tasks = await getAllTasks();
      expect(tasks).toEqual(mockTasks);
    });

    it('should handle errors', async () => {
      (connection.execute as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      await expect(getAllTasks()).rejects.toThrow('Internal Server Error');
    });
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      const newTask = {
        title: 'Task 1',
        description: 'Description 1',
        complete: false,
      } as Task;
      const mockResult = [
        {
          id: 1,
          title: newTask.title,
          description: newTask.description,
          complete: newTask.complete,
        },
      ];
      (connection.execute as jest.Mock).mockResolvedValue([mockResult]);

      const result = await createTask(newTask);
      expect(result).toEqual(mockResult);
    });

    it('should handle errors', async () => {
      const newTask = {
        title: 'Task 1',
        description: 'Description 1',
        complete: false,
      } as Task;
      (connection.execute as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      await expect(createTask(newTask)).rejects.toThrow(
        'Internal Server Error'
      );
    });
  });

  describe('updateTask', () => {
    it('should update a task', async () => {
      const updatedTask = {
        id: 1,
        title: 'Updated Task',
        description: 'Updated Description',
        complete: true,
      };
      const mockResult = [updatedTask];
      (connection.execute as jest.Mock).mockResolvedValue([mockResult]);

      const result = await updateTask(updatedTask);
      expect(result).toEqual(mockResult);
    });

    it('should handle errors', async () => {
      const updatedTask = {
        id: 1,
        title: 'Updated Task',
        description: 'Updated Description',
        complete: true,
      };
      (connection.execute as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      await expect(updateTask(updatedTask)).rejects.toThrow(
        'Internal Server Error'
      );
    });
  });

  describe('deleteTask', () => {
    it('should delete a task', async () => {
      const mockResult = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          complete: false,
        },
      ];
      (connection.execute as jest.Mock).mockResolvedValue([mockResult]);

      const result = await deleteTask(1);
      expect(result).toEqual(mockResult);
    });

    it('should handle errors', async () => {
      (connection.execute as jest.Mock).mockRejectedValue(
        new Error('Internal Server Error')
      );

      await expect(deleteTask(1)).rejects.toThrow('Internal Server Error');
    });
  });
});
