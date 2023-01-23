// Core imports
import React, { useState } from "react";
import axios from "axios";
// App level CSS
import "./App.css";
// Component imports
import VariableList from "./components/VariableList";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const baseUrl = "https://metadata.kreftregisteret.no/rest/v1/variables";
  const baseUrlSearch =
    "https://metadata.kreftregisteret.no/rest/v1/variables/:search?keyword=";
  const [searchParam, setSearchParam] = useState("");
  const [apiData, setApiData] = useState([]);

  // Function that fetches data from an API url string with searchword if entered
  const handleFetchData = (param) => {
    searchParam !== ""
      ? // With param if searchParam is not empty string
        axios.get(baseUrlSearch + param).then(
          (response) => {
            setApiData(response.data);
          },
          (error) => {
            console.log(error);
          }
        )
      : // Without param if searchParam is empty string
        axios.get(baseUrl).then(
          (response) => {
            setApiData(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
  };

  const handleUpdateSearch = (value) => {
    setSearchParam(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Kreftregisteret</h3>
        </Col>
      </Row>
      <Form.Group as={Row}>
        <Col xs={12} sm={8}>
          <Form.Control
            size="lg"
            type="text"
            id="searchBar"
            placeholder="Søk etter variabel"
            value={searchParam}
            onChange={(e) => handleUpdateSearch(e.target.value)}
          />
        </Col>
        <Col xs={12} sm={4}>
          <Button
            size="lg"
            variant="primary"
            onClick={() => handleFetchData(searchParam)}
          >
            Søk
          </Button>
        </Col>
      </Form.Group>
      <Row>
        {apiData &&
          apiData.map((data, key) => <VariableList key={key} data={data} />)}
      </Row>
    </Container>
  );
}

export default App;
