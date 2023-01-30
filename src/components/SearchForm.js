// React
import React, { useState } from "react"
// Axios
import axios from "axios"
// Bootstrap
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const SearchForm = ({ setApiData, clearSorting }) => {
  const baseUrl = "https://metadata.kreftregisteret.no/rest/v1/variables"
  const baseUrlSearch =
    "https://metadata.kreftregisteret.no/rest/v1/variables/:search?keyword="
  const [searchParam, setSearchParam] = useState("")

  const handleUpdateSearch = (value) => {
    setSearchParam(value)
  }

  // Function that fetches data from an API url string with searchword if entered
  const handleFetchData = (param) => {
    searchParam !== ""
      ? // With param if searchParam is not empty string
        axios.get(baseUrlSearch + param).then(
          (response) => {
            setApiData(response.data)
          },
          (error) => {
            console.log(error)
          }
        )
      : // Without param if searchParam is empty string, will return every variable
        axios.get(baseUrl).then(
          (response) => {
            setApiData(response.data)
          },
          (error) => {
            console.log(error)
          }
        )
    clearSorting()
  }

  return (
    <Form.Group as={Row} className="mt-5">
      <Col xs={10} sm={8}>
        <Form.Control
          size="lg"
          type="text"
          id="searchBar"
          placeholder="Søk etter variabel"
          value={searchParam}
          onChange={(e) => handleUpdateSearch(e.target.value)}
        />
      </Col>
      <Col xs={2} sm={4}>
        <Button
          size="lg"
          variant="primary"
          onClick={() => handleFetchData(searchParam)}
        >
          Søk
        </Button>
      </Col>
    </Form.Group>
  )
}

export default SearchForm
