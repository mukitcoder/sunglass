import React from "react";
import './StyleSecOne.css'
import { Card, Col, Row, Button } from "react-bootstrap";
import image1 from "../../../images/stylePhoto/style1.jpg";
import image2 from "../../../images/stylePhoto/style2.jpg";

// Extra section
const StyleSecOne = () => {
  return (
    <Row md={2} xs={1} className="g-0 my-5">
      <Col>
        <Card className="text-white">
          <Card.Img src={image1} alt="Card image" />
          <Card.ImgOverlay className="text-danger d-flex align-items-center">
            <div className=" text-center">
              <Card.Title className="display-6">
                GORDON-GLASSES TRUE MODERN CLASSICS.
              </Card.Title>
              <Card.Text className="my-3 text-dark">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like.
              </Card.Text>
              <Button variant="danger">View More</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>

      <Col>
        <Card className="text-white my-image">
          <Card.Img src={image2} alt="Card image" className=""/>
          <Card.ImgOverlay className="text-danger d-flex align-items-center">
            <div className=" text-center">
              <Card.Title className="display-5">
                {/* GORDON-GLASSES TRUE MODERN CLASSICS. */}
              </Card.Title>
              <Card.Text className="my-5 lead">
                {/* One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like. */}
              </Card.Text>
              {/* <Button variant="danger">View More</Button> */}
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  );
};

export default StyleSecOne;
