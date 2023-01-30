// Core imports
import React, { useState } from "react"
// App level CSS
import "./App.css"
// Component imports
import VariableList from "./components/VariableList"
import SearchForm from "./components/SearchForm"
// Bootstrap imports
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
// Icons
import { FaSort } from "react-icons/fa"
import Header from "./components/Header"

function App() {
  const [apiData, setApiData] = useState([])

  const [nameSortToggle, setNameSortToggle] = useState(false)
  const [dateSortToggle, setDateSortToggle] = useState(false)

  // Sorting functions
  function clearSorting() {
    setNameSortToggle(false)
  }
  // Toggles between sorting A-Z/Z-A
  // Need to implement toLocaleString to accomodate for norwegian letters
  function handleSortByName() {
    setDateSortToggle(false)
    const newToggle = !nameSortToggle
    if (!nameSortToggle) {
      const sortedData = [...apiData].sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
      setApiData(sortedData)
      setNameSortToggle(newToggle)
    } else {
      const sortedData = [...apiData].sort((a, b) => {
        return a.name < b.name ? 1 : -1
      })
      setApiData(sortedData)
      setNameSortToggle(newToggle)
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
        return a.approvedOn.split("-").reverse().join() >
          b.approvedOn.split("-").reverse().join()
          ? 1
          : -1
      })
      setApiData(sortedData)
      setDateSortToggle(newToggle)
    } else {
      const sortedData = [...apiData].sort((a, b) => {
        // Flips dd-mm-yyy around and converts to number, then compares numbers
        // Very ugly way to compare dates
        return a.approvedOn.split("-").reverse().join() <
          b.approvedOn.split("-").reverse().join()
          ? 1
          : -1
      })
      setApiData(sortedData)
      setDateSortToggle(newToggle)
    }
  }

  return (
    <Container fluid>
      <Header title="Kreftregisterets variabler" />
      <SearchForm setApiData={setApiData} clearSorting={clearSorting} />
      <Row className="mt-3" as={Container}>
        <Table bordered size="sm" hover>
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
  )
}

export default App
