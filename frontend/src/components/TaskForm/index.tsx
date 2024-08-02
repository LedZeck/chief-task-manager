import { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
import { useTasksContext } from '../../contexts/TaskContext';

interface TaskFormProps {
  submitForm: (form: { title: string; description: string }) => void;
}

function TaskForm({ submitForm }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { selectedTask } = useTasksContext();

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

    if (!title || !description) {
      return;
    }

    submitForm({ title, description });
    setDescription('');
    setTitle('');
    const modal = document.getElementById('task-modal') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedTask]);

  return (
    <form data-testid="task-form">
      <input
        type="text"
        placeholder="Type here"
        className="input input-secondary input-bordered input-lg w-full max-w-xs mb-6"
        onChange={(event) => handleTitle(event)}
        value={title}
        data-testid="title-input"
      />
      <textarea
        className="textarea textarea-secondary textarea-lg w-full max-w-xs mb-6"
        placeholder="Description"
        onChange={(event) => handleDescription(event)}
        value={description}
        data-testid="description-input"
      ></textarea>
      <button
        className="btn btn-success w-full max-w-xs"
        onClick={submitFormHandler}
        data-testid="submit-button"
      >
        Save
      </button>
    </form>
  );
}

export default TaskForm;
