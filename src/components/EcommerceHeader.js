import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const EcommerceHeader = () => {
 return (
  <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Our Ecommerce Store</h1>
          <p>Shop for the best products at the best prices.</p>
        </Col>
      </Row>
    </Container>
  </header>
 );
};

export default EcommerceHeader;
