import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products/Products";

// Product section

const Product = () => {
  // const {user} = useAuth()
  const [products, setProducts] = useState([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false)
  useEffect(() => {
    fetch(`https://hidden-basin-03669.herokuapp.com/allProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center text-danger my-5">
        <h3 className="">All PRODUCTS</h3>
        {purchaseSuccess && <h3 className="bg-success text-white bg-opacity-75 w-50 mx-auto py-3 rounded-3"> Sunglass Booked SuccessFully!</h3>}
      </div>


      <Row xs={1} md={3} className="g-4">
       {
         products.map(pd=>(<Products key={pd._id} pd={pd} setPurchaseSuccess={setPurchaseSuccess}></Products>))
       }
      </Row>
    </div>
  );
};

export default Product;
