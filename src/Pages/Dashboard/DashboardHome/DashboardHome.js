import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (
        <Container>
        <Row md={1}>
          <Col className="text-center">
            <h1>Hello From Dashboard</h1>
            <Orders></Orders>
          </Col>
        </Row>
      </Container>
    );
};

export default DashboardHome;