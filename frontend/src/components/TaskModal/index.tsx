import TaskForm from '../TaskForm';
import { useTasksContext } from '../../contexts/TaskContext';

function TaskModal() {
  const { addTask, updateTask, selectedTask, selectTask } = useTasksContext();
  const formHandler = (form: { title: string; description: string }) => {
    console.log(form);
    if (selectedTask) {
      updateTask({ ...selectedTask, ...form });
    } else {
      // addTask(form);
      console.log('addTask');
    }
  };

  const closeModalHandler = () => {
    console.log('close');
    selectTask({ id: 0, title: '', description: '', complete: false });
  };

  return (
    <dialog
      data-testid="task-modal"
      id="task-modal"
      className="modal backdrop-blur-md"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Enter your new task</h3>
        <TaskForm submitForm={formHandler} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button data-testid="close-button" onClick={closeModalHandler}>
          close
        </button>
      </form>
    </dialog>
  );
}

export default TaskModal;
