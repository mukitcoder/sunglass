import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import Purchase from "../../Purchase/Purchase";

const Products = ({ pd }) => {
  const { name, price, description, img } = pd;
  const {user} = useAuth()

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
            <Card.Title>Price: ${price} </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          
          {
              user?.email?<Button
              onClick={handlePurchaseShow}
              className="w-100"
              variant="warning"
            >
              Buy Now
            </Button>:<Link to="/login"><Button
              onClick={handlePurchaseShow}
              className="w-100"
              variant="danger"
            >
              Buy Now
            </Button></Link>
          }
        
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
