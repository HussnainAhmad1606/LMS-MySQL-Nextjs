import React from "react";

const Trr = (params) => {
  return (
    <tr>
      <th>{params.srNo}</th>
      <td>{params.studentName}</td>
      <td>{params.rollNo}</td>
      <td>{params.librarian}</td>
      <td>{params.borrowDate}</td>
    </tr>
  );
};

export default Trr;
