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

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {registerUser,user, isLoading, authError} = useAuth()

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
    registerUser(loginData.email, loginData.password)
    e.preventDefault();
  };

  return (
    <>
    <h3>Register</h3>
      <Form onSubmit={handleLoginSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            onBlur={handleOnBlur}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onBlur={handleOnBlur}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password2"
            onBlur={handleOnBlur}
          />
        </FloatingLabel>
        <NavLink to="/login">
                <Button variant="info">
                  * Already have an account? please login
                </Button>
              </NavLink>
  
              <Button
                variant="warning"
                type="submit"
              >
                Register
              </Button>
      </Form>
      {isLoading && <Spinner animation="grow" />}
      {user?.email && <h3> User Logged In SuccessFully!</h3>}

      {authError && { authError }}
    </>
  );
};

export default Register;
