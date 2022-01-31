import React from 'react';
import './CartItem.scss';

const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItemContent">
        <div className="cartItemImg">
          <img src="./images/goodjeongdo.jpg" alt="" />
        </div>
        <div className="cartItemContent">
          <div className="cartItemContentHead">
            <div className="cartItemContentTitle">
              <h3>Another 13</h3>
              <p>USD $289.00</p>
            </div>
            <div className="cartItemSubCate">
              <p>봄</p>
            </div>
          </div>
          <div className="cartItemContentBody">
            <ul className="cartItemInfo">
              <li>
                <div className="cartItemInfoSize">
                  <p>Size: </p>
                  <span>50ml</span>
                </div>
              </li>
              <li>
                <div className="cartItemInfoQuantity">
                  <p>Quantity: </p>
                  <div className="quantityControl">
                    <button>-</button>
                    <input type="text" value="3" readOnly />
                    <button>+</button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cartItemInfoRemove">
              <p>Remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
