import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`https://hidden-basin-03669.herokuapp.com/addProducts`, {
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
          <h1>Add Product</h1>
          <Form onSubmit={handleSubmit(onSubmit)} className="">
            <Form.Group className="mb-3">
              <Form.Label>Sunglass Name</Form.Label>
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
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" {...register("img")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" {...register("price")} />
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

export default AddProduct;
