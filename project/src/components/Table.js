import React, { useState, useEffect } from "react";
import connection from "../db";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    connection.query("SELECT * FROM Customers", (error, results) => {
      if (error) throw error;
      setData(results);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.customer_id}>
            <td>{row.customer_id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email_address}</td>
            <td>{row.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
