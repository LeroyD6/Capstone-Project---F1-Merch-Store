import React from "react";
import { Container, Card, Row, Col, Figure } from "react-bootstrap";
import "./About.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="about-page bg-dark text-white d-flex flex-column">
      <Container className="flex-grow-1 py-5">
        <h1 className="text-center mb-5">About F1 Merch</h1>

        {/* Logo */}
        <div className="text-center mb-5">
          <Figure className="m-0">
            <Figure.Image
              width={150}
              height={100}
              alt="F1 Merch Logo"
              src="src/assets/F1 merch logo.jpg"
              className="mx-auto d-block"
              rounded
            />
            <Figure.Caption className="text-center">F1 Merch - Est. 2023</Figure.Caption>
          </Figure>
        </div>

        {/* Our story section */}
        <Card className="mb-5 mx-auto">
          <h2 className="text-center mb-4">Our Story</h2>
          <Card.Body className="text-center">
            <Card.Text>
              Founded in 2023, F1 Merch brings official Ferrari Formula 1 gear to fans worldwide.
              From apparel to accessories, we offer premium products to help you show your passion
              for Scuderia Ferrari.
            </Card.Text>
          </Card.Body>
        </Card>

        {/*Our mission section */}
        <Card className="mb-5 mx-auto">
          <h2 className="text-center mb-4">Our Mission</h2>
          <Card.Body className="text-center">
            <Card.Text>
              At F1 Merch, our mission is to connect fans with the excitement of Formula 1 through
              high-quality merchandise. We strive to provide exceptional customer service and a
              seamless shopping experience.
            </Card.Text>
          </Card.Body>
        </Card>

        {/*Store locations section */}
        <h2 className="text-center mb-4">Our Flagship Locations</h2>
        <Row className="mb-5 justify-content-center">
          <Col md={5} className="mb-4 text-center">
            <Figure className="m-0">
              <Figure.Image
                width={300}
                height={300}
                alt="Store Location 1"
                src="src/assets/ferrari-store-1.jpg"
                className="mx-auto d-block"
                rounded
              />
              <Figure.Caption className="text-center mt-2">Gateway HQ Store</Figure.Caption>
            </Figure>
          </Col>
          <Col md={5} className="mb-4 text-center">
            <Figure className="m-0">
              <Figure.Image
                width={300}
                height={300}
                alt="Store Location 2"
                src="src/assets/ferrari-store-2.jpg"
                className="mx-auto d-block"
                rounded
              />
              <Figure.Caption className="text-center mt-2">Sandton City Store</Figure.Caption>
            </Figure>
          </Col>
        </Row>

        {/*Customer Testimonials section */}
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <Row className="mb-5 justify-content-center">
          <Col md={4} className="mb-4 text-center">
            <Card>
              <Card.Body>
                <Card.Text>
                  "Amazing quality and fast delivery! I love my new Ferrari cap." - John D.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <Card>
              <Card.Body>
                <Card.Text>
                  "The best place to get official F1 merch. Highly recommend!" - Sarah K.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer section */}
      <footer className="footer py-3">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={4} className="mb-3">
              <h6>About F1 Merch</h6>
              <p className="small">
                Founded in 2023, we deliver official Ferrari F1 merchandise to fans around the
                world.
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <h6>Contact</h6>
              <p className="small mb-1">support@f1merch.com</p>
              <p className="small mb-1">+2731 401 5544</p>
            </Col>
            <Col md={4} className="mb-3">
              <h6>Address</h6>
              <p className="small">
                1 Palm Boulevard, Umhlanga Ridge, Newtown Centre, Umhlanga, 4320
              </p>
            </Col>
          </Row>

          {/* Social icons */}
          <div className="text-center my-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          <hr className="border-light" />
          <p className="text-center small mb-0">&copy; 2025 F1 Merch. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default About;
