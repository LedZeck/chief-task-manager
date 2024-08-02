import { render, screen } from '@testing-library/react';
import TodoList from './index';
import { useTasksContext } from '../../contexts/TaskContext';

jest.mock('../../contexts/TaskContext');

const tasksMock = [
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
];

describe('TodoList', () => {
  it('renders TodoList component', () => {
    (useTasksContext as jest.Mock).mockReturnValue({ tasks: tasksMock });
    render(<TodoList />);
    const table = screen.getByTestId('tasks-table');
    expect(table).toBeInTheDocument();
  });
});
