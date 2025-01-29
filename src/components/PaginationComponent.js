const PaginationComponent = ({
  users,
  usersPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="pagination">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={
                currentPage === number + 1
                  ? "page-button active"
                  : "page-button"
              }
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default PaginationComponent;
