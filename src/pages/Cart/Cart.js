import React, { useState, useEffect } from 'react';
import CartMain from './CartMain/CartMain';
import CartModal from './CartModal/CartModal';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(res => {
        setCartItems(res);
      });
  }, []);
  return (
    <>
      <CartModal cartItems={cartItems} setCartItems={setCartItems} />
      <CartMain cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};

export default Cart;
