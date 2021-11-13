import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'

// Home Style Components
const HomeStyleComponentThree = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 200,
      delay: 1000,
    //   config: config.molasses,
      onRest: () => set(!flip),
    })
    return (
        <Row className="mt-5 bg-success bg-opacity-75 rounded-pill">
            <Col md={12} className="d-flex text-white justify-content-center align-items-center fs-2 fw-bolder">
        
            <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
            <span className="pe-2">+ Online Buyers</span>
            </Col>
        </Row>
    );
};

export default HomeStyleComponentThree;