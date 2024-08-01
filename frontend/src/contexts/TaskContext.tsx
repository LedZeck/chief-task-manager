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

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  loaded: boolean;
}

const initialState: TasksState = {
  tasks: taskListMock,
  loading: false,
  error: null,
  loaded: false,
};

interface TasksContextValue {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  loaded: boolean;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

export enum TaskActionTypes {
  FETCH_TASKS = 'FETCH_TASKS',
  FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR',
  ADD_TASK = 'ADD_TASK',
  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS',
  ADD_TASK_ERROR = 'ADD_TASK_ERROR',
  UPDATE_TASK = 'UPDATE_TASK',
  UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS',
  UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
}

type Action =
  | { type: TaskActionTypes.ADD_TASK; payload: Task }
  | { type: TaskActionTypes.ADD_TASK_SUCCESS; payload: Task }
  | { type: TaskActionTypes.ADD_TASK_ERROR; payload: string }
  | { type: TaskActionTypes.UPDATE_TASK; payload: Task }
  | { type: TaskActionTypes.UPDATE_TASK_SUCCESS; payload: Task }
  | { type: TaskActionTypes.UPDATE_TASK_ERROR; payload: string }
  | { type: TaskActionTypes.DELETE_TASK; payload: number }
  | { type: TaskActionTypes.DELETE_TASK_SUCCESS; payload: number }
  | { type: TaskActionTypes.DELETE_TASK_ERROR; payload: string }
  | { type: TaskActionTypes.FETCH_TASKS }
  | { type: TaskActionTypes.FETCH_TASKS_SUCCESS; payload: Task[] }
  | { type: TaskActionTypes.FETCH_TASKS_ERROR; payload: string };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
    case TaskActionTypes.UPDATE_TASK:
    case TaskActionTypes.DELETE_TASK:
    case TaskActionTypes.FETCH_TASKS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case TaskActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
        loaded: true,
      };
    case TaskActionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        loading: false,
        loaded: true,
      };
    case TaskActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
        loaded: true,
      };
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        loaded: true,
      };
    case TaskActionTypes.ADD_TASK_ERROR:
    case TaskActionTypes.UPDATE_TASK_ERROR:
    case TaskActionTypes.DELETE_TASK_ERROR:
    case TaskActionTypes.FETCH_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
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

  const deleteTask = (taskId: number) => {
    dispatch({ type: TaskActionTypes.DELETE_TASK, payload: taskId });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks.tasks,
        loading: tasks.loading,
        error: tasks.error,
        loaded: tasks.loaded,
        addTask,
        updateTask,
        deleteTask,
      }}
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
