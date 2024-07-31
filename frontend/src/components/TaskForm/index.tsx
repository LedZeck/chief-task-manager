function TaskForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Type here"
        className="input input-secondary input-bordered input-lg w-full max-w-xs mb-6"
      />
      <textarea
        className="textarea textarea-secondary textarea-lg w-full max-w-xs mb-6"
        placeholder="Description"
      ></textarea>
      <button
        className="btn btn-success w-full max-w-xs"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Save
      </button>
    </form>
  );
}

export default TaskForm;
