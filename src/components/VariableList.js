// React
import React, { useState } from "react";
// Bootstrap
import Modal from 'react-bootstrap/Modal'
// Components
import DownloadSpreadsheet from "./DownloadSpreadsheet";

const VariableList = (data) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.data.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <DownloadSpreadsheet jsonData={data} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VariableList;
