import { Task } from '../../models/task.interface';

export interface TableProps {
  tasks: Task[];
}

enum TaskAction {
  SELECTED = 'Selected',
  EDIT = 'Edit',
  DELETE = 'Delete',
}

function Table({ tasks }: TableProps) {
  const taskClickHandler = (id: number, action: string) => {
    switch (action) {
      case TaskAction.SELECTED:
        console.log('Selected');
        break;
      case TaskAction.EDIT:
        openEditDialog(id);
        break;
      case TaskAction.DELETE:
        console.log('Delete');
        break;
      default:
        console.log('Invalid action');
    }
  };

  const openEditDialog = (id: number) => {
    const modal = document.getElementById('task-modal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table" data-testid="tasks-table">
          {/* head */}
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td className="space-x-2">
                  <button
                    className="btn btn-outline btn-success"
                    onClick={() => {
                      if (task.id) {
                        taskClickHandler(task.id, TaskAction.SELECTED);
                      }
                    }}
                  >
                    {task.complete ? 'Completed' : 'Incomplete'}
                  </button>
                  <button
                    className="btn btn-outline btn-secondary"
                    onClick={() => {
                      if (task.id) {
                        taskClickHandler(task.id, TaskAction.EDIT);
                      }
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => {
                      if (task.id) {
                        taskClickHandler(task.id, TaskAction.DELETE);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
