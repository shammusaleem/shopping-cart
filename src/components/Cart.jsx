import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="my-4">
      <h3>Cart</h3>
      <p>Total Items: {cart.length}</p>
    </div>
  );
};

export default Cart;