import React, { useState, useEffect } from 'react';
import CartMain from './CartMain/CartMain';
import CartModal from './CartModal/CartModal';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.6.164:8000/carts', {
      headers: {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0._L5a_ydjIIS90fJl5YP4HLe_lX31ioC5BcTUWD1lm8s',
      },
    })
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem('cartItems', JSON.stringify(res));
      });
  }, []);
  return <CartMain />;
};

export default Cart;
