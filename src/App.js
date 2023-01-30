// Core imports
import React, { useState } from "react"
// App level CSS
import "./App.css"
// Component imports
import SearchForm from "./components/SearchForm"
import DownloadSpreadsheet from "./components/DownloadSpreadsheet"
// Bootstrap imports
import Container from "react-bootstrap/Container"
// Components
import Header from "./components/Header"
import VariableTable from "./components/VariableTable"

function App() {
  const [apiData, setApiData] = useState([])
  const [nameSortToggle, setNameSortToggle] = useState(false)
  const [dateSortToggle, setDateSortToggle] = useState(false)

  // Sorting functions
  function clearSorting() {
    setNameSortToggle(false)
  }

  return (
    <Container fluid>
      <Header title="Kreftregisterets variabler" />
      <SearchForm setApiData={setApiData} clearSorting={clearSorting} />

      {apiData.length > 0 && <DownloadSpreadsheet jsonData={apiData} />}

      <VariableTable
        apiData={apiData}
        setApiData={setApiData}
        nameSortToggle={nameSortToggle}
        setNameSortToggle={setNameSortToggle}
        dateSortToggle={dateSortToggle}
        setDateSortToggle={setDateSortToggle}
      />
    </Container>
  )
}

export default App
