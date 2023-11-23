import React, { useEffect, useState } from 'react';
import './App.css';
import ProductListing from './components/ProductListing';

import EcommerceNavbar from './components/EcommerceNavbar';
import EcommerceFooter from './components/EcommerceFooter';
import EcommerceHeader from './components/EcommerceHeader';

function App() {
 const [products, setProducts] = useState([]);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(false);

 const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('http://localhost:8080/users/all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
 };

 useEffect(() => {
  fetchData();
 }, []);

 return (
  <div className="App">
    <EcommerceNavbar />
    <EcommerceHeader />
    <header className="App-header">
      <h1>Products</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ProductListing products={products} />
      )}
    </header>
    <EcommerceFooter />
  </div>
 );
}

export default App;
