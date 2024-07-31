import Table from '../Table';
import { useTasksContext } from '../../contexts/TaskContext';

function TodoList() {
  const { tasks } = useTasksContext();
  return <Table tasks={tasks.filter((task) => !task.complete)} />;
}

export default TodoList;
