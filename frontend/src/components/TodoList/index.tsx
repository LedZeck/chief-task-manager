import Table from '../Table';
import { useTasksContext } from '../../contexts/TaskContext';

function TodoList() {
  const { tasks } = useTasksContext();
  return (
    <section data-testid="todo-list">
      <Table tasks={tasks.filter((task) => !task.complete)} />
    </section>
  );
}

export default TodoList;
