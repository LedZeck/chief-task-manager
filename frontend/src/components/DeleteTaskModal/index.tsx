import { useTasksContext } from '../../contexts/TaskContext';
function DeleteTaskModal() {
  const { selectedTask, deleteTask } = useTasksContext();

  const deleteConfirmHandler = () => {
    const selectedTaskId = selectedTask?.id;
    if (selectedTaskId) {
      deleteTask(selectedTaskId);
    }
  };
  const deleteCancelHandler = () => {
    const modal = document.getElementById(
      'delete-task-modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };
  return (
    <dialog
      data-testid="delete-task-modal"
      id="delete-task-modal"
      className="modal backdrop-blur-md"
    >
      <div className="modal-box">
        <h1
          className="font-bold text-2xl mb-4"
          data-testid="delete-task-modal-title"
        >
          Ooops!
        </h1>
        <h2 className="text-accent text-center mb-8">
          Are you sure you want to delete this task?
        </h2>
        <div className="gap-4 flex justify-end">
          <button
            data-testid="delete-task-modal-submit"
            className="btn btn-success"
            onClick={deleteConfirmHandler}
          >
            Yes
          </button>
          <button
            data-testid="delete-task-modal-cancel"
            className="btn btn-error"
            onClick={deleteCancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button data-testid="close-button">close</button>
      </form>
    </dialog>
  );
}

export default DeleteTaskModal;
