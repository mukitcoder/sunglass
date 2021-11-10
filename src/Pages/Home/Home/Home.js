import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="text-center text-danger my-5">
          <h3 className="">FEATURED PRODUCTS</h3>
        </div>
        <Row xs={1} md={3} className="g-4">
          {products.map((pd) => <Products key={pd.key} pd={pd}></Products>).slice(0, 6)}
        </Row>
      </div>
    </div>
  );
};

export default Home;
