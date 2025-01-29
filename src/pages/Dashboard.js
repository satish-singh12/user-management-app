import { useState } from "react";
import UsersDisplayComponent from "../components/UsersDisplayComponent";
import UserInputComponent from "../components/UserInputComponent";
import PaginationComponent from "../components/PaginationComponent";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container">
      <h1 className="dashboard-title">User Management Dashboard</h1>

      {/* Add and update user */}
      <UserInputComponent
        users={users}
        setUsers={setUsers}
        formData={formData}
        setFormData={setFormData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      {/* List all users */}
      <UsersDisplayComponent
        users={users}
        setUsers={setUsers}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        currentUsers={currentUsers}
      />

      {/* Pagination */}
      <PaginationComponent
        users={users}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
