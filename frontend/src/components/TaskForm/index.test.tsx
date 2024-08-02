import { screen, render, fireEvent } from '@testing-library/react';
import TaskForm from './index';

const formHandler = jest.fn();

describe('TaskForm', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    HTMLDialogElement.prototype.show = jest.fn();
  });
  it('renders TaskForm component', () => {
    render(<TaskForm submitForm={formHandler} />);
    const form = screen.getByTestId('task-form');
    const titleInput = screen.getByTestId('title-input');
    const descriptionInput = screen.getByTestId('description-input');
    const submitButton = screen.getByTestId('submit-button');

    expect(form).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form', () => {
    const submitFormHandler = jest.fn();
    render(<TaskForm submitForm={formHandler} />);
    const titleInput = screen.getByTestId('title-input');
    const descriptionInput = screen.getByTestId('description-input');
    const submitButton = screen.getByTestId('submit-button');
    submitButton.addEventListener('click', submitFormHandler);

    fireEvent.change(titleInput, { target: { value: 'Task 1' } });
    fireEvent.change(descriptionInput, { target: { value: 'Description 1' } });
    fireEvent.click(submitButton);

    expect(submitFormHandler).toHaveBeenCalledTimes(1);
  });
});
