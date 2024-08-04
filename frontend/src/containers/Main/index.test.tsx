import { render, screen } from '@testing-library/react';
import Main from './index';
import { TaskProvider } from '../../contexts/TaskContext';

describe('Main', () => {
  const renderComponent = () => {
    render(
      <TaskProvider>
        <Main />
      </TaskProvider>
    );
  };
  it('renders Main component', () => {
    renderComponent();
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });
  it('renders Main component with children components', () => {
    renderComponent();
    const hero = screen.getByTestId('hero');
    const addTaskBar = screen.getByTestId('add-task-bar');
    const todoList = screen.getByTestId('todo-list');
    const completeList = screen.getByTestId('complete-list');

    expect(hero).toBeInTheDocument();
    expect(addTaskBar).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
    expect(completeList).toBeInTheDocument();
  });
});
