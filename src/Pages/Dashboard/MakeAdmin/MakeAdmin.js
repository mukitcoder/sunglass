import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e =>{
     
        const user = {email}
        fetch(`https://hidden-basin-03669.herokuapp.com/users/admin`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
            console.log(data)
            // setEmail('')
            setSuccess(true)
          }
            
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

            {success && <h3 className="mt-4 text-white fw-bold bg-success bg-opacity-75 rounded-3 py-2">Admin Created Successfully !!!</h3> }
          </Col>
        </Row>
      </Container>
    );
};

export default MakeAdmin;