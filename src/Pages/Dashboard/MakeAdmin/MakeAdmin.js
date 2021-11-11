import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e =>{
        const user = {email}
        fetch(`localhost:5000/users/admin`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        e.preventDefault()
    }
    return (
        <Container className="mb-5">
        <Row md={1}>
          <Col className="text-center w-50 mx-auto">
            <h1>Make An Admin</h1>

            <Form onSubmit={handleAdminSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                onBlur={handleOnBlur}
                required
              />
            </FloatingLabel>
            <Button className="w-100" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default MakeAdmin;