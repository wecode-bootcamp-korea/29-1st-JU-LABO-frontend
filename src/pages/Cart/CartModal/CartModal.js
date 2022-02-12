import React, { useState, useEffect } from 'react';
import CartModalItemList from './CartModalItemList/CartModalItemList';
import CartModalFooter from './CartModalFooter/CartModalFooter';
import { api } from '../../../api/config';
import './CartModal.scss';

const CartModal = ({ isOpen, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch(api.fetchCartItems, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('loginToken'),
      },
    })
      .then(res => res.json())
      .then(res => {
        setCartItems(res.results);
      });
  }, [setCartItems, setIsOpen, isOpen]);

  return (
    <div className={isOpen ? 'cartModal on' : 'cartModal'}>
      <div className="miniCartWrap">
        <div className="miniCartBody">
          <CartModalItemList
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
        <div className="miniCartFooter">
          <CartModalFooter
            cartItems={cartItems}
            setCartItems={setCartItems}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
