import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Purchase = ({
  handlePurchaseClose,
  showPurchase,
  pd
}) => {
  const { name, price } = pd;
  const {user} = useAuth()
  const initialInfo = {customerName:user.displayName, email:user.email, phone:'', address:'', date:'', price: ''}
const [purchaseInfo, setPurchaseInfo] = useState({initialInfo})


const handleOnBlur = e =>{
  const field = e.target.name
  const value = e.target.value
  const newInfo = {...purchaseInfo}
  newInfo[field] = value
  setPurchaseInfo(newInfo)
}
  const handlePurchaseSubmit = e =>{
    const purchases = {
      ...purchaseInfo,
      sunglassName: name,
      price: price
    }
    console.log(purchases);

handlePurchaseClose()
    e.preventDefault()
  }

  return (
    
      <Modal show={showPurchase} onHide={handlePurchaseClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="text-center">
          <Modal.Title className="fw-bolder fs-3 bg-info rounded-pill py-2">Purchase Page</Modal.Title>
          <Modal.Title className="my-3">{name}</Modal.Title>
          </div>
          <Form onSubmit={handlePurchaseSubmit}>
          <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control placeholder="Your Name" name="customerName" defaultValue={user.displayName} onBlur={handleOnBlur} />
            </FloatingLabel>
            
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" name="email" defaultValue={user.email} onBlur={handleOnBlur}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control placeholder="Phone Number"  name="phone" defaultValue="number" onBlur={handleOnBlur}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Your Address"
              className="mb-3"
            >
              <Form.Control placeholder="Your Address" defaultValue="address" name="address" onBlur={handleOnBlur}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Date"
              className="mb-3"
            >
              <Form.Control placeholder="Date" type="date" name="date" onBlur={handleOnBlur}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Sunglass Price $"
              className="mb-3"
            >
              <Form.Control placeholder="Price" defaultValue={price} disabled/>
            </FloatingLabel>

            <Button className="w-100" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export default Purchase;
