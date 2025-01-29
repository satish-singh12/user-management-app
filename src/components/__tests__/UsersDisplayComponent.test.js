import { render, screen, fireEvent } from "@testing-library/react";
import UsersDisplayComponent from "../UsersDisplayComponent";

jest.mock("../../utils/fetchDataApi", () => ({
  deleteDataApi: jest.fn(),
  getDataApi: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

describe("UsersDisplayComponent", () => {
  let setUsers;
  let setFormData;
  let setIsEditing;

  beforeEach(() => {
    setUsers = jest.fn();
    setFormData = jest.fn();
    setIsEditing = jest.fn();
  });

  test("should call handleEditUser when edit button is clicked", () => {
    const users = [
      {
        id: 1,
        firstName: "Satish",
        lastName: "Singh",
        email: "satish.singh@example.com",
        department: "ADMIN",
      },
    ];
    render(
      <UsersDisplayComponent
        users={users}
        currentUsers={users}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        setUsers={setUsers}
      />
    );

    fireEvent.click(screen.getByText("Edit"));

    expect(setFormData).toHaveBeenCalledWith({
      id: 1,
      firstName: "Satish",
      lastName: "Singh",
      email: "satish.singh@example.com",
      department: "ADMIN",
    });
    expect(setIsEditing).toHaveBeenCalledWith(true);
  });
});
