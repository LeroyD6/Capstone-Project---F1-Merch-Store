import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

function home({ loggedIn, username, handleLogout }) {
  const navigate = useNavigate();

  return (
    <div className="home-page d-flex justify-content-center align-items-center">
      <Card className="shadow">
        <Card.Body>
          {loggedIn ? (
            <>
              <h1>Welcome, {username}!</h1>
              <p className="mb-4">Ready to explore Ferrari Formula 1 merchandise?</p>
              <div className="d-flex flex-column gap-2">
                <Button variant="success" onClick={() => navigate("/products")}>
                  Browse Products
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <h1>Welcome to F1 Merch</h1>
              <p className="mb-4">Your destination for premium Ferrari Formula 1 merchandise</p>
              <div className="d-flex flex-column gap-2">
                <Button variant="success" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="outline-secondary" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default home;