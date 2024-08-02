import { screen, render, fireEvent } from '@testing-library/react';
import Table from './index';
import { TaskProvider } from '../../contexts/TaskContext';

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

const renderComponent = () => {
  render(
    <TaskProvider>
      <Table tasks={tasksMock} />
    </TaskProvider>
  );
};

describe('Table', () => {
  it('renders Table component', () => {
    render(
      <TaskProvider>
        <Table tasks={[]} />
      </TaskProvider>
    );
    const table = screen.getByTestId('tasks-table');
    expect(table).toBeInTheDocument();
  });

  it('renders Table component with tasks', () => {
    renderComponent();
    const table = screen.getByTestId('tasks-table');
    expect(table).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders Table component with tasks and actions', () => {
    renderComponent();
    const table = screen.getByTestId('tasks-table');
    expect(table).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(6);
  });

  it('renders TaskModal when Edit button is clicked', () => {
    renderComponent();
    const taskClickHandler = jest.fn();
    const editButton = screen.getAllByRole('button')[1];
    const table = screen.getByTestId('tasks-table');

    expect(table).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(editButton).toBeInTheDocument();

    editButton.addEventListener('click', taskClickHandler);
    fireEvent.click(editButton);

    expect(taskClickHandler).toHaveBeenCalledTimes(1);
  });
});
