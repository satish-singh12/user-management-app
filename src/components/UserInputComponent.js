import { postDataApi, putDataApi } from "../utils/fetchDataApi";
import toast from "react-hot-toast";

const validateForm = (formData) => {
  const { firstName, lastName, email, department } = formData;

  if (!firstName || !lastName || !email || !department) {
    toast.error("All fields are required.");
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error("A valid email is required.");
    return false;
  }
  return true;
};

const UserInputComponent = ({
  users,
  setUsers,
  formData,
  setFormData,
  isEditing,
  setIsEditing,
}) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!validateForm(formData)) return;
    try {
      const response = isEditing
        ? await putDataApi(formData)
        : await postDataApi(formData);
      setUsers(
        isEditing
          ? users.map((user) =>
              user.id === formData.id ? response.data : user
            )
          : [...users, response.data]
      );
      toast.success(
        isEditing ? "User updated successfully" : "User added successfully"
      );
      setFormData({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
      setIsEditing(false);
    } catch {
      toast.error(isEditing ? "Failed to update user" : "Failed to add user");
    }
  };

  return (
    <div className="form-section">
      <div className="form-section-title">
        <h2>{isEditing ? "Edit User" : "Add User"}</h2>
        {isEditing && (
          <button
            className="cancle-button"
            onClick={() => {
              setIsEditing(false);
              setFormData({
                id: "",
                firstName: "",
                lastName: "",
                email: "",
                department: "",
              });
            }}
          >
            Cancel Edit
          </button>
        )}
      </div>
      <div className="form-grid">
        {["firstName", "lastName", "email", "department"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            placeholder={field
              .replace(/([A-Z])/g, " $1")
              .trim()
              .replace(/^./, (str) => str.toUpperCase())}
            className="input-field"
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        {isEditing ? "UPDATE USER" : "ADD USER"}
      </button>
    </div>
  );
};

export default UserInputComponent;
