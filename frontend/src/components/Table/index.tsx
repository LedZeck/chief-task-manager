function Table() {
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
            <tr>
              <td>Wake Up</td>
              <td>Meeting at 8am</td>
              <td className="space-x-2">
                <button className="btn btn-outline btn-success">
                  Complete
                </button>
                <button className="btn btn-outline btn-secondary">Edit</button>
                <button className="btn btn-outline btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
