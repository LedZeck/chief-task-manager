import Table from '../Table';
import { useTasksContext } from '../../contexts/TaskContext';

function CompleteList() {
  const { tasks } = useTasksContext();
  return (
    <section data-testid="complete-list">
      <Table tasks={tasks.filter((task) => task.complete)} />;
    </section>
  );
}

export default CompleteList;
