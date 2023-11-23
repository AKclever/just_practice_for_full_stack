import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductDetail = ({ product, onAddToCart }) => {
 return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Card.Text>
        Price: ${product.price}
      </Card.Text>
      <Button variant="primary" onClick={() => onAddToCart(product)}>
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
 );
};

export default ProductDetail;
