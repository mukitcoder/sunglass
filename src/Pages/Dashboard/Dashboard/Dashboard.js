import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Container,
  Col,
  Row,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Orders from "../Orders/Orders";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch Dashboard
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mx-auto">Welcome To Your Dashboard</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup  defaultActiveKey="#link1" className="text-center">
            <ListGroup.Item action href="#link1">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link7">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
          </ListGroup>

        </Offcanvas.Body>
      </Offcanvas>

      <Container>
        <Row md={1}>
          <Col className="text-center">
            <h1>Hello From Dashboard</h1>
            <Orders></Orders>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
