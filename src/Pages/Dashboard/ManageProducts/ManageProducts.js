import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`https://hidden-basin-03669.herokuapp.com/allProducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const handleDelete = (id)=>{
    const url = `https://hidden-basin-03669.herokuapp.com/allProducts/${id}`
    fetch(url, {
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
        alert('Are You Sure?')
        const remaining = allProducts.filter(pd=>pd._id !== id)
        setAllProducts(remaining)
      }
    })
  }
  return (
    <Container>
      <h1>Manage Products</h1>
      <Row xs={1} md={4} className="g-4">
        {allProducts.map((pd) => (
          <Col key={pd._id}>
            <Card className="h-100"> 
              <Card.Img variant="top" height="150px" src={pd.img} />
              <Card.Body>
                <Card.Title>{pd.name}</Card.Title>
                <Card.Text> $
                {pd.price}
                </Card.Text>
                <Card.Text>
                {pd.description}
                </Card.Text>
                <Button variant="danger" onClick={()=> handleDelete(pd._id) } >Delete Product</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
