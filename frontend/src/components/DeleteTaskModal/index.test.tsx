import { render, screen } from '@testing-library/react';
import DeleteTaskModal from './index';
import { TaskProvider } from '../../contexts/TaskContext';

describe('DeleteTaskModal', () => {
  const renderComponent = () => {
    render(
      <TaskProvider>
        <DeleteTaskModal />
      </TaskProvider>
    );
  };
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    HTMLDialogElement.prototype.show = jest.fn();
  });
  it('renders DeleteTaskModal component', () => {
    renderComponent();
    const deleteTaskModal = screen.getByTestId('delete-task-modal');
    expect(deleteTaskModal).toBeInTheDocument();
  });

  it('renders DeleteTaskModal component with children components', () => {
    renderComponent();
    const deleteTaskModal = screen.getByTestId('delete-task-modal');
    const deleteTaskModalTitle = screen.getByTestId('delete-task-modal-title');
    const deleteTaskModalSubmit = screen.getByTestId(
      'delete-task-modal-submit'
    );
    const deleteTaskModalCancel = screen.getByTestId(
      'delete-task-modal-cancel'
    );

    expect(deleteTaskModal).toBeInTheDocument();
    expect(deleteTaskModalTitle).toBeInTheDocument();
    expect(deleteTaskModalSubmit).toBeInTheDocument();
    expect(deleteTaskModalCancel).toBeInTheDocument();
  });

  it('should call deleteCancelHandler when Cancel button is clicked', () => {
    renderComponent();
    const deleteCancelHandler = jest.fn();
    const deleteTaskModalCancel = screen.getByTestId(
      'delete-task-modal-cancel'
    );
    deleteTaskModalCancel.addEventListener('click', deleteCancelHandler);
    deleteTaskModalCancel.click();
    expect(deleteCancelHandler).toHaveBeenCalledTimes(1);
  });

  it('should call deleteConfirmHandler when Confirm button is clicked', () => {
    renderComponent();
    const deleteConfirmHandler = jest.fn();
    const deleteTaskModalSubmit = screen.getByTestId(
      'delete-task-modal-submit'
    );
    deleteTaskModalSubmit.addEventListener('click', deleteConfirmHandler);
    deleteTaskModalSubmit.click();
    expect(deleteConfirmHandler).toHaveBeenCalledTimes(1);
  });
});
