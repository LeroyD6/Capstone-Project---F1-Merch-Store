import React from "react";
import { Card, Button, Dropdown, Row, Col, Toast } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import "./products.css";

const items = [
  {
    id: 1,
    title: "Ferrari Cap",
    price: 200,
    desc: "Classic red Ferrari cap with logo.",
    img: "src/assets/product images/Ferrari cap.jpg",
  },
  {
    id: 2,
    title: "Team T-Shirt",
    price: 500,
    desc: "Official Scuderia Ferrari team shirt.",
    img: "src/assets/product images/Ferrari T.jpg",
  },
  {
    id: 3,
    title: "Ferrari Hoodie",
    price: 750,
    desc: "Warm hoodie with Ferrari branding.",
    img: "src/assets/product images/ferrari hoodie.jpg",
  },
  {
    id: 4,
    title: "Ferrari Jacket",
    price: 1200,
    desc: "Premium quality Ferrari windbreaker.",
    img: "src/assets/product images/ferrari jacket.jpg",
  },
  {
    id: 5,
    title: "Ferrari Lanyard",
    price: 150,
    desc: "Keep your keys or pass stylish with this lanyard.",
    img: "src/assets/product images/ferrari lanyard.jpg",
  },
  {
    id: 6,
    title: "Ferrari Water Bottle",
    price: 200,
    desc: "Stay hydrated in Ferrari style.",
    img: "src/assets/product images/ferrari bottle.jpg",
  },
  {
    id: 7,
    title: "Ferrari Backpack",
    price: 650,
    desc: "Spacious and stylish Ferrari-branded backpack.",
    img: "src/assets/product images/ferrari backpack.jpg",
  },
  {
    id: 8,
    title: "Ferrari Thermal Mug",
    price: 300,
    desc: "Drink your coffee like a champion.",
    img: "src/assets/product images/ferrari mug.jpg",
  },
  {
    id: 9,
    title: "Ferrari Keyring",
    price: 120,
    desc: "Metal keyring with engraved logo.",
    img: "src/assets/product images/ferrari keyring.jpg",
  },
  {
    id: 10,
    title: "Ferrari Socks",
    price: 100,
    desc: "Comfortable socks in Ferrari colors.",
    img: "src/assets/product images/ferrari socks.jpg",
  },
];

function Products() {
  // Initialize with Red as default color for all items
  const initColors = {};
  items.forEach((item) => {
    initColors[item.id] = "Red";
  });

  // Initialize state for selected colors
  const [selectedColors, setSelectedColors] = useState(initColors);
  const colors = ["Red", "Black", "White"];

  // Redux dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [addedItem, setAddedItem] = useState({});

  const handleBuy = (item) => {
    // Add item to cart with selected color
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        color: selectedColors[item.id],
        img: item.img,
      })
    );

    setAddedItem({
      title: item.title,
      color: selectedColors[item.id],
    });
    setShowToast(true);
  };

  const selectColor = (itemId, color) => {
    setSelectedColors({
      ...selectedColors,
      [itemId]: color,
    });
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <div className="products-page">
      {/* Toast notification for added items */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: 80,
          right: 20,
          zIndex: 9999,
          minWidth: "250px",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Item Added</strong>
        </Toast.Header>
        <Toast.Body>
          <p className="mb-1">
            {addedItem.title} ({addedItem.color}) added to cart!
          </p>
          <Button variant="outline-primary" size="sm" onClick={handleViewCart}>
            View Cart
          </Button>
        </Toast.Body>
      </Toast>

      <Row xs={1} md={3} lg={4} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="product-card shadow">
              <Card.Img variant="top" src={item.img} alt={item.title} className="product-image" />
              <Card.Body className="d-flex flex-column product-body">
                <Card.Title className="product-title">{item.title}</Card.Title>
                <Card.Text className="product-desc">{item.desc}</Card.Text>
                <Card.Text className="product-price">R{item.price.toFixed(2)}</Card.Text>
                <Card.Text className="product-color">
                  <strong>Select Color:</strong> {selectedColors[item.id]}
                </Card.Text>

                <div className="product-actions">
                  <Dropdown className="mb-2 w-100">
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      id={`dropdown-${item.id}`}
                      className={`color-dropdown ${selectedColors[item.id]?.toLowerCase()}`}
                    >
                      {selectedColors[item.id]}
                    </Dropdown.Toggle>

                    {/* Dropdown menu for color selection */}
                    <Dropdown.Menu className="w-100">
                      {colors.map((color) => (
                        <Dropdown.Item
                          key={color}
                          onClick={() => selectColor(item.id, color)}
                          className={`color-option ${color.toLowerCase()}`}
                        >
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Button to buy the product */}
                  <Button
                    variant="primary"
                    className="buy-button w-100"
                    onClick={() => handleBuy(item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
