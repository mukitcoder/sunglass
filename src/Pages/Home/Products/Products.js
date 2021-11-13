import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Purchase from "../../Purchase/Purchase";
import './Products.css'

// Products Section

const Products = ({ pd, setPurchaseSuccess }) => {
  const { name, price, description, img } = pd;
  const {user} = useAuth()

  const [showPurchase, setShowPurchase] = useState(false);
  const handlePurchaseClose = () => setShowPurchase(false);
  const handlePurchaseShow = () => setShowPurchase(true);

  return (
    <div>
      <Col>
        <Card className="product-card">
          <span className="product-image">
          <Card.Img height="250px" variant="top" src={img} />
          </span>
          <Card.Body className="product-body">
            <Card.Title className="fs-4 product-title"> {name} </Card.Title>
            <Card.Title className="product-price">Price: ${price} </Card.Title>
            <Card.Text className="lead product-description">{description}</Card.Text>
            <Card.Text className="text-warning"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></Card.Text>
          </Card.Body>
          
          {
              user?.email?<Button
              onClick={handlePurchaseShow}
              className="w-100 fw-bold"
              variant="warning"
            >
              <FontAwesomeIcon className="me-2" icon={faShoppingCart}/> Buy Now
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
        setPurchaseSuccess={setPurchaseSuccess}
      ></Purchase>
    </div>
  );
};

export default Products;
