import React from 'react';
import CartList from './CartList/CartList';
import CartOrder from './CartOrder/CartOrder';
import CartRecommendList from './CartRecommendList/CartRecommendList';
import './CartMain.scss';

const CartMain = ({ quantity, setQuantity }) => {
  return (
    <div className="cartMain">
      <div className="cartContentWrap">
        <div className="cartContent">
          <CartList quantity={quantity} setQuantity={setQuantity} />
          <CartOrder />
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
