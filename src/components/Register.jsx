import React from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  // Validate form input
  const validate = (values) => {
    const errors = {};

    // First Name validation
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "First Name should not exceed 15 characters";
    }

    // Surname validation
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (values.surname.length > 20) {
      errors.surname = "Surname should not exceed 20 characters";
    }

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
    } else if (!/(?=.*[a-z])/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
      errors.password = "Password must contain at least one special character (!@#$%^&*)";
    }

    // Confirm Password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // Handle successful registration
      alert("Registration successful! You can now log in.");
      navigate("/login");
    },
  });
    
// registration form component
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <Container className="register-container">
        <Card className="register-card shadow">
          <Card.Header className="text-center bg-dark text-white">
            <h3>F1 Merch Registration</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Row className="mb-3">
                {/* First Name Field */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      isInvalid={formik.touched.firstName && formik.errors.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>

                {/* Surname Field */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Enter your surname"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.surname}
                      isInvalid={formik.touched.surname && formik.errors.surname}
                    />
                    {formik.touched.surname && formik.errors.surname && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.surname}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

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
                <Form.Text className="text-muted">
                  Password must be at least 8 characters with at least one uppercase letter, one
                  lowercase letter, one number, and one special character.
                </Form.Text>
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="d-flex flex-column gap-2 mt-4">
                <Button
                  variant="success"
                  type="submit"
                  className="w-100"
                  disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0}
                >
                  Register
                </Button>
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <Button variant="link" onClick={() => navigate("/login")}>
                      Login
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

export default Register;

/* References:
1. Formik Documentation: https://formik.org/docs/overview 
*/