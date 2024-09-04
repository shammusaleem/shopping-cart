import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Fancy Product', description: '$40.00 - $80.00', imageUrl: 'https://via.placeholder.com/450x300' },
    { id: 2, name: 'Special Item', description: '$20.00 $18.00', imageUrl: 'https://via.placeholder.com/450x300', onSale: true },
    { id: 3, name: 'Sale Item', description: '$50.00 $25.00', imageUrl: 'https://via.placeholder.com/450x300', onSale: true },
    { id: 4, name: 'Popular Item', description: '$40.00', imageUrl: 'https://via.placeholder.com/450x300' },
    { id: 5, name: 'Fancy Product', description: '$120.00 - $280.00', imageUrl: 'https://via.placeholder.com/450x300' },
    { id: 6, name: 'Special Item', description: '$20.00 $18.00', imageUrl: 'https://via.placeholder.com/450x300', onSale: true },
  ]);
  

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="container">
       <h1 className="my-4">Shopping Styles</h1>
      <h3 className="my-4">Shop all home products in one site</h3>
      <Cart cart={cart} />
      <ProductList 
        products={products} 
        cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
};

export default App;
