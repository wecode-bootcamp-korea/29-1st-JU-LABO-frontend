import React from 'react';
import './CartRecommendItem.scss';

const CartRecommendItem = () => {
  return (
    <li className="cartRecommendItem">
      <img src="./images/boston1.jpg" alt="boston" />
      <div className="recommendItemContent">
        <h3 className="recommendItemTitle">Boston</h3>
        <div className="recommendItemDetails">
          <p>500ml</p>봄
        </div>
      </div>
      <div className="recommendItemAction">
        <p>Add to cart</p>
        <p>USD $172.00</p>
      </div>
    </li>
  );
};

export default CartRecommendItem;
