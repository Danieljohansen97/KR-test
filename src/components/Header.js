// React imports
import React from "react"
// Bootstrap imports
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ title }) => {
  return (
    <Navbar bg="light">
      <Container className="justify-content-center">
        <Navbar.Text>
          <h2>{title}</h2>
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Header
