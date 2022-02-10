import React, { useEffect, useState } from 'react';
import { api } from '../../../../../api/config';
import './CartModalItem.scss';

const CartModalItem = ({ item, cartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if (item) setQuantity(item.quantity);
  }, [item]);

  const addQuantity = (e, id) => {
    e.preventDefault();

    const addQuan = cartItems?.map(cartItem => {
      if (cartItem.cart_id === id) {
        const curr = +quantity + 1;

        setQuantity(curr);
        fetch(api.fetchCartModifyQuantity, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem('loginToken'),
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
  };

  const subQuantity = (e, id) => {
    e.preventDefault();
    const curr = +quantity - 1;

    if (curr === 0) {
      return;
    }

    const subQuan = cartItems.map(cartItem => {
      if (cartItem.cart_id === id) {
        setQuantity(curr);
        fetch(api.fetchCartModifyQuantity, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem('loginToken'),
          },
          body: JSON.stringify({
            ...cartItem,
            quantity: curr,
          }),
        });
        return { ...cartItem, quantity: curr };
      } else return cartItem;
    });

    setCartItems(subQuan);
  };
  return (
    <div className="CartModalItem">
      <div className="miniCartItemWrap">
        <div className="miniCartItemImg">
          <img src={item.image_url} alt="" />
        </div>
        <div className="miniCartItemContent">
          <div className="miniCartItemHeadWrap">
            <div className="miniCartItemHead">
              <h3>{item.name}</h3>
              <i className="fas fa-times" />
            </div>
            <div className="miniCartItemDetail">{item.subcategory}</div>
          </div>
          <div className="miniCartItemBodyWrap">
            <ul className="miniCartItemBody">
              <li>
                <p>Price:</p>
                <p> {item.price}</p>
              </li>
              <li>
                <p>Size:</p>
                <p>{item.ml}</p>
              </li>
              <li>
                <p>Quantity: </p>
                <div>
                  <button onClick={e => subQuantity(e, item.cart_id)}>-</button>
                  <input type="text" value={quantity || ''} readOnly />
                  <button onClick={e => addQuantity(e, item.cart_id)}>+</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModalItem;
