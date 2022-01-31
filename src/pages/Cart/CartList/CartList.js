import React, { useState, useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(res => {
        setCartItems(res);
      });
  }, []);

  console.log(cartItems);
  return (
    <div className="cartList">
      <section className="cartListLayout">
        <div className="cartListContent">
          <form action="">
            <div className="formHead">
              <h2 className="sectionTitle">Your Cart</h2>
            </div>
            {cartItems.length &&
              cartItems.map(item => <CartItem item={item} key={item.id} />)}
          </form>
        </div>
      </section>
    </div>
  );
};

export default CartList;
