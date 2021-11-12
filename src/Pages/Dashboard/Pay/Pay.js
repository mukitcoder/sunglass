import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Pay = () => {
    return (
        <Container className="text-center my-5 py-5">
            <h1>Payment system is coming soon !  <Spinner animation="grow" variant="danger" /></h1>
        </Container>
    );
};

export default Pay;