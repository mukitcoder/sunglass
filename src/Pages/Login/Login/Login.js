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

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, user, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
    <h3>Login</h3>
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
        <Button
              variant="info"
              type="submit"
            >
              Login
            </Button>
      </Form>
      {isLoading && <Spinner animation="grow"/>}
      {user?.email && <h3> User Logged In SuccessFully!</h3>}

      {authError && { authError }}

      <Button variant="primary" onClick={handleGoogleSignIn}>
        Sign In Using Google
      </Button>
    </>
  );
};

export default Login;
