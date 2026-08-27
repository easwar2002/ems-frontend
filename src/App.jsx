import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

import {
    getEmployees,
    deleteEmployee,
    createEmployee,
    updateEmployee
} from "./api/api.js";

function App() {

    const [employees, setEmployees] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [editingEmployee, setEditingEmployee] = useState(null);


    useEffect(() => {
        loadEmployees();
    }, []);


    const loadEmployees = async () => {

        try {

            const response = await getEmployees();

            setEmployees(response.data);

        } catch (error) {

            console.error("Error loading employees:", error);

        }

    };


    // ADD / UPDATE
    const handleSubmit = async (employee) => {

        try {

            if (editingEmployee) {

                // UPDATE
                await updateEmployee(
                    editingEmployee.id,
                    employee
                );

            } else {

                // CREATE
                await createEmployee(employee);

            }

            // Reload employees after save
            await loadEmployees();

            // Close form
            setShowForm(false);

            // Clear editing employee
            setEditingEmployee(null);

        } catch (error) {

            console.error("Error saving employee:", error);

        }

    };


    // EDIT BUTTON
    const handleEdit = (employee) => {

        setEditingEmployee(employee);

        setShowForm(true);

    };


    // DELETE
    const handleDelete = async (id) => {

        try {

            await deleteEmployee(id);

            await loadEmployees();

        } catch (error) {

            console.error("Error deleting employee:", error);

        }

    };


    // ADD BUTTON
    const handleAdd = () => {

        setEditingEmployee(null);

        setShowForm(true);

    };


    // CANCEL
    const handleCancel = () => {

        setEditingEmployee(null);

        setShowForm(false);

    };


    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Employees</h2>

                    <button
                        className="btn btn-primary"
                        onClick={handleAdd}
                    >
                        + Add Employee
                    </button>

                </div>


                {showForm && (

                    <EmployeeForm
                        onSubmit={handleSubmit}
                        editingEmployee={editingEmployee}
                        onCancel={handleCancel}
                    />

                )}


                <EmployeeTable
                    employees={employees}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />

            </div>

        </>
    );
}

export default App;