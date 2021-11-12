import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import test from "../../../images/registration.jpg";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/allReviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-center py-5">Our Customer Reviews</h2>
      <Row xs={1} md={4} className="g-4 mb-3">
        {reviews.map((review) => (
          <Col>
            <Card border="primary">
              <Card.Header>Customer Reviews</Card.Header>
              <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img width="80px" height="100px"
                    className="img-fluid rounded-circle me-3"
                    src={review.img}
                    alt=""
                  />
                  <h6>{review.name}</h6>
                </div>
                <Card.Text>{review.description}</Card.Text>
                <Card.Text>Rating:{review.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllReviews;
