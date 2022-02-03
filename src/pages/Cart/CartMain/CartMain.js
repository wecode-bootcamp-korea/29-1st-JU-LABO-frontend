import React, { useState, useEffect } from 'react';
import CartList from './CartList/CartList';
import CartOrder from './CartOrder/CartOrder';
import CartRecommendList from './CartRecommendList/CartRecommendList';
import './CartMain.scss';

const CartMain = ({ cartItems, setCartItems }) => {
  return (
    <div className="cartMain">
      <div className="cartContentWrap">
        <div className="cartContent">
          <CartList setCartItems={setCartItems} cartItems={cartItems} />
          <CartOrder setCartItems={setCartItems} cartItems={cartItems} />
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
