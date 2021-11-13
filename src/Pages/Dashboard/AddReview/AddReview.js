import React from 'react';
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      fetch(`https://hidden-basin-03669.herokuapp.com/addReview`, {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>console.log(result))
      console.log(data);
      reset()
      alert('Successfully Added ')
    };
    return (
      <Container className="d-flex mx-auto justify-content-center">
        <Row md={1}>
          <Col className="">
            <h1>Add Review</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className="">
              <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control type="text" {...register("name")} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  {...register("description")}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Image URL</Form.Label>
                <Form.Control type="text" {...register("img")} />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Rating (between 1 to 5) </Form.Label>
                <Form.Control type="number" {...register("rating")} />
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default AddReview;