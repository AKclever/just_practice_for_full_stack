import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, onAddToCart }) => {
 return (
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={product.image} />
     <Card.Body>
       <Card.Title>{product.title}</Card.Title>
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

const ProductListing = ({ products, onAddToCart }) => {
 return (
   <div className="d-flex flex-wrap">
     {products.map((product) => (
       <Product key={product.id} product={product} onAddToCart={onAddToCart} />
     ))}
   </div>
 );
};

export default ProductListing;
