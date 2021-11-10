import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center text-danger my-5">
        <h3 className="">All PRODUCTS</h3>
      </div>


      <Row xs={1} md={3} className="g-4">
       {
         products.map(pd=>(<Products key={pd.key} pd={pd}></Products>))
       }
      </Row>
    </div>
  );
};

export default Product;
