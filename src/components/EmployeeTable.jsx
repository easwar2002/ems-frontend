function EmployeeTable({ employees, onDelete, onEdit }) {

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">

                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {employees.map((employee) => (
                        <tr key={employee.id}>

                            <td>{employee.id}</td>

                            <td>{employee.name}</td>

                            <td>{employee.email}</td>

                            <td>
                                <span className="badge bg-primary">
                                    {employee.department}
                                </span>
                            </td>

                            <td>
                                ₹{employee.salary}
                            </td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                  onClick={() => onEdit(employee)}>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(employee.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
}

export default EmployeeTable;