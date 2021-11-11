import React, { useState } from "react";
import {
  Container,
  Button,
  Col,
  Spinner,
  Row,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import registration from "../../../images/registration.jpg";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, user, isLoading, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Didn't Match !!! Please Check");
      return;
    }
    registerUser(loginData.email, loginData.password,loginData.name, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="text-center">
        <Col md={6}>
          <h3 className="display-5 my-3 fw-bolder">Please Register</h3>
          <Form onSubmit={handleLoginSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control
                placeholder="Name"
                name="name"
                required
                onBlur={handleOnBlur}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                required
                onBlur={handleOnBlur}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className="mb-3"
                onBlur={handleOnBlur}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirm Password"
            >
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                className="mb-3"
                required
                onBlur={handleOnBlur}
              />
            </FloatingLabel>
            <NavLink to="/login">
              <h6 className="text-danger fs-4">
                * Already have an account? Please login
              </h6>
            </NavLink>

            <Button
              variant="warning"
              type="submit"
              className="w-100 my-2 fw-bolder"
            >
              Register
            </Button>
          </Form>
          {isLoading && (
            <Spinner className="d-flex mx-auto mb-3" animation="grow" />
          )}
          {user?.email && <h3> User Logged In SuccessFully!</h3>}

          {authError && <h3>{authError}</h3>}
        </Col>
        <Col md={6}>
          <img className="img-fluid my-2 rounded-3" src={registration} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
