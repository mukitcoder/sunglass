import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllReviews from "../../Dashboard/AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/allProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="text-center text-danger my-5">
          <h3 className="">FEATURED PRODUCTS</h3>
          {purchaseSuccess && <h3> Sunglass Booked SuccessFully!</h3>}
        </div>
        <Row xs={1} md={3} className="g-4">
          {products.map((pd) => <Products key={pd._id} pd={pd} setPurchaseSuccess={setPurchaseSuccess}></Products>).slice(0, 6)}
        </Row>
        <AllReviews></AllReviews>
      </Container>
    </div>
  );
};

export default Home;
