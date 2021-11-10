import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
        <div className="text-center text-danger my-5">
            <h3 className="">FEATURED PRODUCTS</h3>
        </div>
      <Row xs={1} md={3} className="g-4">
       {
           services.map(service=>( <Col>
            <Card>
              <Card.Img height="250px" variant="top" src={service.img} />
              <Card.Body>
                <Card.Title> {service.name} </Card.Title>
                <Card.Text>
                {service.description}
                </Card.Text>
              </Card.Body>
              <Button variant="warning">Buy Now</Button>
            </Card>
          </Col>)).slice(0, 6)
       }
      </Row>
    </div>
  );
};

export default Service;
