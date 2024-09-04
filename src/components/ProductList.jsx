import React from 'react';
import Product from './Product';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <Product 
            product={product} 
            cart={cart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
