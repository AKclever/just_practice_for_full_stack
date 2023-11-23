import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const EcommerceFooter = () => {
 return (
 <footer>
   <Container>
     <Row>
       <Col className="text-center py-3">
         <Nav className="justify-content-center">
           <Nav.Link href="#about">About Us</Nav.Link>
           <Nav.Link href="#terms">Terms of Service</Nav.Link>
           <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
         </Nav>
         <div className="mt-3">
           <FaFacebook />
           <FaTwitter />
           <FaInstagram />
         </div>
         <div className="mt-3">Copyright &copy; 2023 Ecommerce</div>
       </Col>
     </Row>
   </Container>
 </footer>
 );
};

export default EcommerceFooter;
