import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://hidden-basin-03669.herokuapp.com/allReviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-center my-5 text-danger">Our Customer Reviews</h2>
      <Row xs={1} md={4} className="g-4 mb-3">
        {reviews.map((review) => (
          <Col key={review._id}>
            <Card border="primary">
              <Card.Header>Customer Reviews</Card.Header>
              <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    width="80px"
                    height="80px"
                    className="img-fluid rounded-circle me-3"
                    src={review.img}
                    alt=""
                  />
                  <h6>{review.name}</h6>
                </div>
                <Card.Text>{review.description}</Card.Text>
                <Card.Text>
                  <Rating className="text-warning"
                    initialRating={review.rating}
                    emptySymbol="fa fa-star-o"
                    fullSymbol="fa fa-star"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllReviews;
