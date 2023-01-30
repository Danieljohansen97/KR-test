// React imports
import React from "react"
// Bootstrap imports
import Button from "react-bootstrap/Button"
// XLSX and filesystem
import * as XLSX from "xlsx/xlsx.mjs"

/*
This component is supposed to take in JSON and convert this to an excel spreadsheet
*/
const DownloadSpreadsheet = (jsonData) => {
  function handleClick() {
    let flattenedArray = []

    // Map key/value pairs for an excel compliant array and push resulting object to flattenedArray
    jsonData.jsonData.map((obj) => {
      return flattenedArray.push({
        variabelnavn: obj.name,
        variabelbeskrivelse: obj.description,
        technavn: obj.techName,
        informasjonsnivaa: obj.informationLevel.name,
        url: `https://metadata.kreftregisteret.no/variables/detail/${obj.id}`,
      })
    })

    try {
      // Create workbook and sheet, then append sheet to workbook
      const worksheet = XLSX.utils.json_to_sheet(flattenedArray)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, "Variabler")
      
      // Calculate max-width for each column based on characterlength, (Solution found on Stack Overflow)
      const fitToColumn = (data) => {
        const columnWidths = []
        for (const property in data[0]) {
          columnWidths.push({
            wch: Math.max(
              property ? property.toString().length : 0,
              ...data.map((obj) =>
                obj[property] ? obj[property].toString().length : 0
              )
            ),
          })
        }
        return columnWidths
      }
      // Apply column widths
      worksheet['!cols'] = fitToColumn(flattenedArray);
      
      // Download excel file
      XLSX.writeFile(workbook, "Variabler.xlsx")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mt-3">
      <Button variant="success" size="lg" onClick={handleClick}>
        Last ned variabler
      </Button>
    </div>
  )
}

export default DownloadSpreadsheet
