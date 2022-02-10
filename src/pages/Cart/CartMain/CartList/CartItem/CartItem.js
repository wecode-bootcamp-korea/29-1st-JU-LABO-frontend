import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItem.scss';
import { api } from '../../../../../api/config';

const CartItem = ({ item, cartItems, setCartItems }) => {
  const navigate = useNavigate();
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

  const removeItem = (e, id) => {
    e.preventDefault();
    fetch(api.fetchCartDeleteItem + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('loginToken'),
      },
    });
    setCartItems(cartItems.filter(item => item.cart_id !== id));
  };

  const goToDetail = () => {
    navigate(`/product/${item.product_id}`);
  };

  return (
    <div className="cartItem">
      <div className="cartItemContent">
        <div className="cartItemImg">
          <img
            src={item.image_url}
            alt={item.product_name}
            onClick={goToDetail}
          />
        </div>
        <div className="cartItemContent">
          <div className="cartItemContentHead">
            <div className="cartItemContentTitle">
              <h3>{item.name}</h3>
              <p>USD ${item.price}</p>
            </div>
            <div className="cartItemSubCate">
              <p>{item.subcategory}</p>
            </div>
          </div>
          <div className="cartItemContentBody">
            <ul className="cartItemInfo">
              <li>
                <div className="cartItemInfoSize">
                  <p>Size: </p>
                  <span>{item.size}ml</span>
                </div>
              </li>
              <li>
                <div className="cartItemInfoQuantity">
                  <p>Quantity: </p>
                  <div className="quantityControl">
                    <button onClick={e => subQuantity(e, item.cart_id)}>
                      -
                    </button>
                    <input type="text" value={quantity || ''} readOnly />
                    <button onClick={e => addQuantity(e, item.cart_id)}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cartItemInfoRemove">
              <p onClick={e => removeItem(e, item.cart_id)}>Remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
