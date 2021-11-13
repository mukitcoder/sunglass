import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([])
    useEffect(()=>{
        fetch(`https://hidden-basin-03669.herokuapp.com/purchase`)
        .then(res=>res.json())
        .then(data=>setManageOrders(data))
    },[])

    const handleDelete = (id)=>{
        const url = `https://hidden-basin-03669.herokuapp.com/purchase/${id}`
        fetch(url, {
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            alert('Are You Sure?')
            const remaining = manageOrders.filter(order=>order._id !== id)
            setManageOrders(remaining)
          }
        })
      }
    return (
        <Container >
            <h3 className="text-center my-3">Manage All Orders (Total: {manageOrders.length})</h3>

            <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Sunglass Model</th>
            <th>Price</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              manageOrders.map((order, index)=>(
                <tr key={order._id}>
                <td>{index+1} </td>
                <td>{order.customerName}</td>
                <td>{order.email}</td>
                <td>{order.sunglassName} </td>
                <td>{order.price}</td>
                <td>{order.date} </td>
                <td><Button variant="danger" onClick={()=> handleDelete(order._id) } >Cancel</Button></td>
              </tr>
              ))
          }
        </tbody>
      </Table>
        </Container>
    );
};

export default ManageAllOrders;