// React imports
import React from 'react'
// Bootstrap imports
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ title }) => {
  return (
    <Row>
        <Col>
          <h3>{title}</h3>
        </Col>
      </Row>
  )
}

export default Header