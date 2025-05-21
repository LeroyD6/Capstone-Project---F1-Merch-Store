import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import "./Navbar.css";


function NavigationBar({ loggedIn, handleLogout }) {
  const navigate = useNavigate(); 
  
  
  const handleLogoutAndRedirect = () => {
    handleLogout(); 
    navigate("/login"); 
  };
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-1">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <Image
            src="src/assets/F1 merch logo.jpg"
            alt="F1 Merch Logo"
            width={70}
            height={50}
            rounded
          />
          <span className="fw-bold fs-4">F1 Merch</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-5">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            
            {loggedIn ? (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={handleLogoutAndRedirect}
                className="d-flex align-items-center px-3"
              >
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login" className="auth-link">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;