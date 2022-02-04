import React from 'react';
import './CartModalItem.scss';

const CartModalItem = ({ item, cartItems, setCartItems }) => {
  const addQuantity = (e, id) => {
    e.preventDefault();

    const addQuantity = cartItems.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: Number(cartItem.quantity) + 1 };
      } else return cartItem;
    });

    setCartItems(addQuantity);
  };

  const subQuantity = (e, id) => {
    e.preventDefault();

    const addQuantity = cartItems.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: Number(cartItem.quantity) - 1 };
      } else return cartItem;
    });

    setCartItems(addQuantity);
  };
  return (
    <div className="CartModalItem">
      <div className="miniCartItemWrap">
        <div className="miniCartItemImg">
          <img src={item.imageUrls} alt="" />
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
                  <button onClick={e => subQuantity(e, item.id)}>-</button>
                  <input type="text" value={item.quantity || ''} readOnly />
                  <button onClick={e => addQuantity(e, item.id)}>+</button>
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
