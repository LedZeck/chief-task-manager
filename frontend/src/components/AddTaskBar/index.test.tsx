import { render, screen, fireEvent } from '@testing-library/react';

import AddTaskBar from './index';

describe('AddTaskBar', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    HTMLDialogElement.prototype.show = jest.fn();
  });
  it('renders AddTaskBar component', () => {
    render(<AddTaskBar />);
    const addTaskButton = screen.getByTestId('add-task-button');
    expect(addTaskButton).toBeInTheDocument();
    expect(addTaskButton).toHaveTextContent('Add New Task');
  });

  it('renders TaskModal component at Add Task Button Click', () => {
    render(<AddTaskBar />);
    const addTaskButton = screen.getByTestId('add-task-button');
    const showModalHandler = jest.fn();
    const taskModal = screen.getByTestId('task-modal');

    addTaskButton.addEventListener('click', showModalHandler);
    fireEvent.click(addTaskButton);

    expect(showModalHandler).toHaveBeenCalledTimes(1);
    expect(taskModal).toBeInTheDocument();
  });
});
