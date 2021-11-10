import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Purchase from "../../Purchase/Purchase";

const Products = ({ pd }) => {
  const { name, description, img } = pd;

  const [showPurchase, setShowPurchase] = useState(false);
  const handlePurchaseClose = () => setShowPurchase(false);
  const handlePurchaseShow = () => setShowPurchase(true);

  return (
    <div>
      <Col>
        <Card>
          <Card.Img height="250px" variant="top" src={img} />
          <Card.Body>
            <Card.Title> {name} </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
            <Button onClick={handlePurchaseShow} className="w-100" variant="warning">
              Buy Now
            </Button>
        </Card>
      </Col>
      <Purchase
      pd={pd}
      handlePurchaseClose={handlePurchaseClose}
      showPurchase={showPurchase}
      ></Purchase>
    </div>
  );
};

export default Products;
