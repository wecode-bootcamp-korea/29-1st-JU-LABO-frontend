import React, { useEffect, useState } from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(Number(item.quantity));
  }, []);

  const addQuantity = e => {
    e.preventDefault();
    setCount(prev => prev + 1);
  };

  const subQuantity = e => {
    e.preventDefault();
    if (count === 1) return;
    setCount(prev => prev - 1);
  };

  return (
    <div className="cartItem">
      <div className="cartItemContent">
        <div className="cartItemImg">
          <img src={item.imageUrls} alt="" />
        </div>
        <div className="cartItemContent">
          <div className="cartItemContentHead">
            <div className="cartItemContentTitle">
              <h3>{item.name}</h3>
              <p>USD ${item.price}</p>
            </div>
            <div className="cartItemSubCate">
              <p>{item.category}</p>
            </div>
          </div>
          <div className="cartItemContentBody">
            <ul className="cartItemInfo">
              <li>
                <div className="cartItemInfoSize">
                  <p>Size: </p>
                  <span>{item.ml}ml</span>
                </div>
              </li>
              <li>
                <div className="cartItemInfoQuantity">
                  <p>Quantity: </p>
                  <div className="quantityControl">
                    <button onClick={subQuantity}>-</button>
                    <input type="text" value={count || ''} readOnly />
                    <button onClick={addQuantity}>+</button>
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
