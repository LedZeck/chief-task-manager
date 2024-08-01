import { ChangeEvent, useState, MouseEvent } from 'react';

interface TaskFormProps {
  submitForm: (form: { title: string; description: string }) => void;
}

function TaskForm({ submitForm }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const title = e.target.value;
    setTitle(title);
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const description = e.target.value;
    setDescription(description);
  };

  const submitFormHandler = (e: MouseEvent) => {
    e.preventDefault();
    submitForm({ title, description });
    setDescription('');
    setTitle('');
    const modal = document.getElementById('task-modal') as HTMLDialogElement;
    modal.close();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Type here"
        className="input input-secondary input-bordered input-lg w-full max-w-xs mb-6"
        onChange={(event) => handleTitle(event)}
        value={title}
      />
      <textarea
        className="textarea textarea-secondary textarea-lg w-full max-w-xs mb-6"
        placeholder="Description"
        onChange={(event) => handleDescription(event)}
        value={description}
      ></textarea>
      <button
        className="btn btn-success w-full max-w-xs"
        onClick={submitFormHandler}
      >
        Save
      </button>
    </form>
  );
}

export default TaskForm;
