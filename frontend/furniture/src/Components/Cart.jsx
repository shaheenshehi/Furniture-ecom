import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Styles/Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop">Shop Now</Link></p>
      ) : (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;
