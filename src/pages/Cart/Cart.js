import React from 'react';
import CartMain from './CartMain/CartMain';
import './Cart.scss';

const Cart = ({ isOpen, setIsOpen }) => {
  return <CartMain isOpen={isOpen} />;
};

export default Cart;
