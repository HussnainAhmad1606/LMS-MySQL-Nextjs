import React from "react";

const Trr = (params) => {
  return (
    <tr>
      <th></th>
      <td>{params.name}</td>
      <td>{params.time}</td>
      <td>{params.cal}</td>
      <td>
        <button className=" btn btn-sm btn-primary">Advance</button>
      </td>
    </tr>
  );
};

export default Trr;
