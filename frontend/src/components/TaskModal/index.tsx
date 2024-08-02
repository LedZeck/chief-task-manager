import TaskForm from '../TaskForm';

function TaskModal() {
  const formHandler = (form: { title: string; description: string }) => {
    console.log(form);
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
        <button data-testid="close-button">close</button>
      </form>
    </dialog>
  );
}

export default TaskModal;
