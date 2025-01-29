import { render, screen, fireEvent } from "@testing-library/react";
import PaginationComponent from "../PaginationComponent";
import "@testing-library/jest-dom"; // Ensure jest-dom is imported

describe("PaginationComponent", () => {
  test("should call setCurrentPage when page button is clicked", () => {
    const setCurrentPage = jest.fn();
    const users = Array(10).fill({
      id: 1,
      firstName: "Satish",
      lastName: "Singh",
      email: "satish.singh@example.com",
      department: "ADMIN",
    });

    render(
      <PaginationComponent
        users={users}
        usersPerPage={5}
        currentPage={1}
        setCurrentPage={setCurrentPage}
      />
    );

    fireEvent.click(screen.getByText("2"));

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  test("should highlight the active page button", () => {
    const users = Array(10).fill({
      id: 1,
      firstName: "Satish",
      lastName: "Singh",
      email: "satish.singh@example.com",
      department: "ADMIN",
    });

    render(
      <PaginationComponent
        users={users}
        usersPerPage={5}
        currentPage={1}
        setCurrentPage={jest.fn()}
      />
    );

    // Ensure that the active page button has the 'active' class
    expect(screen.getByText("1")).toHaveClass("active");
    expect(screen.getByText("2")).not.toHaveClass("active");
  });
});
