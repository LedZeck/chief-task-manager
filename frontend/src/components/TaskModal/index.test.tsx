import { render, screen } from '@testing-library/react';
import TaskModal from './index';
import { TaskProvider } from '../../contexts/TaskContext';

describe('TaskModal', () => {
  const renderComponent = () => {
    render(
      <TaskProvider>
        <TaskModal />
      </TaskProvider>
    );
  };
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    HTMLDialogElement.prototype.show = jest.fn();
  });
  it('renders TaskModal component', () => {
    renderComponent();
    const taskModal = screen.getByTestId('task-modal');
    expect(taskModal).toBeInTheDocument();
  });

  it('renders TaskModal component with children components', () => {
    renderComponent();
    const taskModal = screen.getByTestId('task-modal');
    const taskForm = screen.getByTestId('task-form');
    const taskFormTitle = screen.getByTestId('title-input');
    const taskFormDescription = screen.getByTestId('description-input');
    const taskFormSubmit = screen.getByTestId('submit-button');

    expect(taskModal).toBeInTheDocument();
    expect(taskForm).toBeInTheDocument();
    expect(taskFormTitle).toBeInTheDocument();
    expect(taskFormDescription).toBeInTheDocument();
    expect(taskFormSubmit).toBeInTheDocument();
  });
});
