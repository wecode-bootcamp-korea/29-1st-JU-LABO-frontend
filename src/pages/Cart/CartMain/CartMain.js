import React from 'react';
import CartList from './CartList/CartList';
import CartOrder from './CartOrder/CartOrder';
import './CartMain.scss';

const CartMain = () => {
  return (
    <div className="cartMain">
      <div className="cartContentWrap">
        <div className="cartContent">
          <CartList />
          <CartOrder />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
