import { render, screen, act } from '@testing-library/react';
import { TaskProvider, useTasksContext } from './TaskContext';
import { useContext } from 'react';

// Mock the useContext hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const TestComponent = () => {
  const { tasks, deleteTask } = useTasksContext();
  return (
    <div>
      <button onClick={() => deleteTask(1)}>Test</button>
      {tasks.map((task, index) => (
        <div data-testid="task-item-mock" key={index}>
          {task.id}
        </div>
      ))}
    </div>
  );
};

const renderComponent = () => {
  render(
    <TaskProvider>
      <TestComponent />
    </TaskProvider>
  );
};

describe('TaskContext', () => {
  it('should render component', () => {
    (useContext as jest.Mock).mockReturnValue({
      tasks: [
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
      ],
    });
    renderComponent();
    const button = screen.getByRole('button');
    const taskItems = screen.getAllByTestId('task-item-mock');
    expect(button).toBeInTheDocument();
    expect(taskItems).toHaveLength(2);
  });

  it('should delete task', () => {
    const mockDeleteTask = jest.fn();
    (useContext as jest.Mock).mockReturnValue({
      tasks: [
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
      ],
      deleteTask: mockDeleteTask,
    });
    renderComponent();
    const button = screen.getByRole('button');
    const taskItems = screen.getAllByTestId('task-item-mock');

    act(() => {
      button.click();
    });

    expect(mockDeleteTask).toHaveBeenCalledWith(1);
    expect(taskItems).toHaveLength(2);
  });
});
