import React from "react";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./login.css";

function login({ setLoggedIn, setUsername, setTotal }) {
  const navigate = useNavigate();

  // Validate form input
  const validate = (values) => {
    const errors = {};

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const name = values.email.split("@")[0];// Extract username from email
      setUsername(name);
      setLoggedIn(true);
      setTotal(0);
      navigate("/");// Redirect to home page after successful login
    },
  });

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <Container className="login-container">
        <Card className="login-card">
          <Card.Header className="text-center bg-dark text-white">
            <h3>F1 Merch Login</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              {/* Email Field */}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="d-flex flex-column gap-2">
                <Button
                  variant="success"
                  type="submit"
                  className="w-100"
                  disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0}
                >
                  Login
                </Button>
                <div className="text-center mt-3">
                  <p>
                    Don't have an account?{" "}
                    <Button variant="link" onClick={() => navigate("/register")}>
                      Register
                    </Button>
                  </p>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default login;
/* References:
1. Formik Documentation: https://formik.org/docs/overview 
*/