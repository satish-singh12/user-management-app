import { useState } from "react";
import UsersDisplayComponent from "../components/UsersDisplayComponent";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <h1 className="dashboard-title">User Management Dashboard</h1>

      {/* List all users */}
      <UsersDisplayComponent users={users} setUsers={setUsers} />
    </div>
  );
};

export default Dashboard;
