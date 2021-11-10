import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Purchase = ({handlePurchaseClose, showPurchase,pd, handlePurchaseShow}) => {
const {name} = pd  

  return (
    <div>
      {/* <Button variant="primary" onClick={handlePurchaseShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showPurchase} onHide={handlePurchaseClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePurchaseClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePurchaseClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Purchase;
