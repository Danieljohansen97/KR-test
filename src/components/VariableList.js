// React
import React from "react";
// Bootstrap
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const VariableList = (data) => {
  return (
    <Accordion.Item eventKey={data.data.id}>
      <Accordion.Header>
        {data.data.name}
      </Accordion.Header>
      <Accordion.Body></Accordion.Body>
    </Accordion.Item>
  );
};

export default VariableList;
