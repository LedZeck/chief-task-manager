import connection from '../connection';

export type Task = {
  id: number;
  title: string;
  description: string;
  complete: boolean | number;
};

export async function getAllTasks(): Promise<Task[]> {
  const [rows] = await connection.execute('SELECT * FROM tasks');
  return rows as Task[];
}

export const createTask = async (task: Task) => {
  const [result] = await connection.execute(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [task.title, task.description]
  );
  return result as Task[];
};

export const updateTask = async (task: Task): Promise<Task[]> => {
  const [result] = await connection.execute(
    'UPDATE tasks SET title = ?, completed = ? WHERE id = ?',
    [task.title, task.complete, task.id]
  );
  return result as Task[];
};

export const deleteTask = async (id: number) => {
  const [result] = await connection.execute('DELETE FROM tasks WHERE id = ?', [
    id,
  ]);
  return result as Task[];
};
