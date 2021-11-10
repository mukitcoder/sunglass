import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.jpg";

// nav bar section
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="danger"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              className="text-white text-decoration-none fw-bold me-3"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-white text-decoration-none fw-bold me-3"
              to="/services"
            >
              Explore
            </NavLink>
            
            <div className="">
              {" "}
              <img width="35px" height="35px" className="rounded-circle mx-3 img-fluid" src={user.photoURL} alt="" />
              <span className="text-warning fw-bold">{user.displayName}</span>
            </div>
            {user?.email ? (
              <Button className="ms-3 text-danger fw-bold" variant="warning" size="sm" onClick={logOut}>Log Out</Button>
            ) : (
              <Link to="/login">
                <Button className="ms-3 text-white fw-bold" variant="success" size="sm" >Log In</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
