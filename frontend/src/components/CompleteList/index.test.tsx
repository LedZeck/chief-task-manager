import { render, screen } from '@testing-library/react';
import CompleteList from './index';
import { useTasksContext } from '../../contexts/TaskContext';

jest.mock('../../contexts/TaskContext');

describe('CompleteList', () => {
  it('renders CompleteList component', () => {
    (useTasksContext as jest.Mock).mockReturnValue({ tasks: [] });
    render(<CompleteList />);
    const table = screen.getByTestId('tasks-table');
    expect(table).toBeInTheDocument();
  });
});
