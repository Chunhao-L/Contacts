import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import styles from "./Table.module.css";

export const Table = () => {
  const [contacts, setContacts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const transformedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          address: `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
          company: user.company.name,
        }));

        setContacts(transformedData);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Username", accessor: "username" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Website", accessor: "website" },
      { Header: "Address", accessor: "address" },
      { Header: "Company", accessor: "company" },
    ],
    []
  );

  const filteredContacts = React.useMemo(() => {
    if (!searchInput) return contacts;

    return contacts.filter((contact) =>
      Object.values(contact).some((value) =>
        value.toString().toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [contacts, searchInput]);

  const paginatedContacts = React.useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredContacts.slice(startIndex, endIndex);
  }, [filteredContacts, currentPage, rowsPerPage]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: paginatedContacts,
      },
      useSortBy
    );

  const totalPages = Math.ceil(filteredContacts.length / rowsPerPage); 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(0); 
  };

  return (
    <div className={styles.background}>
      <label htmlFor="search" className={styles.searchLabel}>Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.tableWrapper}>
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`${styles.th} ${
                      column.id === "id" ? styles.stickyColumn : ""
                    }`}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className={
                        cell.column.id === "id" ? styles.stickyColumn : ""
                      }
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <label htmlFor="rowsPerPage">Rows per page: </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>

        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>
            {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
