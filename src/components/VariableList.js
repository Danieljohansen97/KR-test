// React
import React, { useState } from "react"
// Bootstrap

// Components
import DetailModal from "./DetailModal"

const VariableList = (data) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <tr onClick={handleShow}>
        <td>
          <h6>{data.data.name}</h6>
          <p>{data.data.description}</p>
        </td>
        <td>{data.data.validForExtraction === 1 ? "Ja" : "Nei"}</td>
        <td>{data.data.approvedOn}</td>
        <td>{data.data.techName}</td>
      </tr>
      {/* Modal to show extended information about the selected variable */}
      <DetailModal data={data} show={show} handleClose={handleClose} />
    </>
  )
}

export default VariableList
