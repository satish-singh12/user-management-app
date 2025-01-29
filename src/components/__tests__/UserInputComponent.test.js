import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserInputComponent from "../UserInputComponent";
import toast from "react-hot-toast";
import { postDataApi, putDataApi } from "../../utils/fetchDataApi";

// Mock functions for postDataApi and putDataApi
jest.mock("../../utils/fetchDataApi", () => ({
  postDataApi: jest.fn(),
  putDataApi: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

describe("UserInputComponent", () => {
  let setUsers;
  let setFormData;
  let setIsEditing;
  const initialFormData = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  };

  beforeEach(() => {
    setUsers = jest.fn();
    setFormData = jest.fn();
    setIsEditing = jest.fn();
  });

  test("should show error when fields are empty", () => {
    render(
      <UserInputComponent
        users={[]}
        setUsers={setUsers}
        formData={initialFormData}
        setFormData={setFormData}
        isEditing={false}
        setIsEditing={setIsEditing}
      />
    );

    fireEvent.click(screen.getByText("ADD USER"));

    expect(toast.error).toHaveBeenCalledWith("All fields are required.");
  });

  test("should call postDataApi on form submit (add new user)", async () => {
    render(
      <UserInputComponent
        users={[]}
        setUsers={setUsers}
        formData={{
          ...initialFormData,
          firstName: "Satish",
          lastName: "Singh",
          email: "satish.singh@example.com",
          department: "ADMIN",
        }}
        setFormData={setFormData}
        isEditing={false}
        setIsEditing={setIsEditing}
      />
    );

    postDataApi.mockResolvedValueOnce({
      data: {
        id: 1,
        firstName: "Satish",
        lastName: "Singh",
        email: "satish.singh@example.com",
        department: "ADMIN",
      },
    });

    fireEvent.click(screen.getByText("ADD USER"));

    await waitFor(() => expect(postDataApi).toHaveBeenCalledTimes(1));
    expect(toast.success).toHaveBeenCalledWith("User added successfully");
  });

  test("should call putDataApi on form submit (edit user)", async () => {
    render(
      <UserInputComponent
        users={[
          {
            id: 1,
            firstName: "Satish",
            lastName: "Singh",
            email: "satish.singh@example.com",
            department: "ADMIN",
          },
        ]}
        setUsers={setUsers}
        formData={{
          id: 1,
          firstName: "Satish",
          lastName: "Singh",
          email: "satish.singh@example.com",
          department: "ADMIN",
        }}
        setFormData={setFormData}
        isEditing={true}
        setIsEditing={setIsEditing}
      />
    );

    putDataApi.mockResolvedValueOnce({
      data: {
        id: 1,
        firstName: "Satish",
        lastName: "Singh",
        email: "satish.singh@example.com",
        department: "ADMIN",
      },
    });

    fireEvent.click(screen.getByText("UPDATE USER"));

    await waitFor(() => expect(putDataApi).toHaveBeenCalledTimes(1));
    expect(toast.success).toHaveBeenCalledWith("User updated successfully");
  });
});
