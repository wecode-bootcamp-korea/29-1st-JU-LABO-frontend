import React from 'react';
import CartList from '../CartList/CartList';
import './CartMain.scss';

const CartMain = () => {
  return (
    <div className="cartMain">
      <div className="cartContentWrap">
        <div className="cartContent">
          <CartList />
        </div>
      </div>
    </div>
  );
};

export default CartMain;
