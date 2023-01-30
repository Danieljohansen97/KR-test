// React
import React from "react"
// Bootstrap
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

const DetailModal = ({ data, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>{data.data.name}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12}>
            <h4>Beskrivelse</h4>
            <p>{data.data.description}</p>
          </Col>
        </Row>
        <Row>
          <h4>Informasjon</h4>
          <Col xs={12} md={6} lg={4} xl={3}>
            <p>
              <b>Teknisk Navn: </b>
              {data.data.techName}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <p>
              <b>Opprettet av: </b>
              {`${data.data.createdBy}, ${data.data.createdOn}`}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <p>
              <b>Oppdatert av: </b>
              {`${data.data.updatedBy}, ${data.data.updatedOn}`}
            </p>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <p>
              <b>Godkjent av: </b>
              {`${data.data.approvedBy}, ${data.data.approvedOn}`}
            </p>
          </Col>
        </Row>
        {/* Collapsible information for saving screen realestate */}
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Kategori</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.category.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Beskrivelse: </b>
                    {data.data.category.description}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>Informasjonsnivå</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.informationLevel.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Forkortelse: </b>
                    {data.data.informationLevel.shortName}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>Datatype</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.dataType.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Beskrivelse: </b>
                    {data.data.dataType.description}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h4>Registreringsmetode</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.registrationMethod.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Beskrivelse: </b>
                    {data.data.registrationMethod.description}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h4>Variabeltype</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.variableType.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <b>Beskrivelse: </b>
                    {data.data.variableType.description}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h4>Midlertidighet</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col>
                  <p>
                    <b>Navn: </b>
                    {data.data.temporality.name}
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Container fluid>
          <div className="d-grid gap-2">
            <Button onClick={handleClose} variant="danger" size="lg">
              Tilbake
            </Button>
          </div>
        </Container>
      </Modal.Footer>
    </Modal>
  )
}

export default DetailModal
