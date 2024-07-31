import { Task } from '../../models/task.interface';

export interface TableProps {
  tasks: Task[];
}

function Table({ tasks }: TableProps) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
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
                  <button className="btn btn-outline btn-success">
                    {task.complete ? 'Completed' : 'Incomplete'}
                  </button>
                  <button className="btn btn-outline btn-secondary">
                    Edit
                  </button>
                  <button className="btn btn-outline btn-error">Delete</button>
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
