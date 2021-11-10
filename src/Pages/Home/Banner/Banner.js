import React from "react";
import { Carousel, Button } from "react-bootstrap";
import slide1 from "../../../images/slider/s1.jpg";
import slide2 from "../../../images/slider/s2.jpg";
import slide3 from "../../../images/slider/s3.jpg";

// Banner Section
const Banner = () => {
  return (
    <Carousel className="">
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <div className="text-danger">
            <h3 className="">THE BRAINCHILD OF RAMIRO PAULINO FERREIRA</h3>
            <p>EAST MEETS WEST IN CWST’S FALL WINTER 2022</p>

            <Button variant="danger">View More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <div className="text-danger">
            <h3 className="">THE BRAINCHILD OF RAMIRO PAULINO FERREIRA</h3>
            <p>EAST MEETS WEST IN CWST’S FALL WINTER 2022</p>

            <Button variant="danger">View More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <div className="text-danger">
            <h3 className="">THE BRAINCHILD OF RAMIRO PAULINO FERREIRA</h3>
            <p>EAST MEETS WEST IN CWST’S FALL WINTER 2022</p>

            <Button variant="danger">View More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
