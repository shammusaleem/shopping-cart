import React from 'react';

const Product = ({ product, cart, addToCart, removeFromCart }) => {
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="card h-100">
      <img className="card-img-top" src={product.imageUrl} alt={product.name} />
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="card-footer text-center">
        {isInCart ? (
          <button 
            className="btn btn-danger" 
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
