import TaskModal from '../TaskModal';

function AddTaskbar() {
  const showModalHandler = () => {
    const modal = document.getElementById('task-modal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="add-taskbar mt-6" data-testid="add-task-bar">
      <button
        className="btn btn-success btn-block btn-lg"
        onClick={() => showModalHandler()}
        data-testid="add-task-button"
      >
        Add New Task
      </button>
      <TaskModal />
    </div>
  );
}

export default AddTaskbar;
