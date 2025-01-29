import { useEffect } from "react";
import toast from "react-hot-toast";
import { getDataApi } from "../utils/fetchDataApi";

const UsersDisplayComponent = ({ users, setUsers }) => {
  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await getDataApi();
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName || user.name.split(" ")[0]}</td>
              <td>{user.lastName || user.name.split(" ")[1]}</td>
              <td>{user.email || "N/A"}</td>
              <td>{user.department || "N/A"}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersDisplayComponent;
