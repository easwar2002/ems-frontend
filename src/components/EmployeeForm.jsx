import { useEffect, useState } from "react";

function EmployeeForm({ onSubmit, editingEmployee, onCancel }) {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    useEffect(() => {

        if (editingEmployee) {
            setEmployee({
                name: editingEmployee.name,
                email: editingEmployee.email,
                department: editingEmployee.department,
                salary: editingEmployee.salary
            });
        } else {
            setEmployee({
                name: "",
                email: "",
                department: "",
                salary: ""
            });
        }

    }, [editingEmployee]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit({
            ...employee,
            salary: Number(employee.salary)
        });
    };

    return (
        <div className="card shadow-sm mb-4">

            <div className="card-header">
                <h5 className="mb-0">
                    {editingEmployee ? "Update Employee" : "Add Employee"}
                </h5>
            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={employee.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={employee.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">
                                Department
                            </label>

                            <input
                                type="text"
                                name="department"
                                className="form-control"
                                value={employee.department}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">
                                Salary
                            </label>

                            <input
                                type="number"
                                name="salary"
                                className="form-control"
                                value={employee.salary}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success me-2"
                    >
                        {editingEmployee ? "Update Employee" : "Add Employee"}
                    </button>

                    {editingEmployee && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    )}

                </form>

            </div>

        </div>
    );
}

export default EmployeeForm;