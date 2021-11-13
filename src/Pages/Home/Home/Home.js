import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllReviews from "../../Dashboard/AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import StyleSecOne from "../StyleSecOne/StyleSecOne";
import HomeStyleComponent from "./HomeStyleComponent/HomeStyleComponent";
import HomeStyleComponentThree from "./HomeStyleComponent/HomeStyleComponentThree";
import HomeStyleComponentTwo from "./HomeStyleComponent/HomeStyleComponentTwo";

// home section
const Home = () => {
  const [products, setProducts] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  useEffect(() => {
    fetch(`https://hidden-basin-03669.herokuapp.com/allProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      <Container>
      <Row md={3} xs={1} className="g-4">
        <Col> <HomeStyleComponent></HomeStyleComponent></Col>
        <Col > <HomeStyleComponentTwo></HomeStyleComponentTwo></Col>
        <Col ><HomeStyleComponentThree></HomeStyleComponentThree></Col>
      </Row>
      </Container>

      <Container>
        <div className="text-center text-danger my-5">
          <h3 className="">FEATURED PRODUCTS</h3>
          {purchaseSuccess && (
            <h3 className="bg-success text-white bg-opacity-75 w-50 mx-auto py-3 rounded-3">
              {" "}
              Sunglass Booked SuccessFully!
            </h3>
          )}
        </div>
        <Row xs={1} md={3} className="g-4">
          {products
            .map((pd) => (
              <Products
                key={pd._id}
                pd={pd}
                setPurchaseSuccess={setPurchaseSuccess}
              ></Products>
            ))
            .slice(0, 6)}
        </Row>
        <StyleSecOne></StyleSecOne>
        <AllReviews></AllReviews>
      </Container>
    </div>
  );
};

export default Home;
