import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  ListGroup,
} from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Pay from "../Pay/Pay";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const {admin, logOut} = useAuth()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { path, url } = useRouteMatch();
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch Dashboard
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mx-auto">Welcome To Your Dashboard</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup  defaultActiveKey="#link1" className="text-center">
            <ListGroup.Item action href="#link1">
              <Link className="text-black text-decoration-none fw-bold" to="/home">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}`}>My Orders</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/payment`}>Pay</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/addReview`}>Add Review</Link>
            </ListGroup.Item>

            {/* Admin Area */}
            {
              admin && <div>
                <ListGroup.Item action href="#link5">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/makeAdmin`}>Make Admin</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/addProduct`}>Add Product</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link7">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/manageProducts`}>Manage Product</Link>
            </ListGroup.Item>
            <ListGroup.Item action href="#link8">
              <Link className="text-black text-decoration-none fw-bold" to={`${url}/manageAllOrders`}>Manage All Orders</Link>
            </ListGroup.Item>
              </div>
            }
          </ListGroup>
          <div className="d-flex justify-content-center mt-5 pe-3">
          <Button className="ms-3 text-white fw-bold" variant="danger" onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt}/>  Log Out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

<Switch>
        <Route exact path={path}>
          <DashboardHome/>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders/>
        </AdminRoute>
        <Route path={`${path}/addReview`}>
          <AddReview/>
        </Route>
        <Route path={`${path}/payment`}>
          <Pay/>
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
