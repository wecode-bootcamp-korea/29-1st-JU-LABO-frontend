import React from 'react';
import { Link } from 'react-router-dom';
import CartMain from './CartMain/CartMain';
import './Cart.scss';

const Cart = () => {
  return (
    <>
      <header className="cart">
        <Link to="/">
          <img src="./images/julabo_logo.png" alt="julabo_logo" />
        </Link>
      </header>
      <CartMain />
    </>
  );
};

export default Cart;
