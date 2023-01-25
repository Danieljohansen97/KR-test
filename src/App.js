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
import Table from "react-bootstrap/Table";
// Icons
import { FaSort } from "react-icons/fa";

function App() {
  const baseUrl = "https://metadata.kreftregisteret.no/rest/v1/variables";
  const baseUrlSearch =
    "https://metadata.kreftregisteret.no/rest/v1/variables/:search?keyword=";
  const [searchParam, setSearchParam] = useState("");
  const [apiData, setApiData] = useState([]);

  const [nameSortToggle, setNameSortToggle] = useState(false);
  const [dateSortToggle, setDateSortToggle] = useState(false);

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
      : // Without param if searchParam is empty string, will return every variable
        axios.get(baseUrl).then(
          (response) => {
            setApiData(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    clearSorting();
  };

  const handleUpdateSearch = (value) => {
    setSearchParam(value);
  };
  // Sorting functions
  function clearSorting() {
    setNameSortToggle(false);
  }
  // Toggles between sorting A-Z/Z-A
  // Need to implement toLocaleString to accomodate for norwegian letters
  function handleSortByName() {
    setDateSortToggle(false)
    const newToggle = !nameSortToggle;
    if (!nameSortToggle) {
      const sortedData = [...apiData].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      setApiData(sortedData);
      setNameSortToggle(newToggle);
    } else {
      const sortedData = [...apiData].sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
      setApiData(sortedData);
      setNameSortToggle(newToggle);
    }
  }
  // Sort by date
  function handleSortByDate() {
    setNameSortToggle(false)
    const newToggle = !dateSortToggle
    if (!dateSortToggle) {
      const sortedData = [...apiData].sort((a, b) => {
        // Flips dd-mm-yyy around and converts to number, then compares numbers
        // Very ugly way to compare dates
        return a.approvedOn.split("-").reverse().join() > b.approvedOn.split("-").reverse().join() ? 1 : -1
      })
      setApiData(sortedData)
      setDateSortToggle(newToggle)
    } else {
      const sortedData = [...apiData].sort((a, b) => {
        // Flips dd-mm-yyy around and converts to number, then compares numbers
        // Very ugly way to compare dates
        return a.approvedOn.split("-").reverse().join() < b.approvedOn.split("-").reverse().join() ? 1 : -1
      })
      setApiData(sortedData)
      setDateSortToggle(newToggle)
    }
  }

  return (
    <Container fluid>
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
      <Row className="mt-3" as={Container}>
        <Table bordered size="sm">
          <thead>
            <tr className="text-primary">
              <th onClick={() => handleSortByName()}>
                <h5>
                  Navn
                  <FaSort />
                </h5>
              </th>
              <th style={{ width: "130px" }}>
                <h5>
                  Utleverbar
                  <FaSort />
                </h5>
              </th>
              <th style={{ width: "120px" }} onClick={() => handleSortByDate()}>
                <h5>
                  Godkjent
                  <FaSort />
                </h5>
              </th>
              <th>
                <h5>
                  Technavn <FaSort />
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {apiData &&
              apiData.map((data, key) => (
                <VariableList key={key} data={data} />
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
