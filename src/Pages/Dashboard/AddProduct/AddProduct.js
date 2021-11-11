import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <Container>
        <Row md={1}>
          <Col className="text-center">
            <h1>Add Product</h1>
          </Col>
        </Row>
      </Container>
    );
};

export default AddProduct;