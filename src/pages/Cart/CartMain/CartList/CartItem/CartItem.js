import React, { useState, useEffect } from 'react';
import './CartItem.scss';

const CartItem = ({ item, cartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if (item) setQuantity(item.quantity);
  }, []);

  const addQuantity = (e, id) => {
    e.preventDefault();

    const addQuan = cartItems.map(cartItem => {
      if (cartItem.id === id) {
        // addQuan();
        const curr = +quantity + 1;

        setQuantity(curr);
        fetch('', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...cartItem,
            quantity: curr,
          }),
        });
        return { ...cartItem, quantity: curr };
      } else return cartItem;
    });

    setCartItems(addQuan);

    sessionStorage.setItem('cartItems', JSON.stringify(addQuan));
  };

  const subQuantity = (e, id) => {
    e.preventDefault();
    if (Number(item.quantity) === 0) {
    }

    const subQuan = cartItems.map(cartItem => {
      if (cartItem.id === id) {
        const curr = +quantity - 1;
        setQuantity(curr);

        return { ...cartItem, quantity: Number(cartItem.quantity) - 1 };
      } else return cartItem;
    });

    setCartItems(subQuan);
    sessionStorage.setItem('cartItems', JSON.stringify(subQuan));
  };

  const removeItem = (e, id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
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
                    <button onClick={e => subQuantity(e, item.id)}>-</button>
                    <input type="text" value={quantity || ''} readOnly />
                    <button onClick={e => addQuantity(e, item.id)}>+</button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cartItemInfoRemove">
              <p onClick={() => removeItem(item.id)}>Remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
