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
import login from "../../../images/login.jpg";

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
    <Container>
      <Row className="text-center">
        <Col md={6} className="mt-5">
          <h3 className="display-5 my-3 fw-bolder">Login</h3>
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
                required
                onBlur={handleOnBlur}
              />
            </FloatingLabel>
            <NavLink to="/register">
              <h6 className="text-danger fs-4">* New user? please register</h6>
            </NavLink>

            <Button
              variant="info"
              type="submit"
              className="w-100 my-4 fw-bolder"
            >
              Login
            </Button>
          </Form>
          {isLoading && (
            <Spinner className="d-flex mx-auto mb-3" animation="grow" />
          )}
          {user?.email && <h3> User Logged In SuccessFully!</h3>}

          {authError && <h3>{authError}</h3>}

          <Button variant="primary" onClick={handleGoogleSignIn}>
            Sign In Using Google
          </Button>
        </Col>
        <Col md={6}>
          <img className="img-fluid rounded-3" src={login} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
