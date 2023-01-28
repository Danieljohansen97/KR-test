// React imports
import React from "react";
// Bootstrap imports
import Button from "react-bootstrap/Button";
// XLSX
import * as XLSX from "xlsx/xlsx.mjs";

/*
This component is supposed to take in JSON and convert this to an excel spreadsheet
*/
const DownloadSpreadsheet = (jsonData) => {
  function handleClick() {
    console.log("Export button clicked");
  }

  return (
    <>
      <Button variant="success" onClick={handleClick}>
        Last ned variabel
      </Button>
    </>
  );
};

export default DownloadSpreadsheet;
