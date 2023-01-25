// React
import React from "react";
// Bootstrap

const VariableList = (data) => {
  return (
    <>
      {
        // Console.log dataObject so that i can read values
        console.log(data.data)
      }
      <tr>
        <td>
          <h6>{data.data.name}</h6>
          <p>{data.data.description}</p>
        </td>
        <td>{data.data.validForExtraction === 1 ? "Ja" : "Nei"}</td>
        <td>{data.data.approvedOn}</td>
        <td>{data.data.techName}</td>
      </tr>
    </>
  );
};

export default VariableList;
