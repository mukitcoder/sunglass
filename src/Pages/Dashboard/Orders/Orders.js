import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/purchase?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  return (
    <div>
      <h2>My Orders: {myOrders.length} </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Sunglass Model</th>
            <th>Price</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              myOrders.map(order=>(
                <tr key={order._id}>
                <td>1</td>
                <td>{order.customerName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address} </td>
                <td>{order.sunglassName} </td>
                <td>{order.price}</td>
                <td>{order.date} </td>
              </tr>
              ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
