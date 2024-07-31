import React, { createContext, useContext, useReducer } from 'react';
import { Task } from '../models/task.interface';
import { create, destroy, getAll, update } from '../services/task.services';

const taskListMock: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    complete: true,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    complete: false,
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description 4',
    complete: true,
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Description 5',
    complete: false,
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'Description 6',
    complete: true,
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'Description 7',
    complete: false,
  },
  {
    id: 8,
    title: 'Task 8',
    description: 'Description 8',
    complete: true,
  },
];

interface TaskProviderProps {
  children: React.ReactNode;
}

const initialState = {
  tasks: taskListMock,
};

interface TasksContextValue {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

type Action = {
  type: TaskActionTypes;
  payload: Task;
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TaskActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const TaskContext = createContext<TasksContextValue | undefined>(
  undefined
);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = async (task: Task) => {
    const response = await create(task);
    if (response) {
      dispatch({ type: TaskActionTypes.ADD_TASK, payload: response });
    }
  };

  const updateTask = (task: Task) => {
    dispatch({ type: TaskActionTypes.UPDATE_TASK, payload: task });
  };

  const deleteTask = (task: Task) => {
    dispatch({ type: TaskActionTypes.DELETE_TASK, payload: task });
  };

  return (
    <TaskContext.Provider
      value={{ tasks: tasks.tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasksContext must be used within a TasksProvider');
  }
  return context;
};
