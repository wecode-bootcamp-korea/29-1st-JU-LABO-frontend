import React, { useEffect, useState } from 'react';
import CartList from './CartList/CartList';
import CartOrder from './CartOrder/CartOrder';
import CartRecommendList from './CartRecommendList/CartRecommendList';
import { api } from '../../../api/config';
import './CartMain.scss';

const CartMain = ({ isOpen }) => {
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
  }, []);

  return (
    <div className="cartMain">
      <div className="cartContentWrap">
        <div className="cartContent">
          <CartList cartItems={cartItems} setCartItems={setCartItems} />
          <CartOrder cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
      <div className="cartRecommendWrap">
        <div className="cartRecommendLayout">
          <CartRecommendList />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
