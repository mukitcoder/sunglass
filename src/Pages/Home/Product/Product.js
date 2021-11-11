import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products/Products";

const Product = () => {
  // const {user} = useAuth()
  const [products, setProducts] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false)
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center text-danger my-5">
        <h3 className="">All PRODUCTS</h3>
        {purchaseSuccess && <h3> Sunglass Booked SuccessFully!</h3>}
      </div>


      <Row xs={1} md={3} className="g-4">
       {
         products.map(pd=>(<Products key={pd.key} pd={pd} setPurchaseSuccess={setPurchaseSuccess}></Products>))
       }
      </Row>
    </div>
  );
};

export default Product;
