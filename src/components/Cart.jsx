import React, { useState } from "react";
import { Container, Card, Table, Button, Modal, Form, Row, Col, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "./CartSlice";
import { FaTrash, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for shipping method
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Shipping costs
  const shippingCosts = {
    standard: 100,
    express: 200,
    overnight: 350,
  };

  // Calculate final price including shipping
  const finalPrice = totalPrice + shippingCosts[shippingMethod];

  // Help modal for shipping information
  const handleShowHelp = () => setShowHelpModal(true);
  const handleCloseHelp = () => setShowHelpModal(false);

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  // Handle remove item
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Handle place order
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      dispatch(clearCart());
      setOrderPlaced(false);
    }, 1000);
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="cart-page">
      <Container className="cart-container py-5">
        <h1 className="text-center mb-4 text-white">Your Shopping Cart</h1>

        {orderPlaced && (
          <Alert variant="success" className="mt-4">
            Order placed successfully! Thank you for shopping with F1 Merch.
          </Alert>
        )}

        {cartItems.length === 0 ? (
          <Card className="text-center p-5 cart-empty-card">
            <Card.Body>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any products to your cart yet.</p>
              <Button variant="primary" onClick={handleContinueShopping}>
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <>
            {/* Cart Items */}
            <Card className="cart-items-card mb-4">
              <Card.Header className="bg-dark text-white">
                <h3>Cart Items</h3>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Color</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={`${item.id}-${item.color}`}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.img} alt={item.title} className="cart-item-image me-3" />
                            <span>{item.title}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`color-badge ${item.color.toLowerCase()}`}>
                            {item.color}
                          </span>
                        </td>
                        <td>R{item.price.toFixed(2)}</td>
                        <td>
                          <div className="quantity-control">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td>R{(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            {/* Shipping Options */}
            <Row>
              <Col md={6}>
                <Card className="shipping-card mb-4">
                  <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                    <h3>Shipping Options</h3>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={handleShowHelp}
                      className="help-button"
                    >
                      <FaInfoCircle /> Help
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group>
                        <Form.Check
                          type="radio"
                          id="shipping-standard"
                          name="shippingMethod"
                          label={`Standard Shipping (5-7 days) - R${shippingCosts.standard.toFixed(
                            2
                          )}`}
                          checked={shippingMethod === "standard"}
                          onChange={() => setShippingMethod("standard")}
                          className="mb-2"
                        />
                        <Form.Check
                          type="radio"
                          id="shipping-express"
                          name="shippingMethod"
                          label={`Express Shipping (2-3 days) - R${shippingCosts.express.toFixed(
                            2
                          )}`}
                          checked={shippingMethod === "express"}
                          onChange={() => setShippingMethod("express")}
                          className="mb-2"
                        />
                        <Form.Check
                          type="radio"
                          id="shipping-overnight"
                          name="shippingMethod"
                          label={`Overnight Shipping (1 day) - R${shippingCosts.overnight.toFixed(
                            2
                          )}`}
                          checked={shippingMethod === "overnight"}
                          onChange={() => setShippingMethod("overnight")}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              {/* Summary Card */}
              <Col md={6}>
                <Card className="summary-card">
                  <Card.Header className="bg-dark text-white">
                    <h3>Order Summary</h3>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>R{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span>R{shippingCosts[shippingMethod].toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3 fw-bold">
                      <span>Total:</span>
                      <span>R{finalPrice.toFixed(2)}</span>
                    </div>
                    <Button
                      variant="success"
                      size="lg"
                      className="w-100"
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Standard Shipping - R100.00</h5>
          <p>
            Economy option that delivers within 5-7 business days. Best for non-urgent purchases.
            Tracking provided.
          </p>

          <h5>Express Shipping - R200.00</h5>
          <p>
            Faster option that delivers within 2-3 business days. Ideal for getting your F1
            merchandise quickly. Priority handling and tracking provided.
          </p>

          <h5>Overnight Shipping - R350.00</h5>
          <p>
            Premium option that delivers on the next business day. Perfect when you need your
            Ferrari merchandise immediately. Comes with full tracking and signature confirmation.
          </p>

          <Alert variant="info">
            <Alert.Heading>Shipping Policies</Alert.Heading>
            <p>
              Orders are processed within 24 hours of purchase. Delivery times start from the time
              of dispatch. Shipping is available nationwide. International shipping options
              available upon request.
            </p>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;