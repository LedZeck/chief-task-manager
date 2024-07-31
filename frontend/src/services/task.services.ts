import axios from 'axios';
import { Task } from '../models/task.interface';

const API_URL = 'http://localhost:5000/tasks';

export const getAll = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const create = async (task: Task) => {
  try {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const update = async (task: Task) => {
  try {
    const response = await axios.put<Task>(`${API_URL}/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const destroy = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
