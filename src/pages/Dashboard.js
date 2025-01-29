import { useState } from "react";
import UsersDisplayComponent from "../components/UsersDisplayComponent";
import UserInputComponent from "../components/UserInputComponent";

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
      />
    </div>
  );
};

export default Dashboard;
