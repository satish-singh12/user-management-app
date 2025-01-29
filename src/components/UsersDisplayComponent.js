import { useEffect } from "react";
import toast from "react-hot-toast";
import { getDataApi } from "../utils/fetchDataApi";

const UsersDisplayComponent = ({
  users,
  setUsers,
  setFormData,
  setIsEditing,
}) => {
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

  // Edit an existing user
  const handleEditUser = (user) => {
    const [firstName = "", lastName = ""] = user.name
      ? user.name.split(" ")
      : [user.firstName, user.lastName];
    setFormData({
      id: user.id,
      firstName,
      lastName,
      email: user.email || "",
      department: user.department || "NA",
    });
    setIsEditing(true);
  };

  const handleDeleteUser = async (id) => {};

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
                <button
                  className="edit-button"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersDisplayComponent;
