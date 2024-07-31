import TaskModal from '../TaskModal';

function AddTaskbar() {
  const showModalHandler = () => {
    const modal = document.getElementById('task-modal') as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <div className="add-taskbar mt-6">
      <button
        className="btn btn-success btn-block btn-lg"
        onClick={showModalHandler}
      >
        Add New Task
      </button>
      <TaskModal />
    </div>
  );
}

export default AddTaskbar;
