import React from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";

const Purchase = ({
  handlePurchaseClose,
  showPurchase,
  pd
}) => {
  const { name, price } = pd;
  const {user} = useAuth()

  return (
    
      <Modal show={showPurchase} onHide={handlePurchaseClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="text-center">
          <Modal.Title className="fw-bolder fs-3 bg-info rounded-pill py-2">Purchase Page</Modal.Title>
          <Modal.Title className="my-3">{name}</Modal.Title>
          </div>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" value={user.email}/>
            </FloatingLabel>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export default Purchase;
