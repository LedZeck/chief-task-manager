import AddTaskbar from '../../components/AddTaskBar';
import CompleteList from '../../components/CompleteList';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import TodoList from '../../components/TodoList';

import { TaskProvider } from '../../contexts/TaskContext';

function Main() {
  return (
    <div className="container mx-auto" data-testid="main">
      <Navbar />
      <Hero />
      <TaskProvider>
        <>
          <AddTaskbar />
        </>
        <div className="flex w-full flex-col lg:flex-row mt-6">
          <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
            <TodoList />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
            <CompleteList />
          </div>
        </div>
      </TaskProvider>
    </div>
  );
}

export default Main;
