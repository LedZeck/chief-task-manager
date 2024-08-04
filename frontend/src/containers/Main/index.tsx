import { useEffect } from 'react';
import AddTaskbar from '../../components/AddTaskBar';
import CompleteList from '../../components/CompleteList';
import DeleteTaskModal from '../../components/DeleteTaskModal';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import TodoList from '../../components/TodoList';
import { useTasksContext } from '../../contexts/TaskContext';

function Main() {
  const { fetchTasks } = useTasksContext();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto" data-testid="main">
      <Navbar />
      <Hero />
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
      <DeleteTaskModal />
    </div>
  );
}

export default Main;
