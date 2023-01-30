// React
import React from "react"
// Bootstrap
import Table from "react-bootstrap/Table"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
// Icons
import { FaSort } from "react-icons/fa"
// Components
import VariableList from "./VariableList"

const VariableTable = ({
  apiData,
  setApiData,
  nameSortToggle,
  setNameSortToggle,
  dateSortToggle,
  setDateSortToggle,
}) => {
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
        // Flips dd-mm-yyy around and converts to number (yyymmdd), then compares numbers
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
    <Row className="mt-5" as={Container}>
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
            apiData.map((data, key) => <VariableList key={key} data={data} />)}
        </tbody>
      </Table>
    </Row>
  )
}

export default VariableTable
