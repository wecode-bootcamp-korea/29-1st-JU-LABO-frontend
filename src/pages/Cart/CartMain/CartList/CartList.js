import React, { useState, useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem('cartItems')));
  }, []);

  return (
    <div className="cartList">
      <section className="cartListLayout">
        <div className="cartListContent">
          <form action="">
            <div className="formHead">
              <h2 className="sectionTitle">Your Cart</h2>
            </div>
            {cartItems &&
              cartItems.map(item => (
                <CartItem
                  item={item}
                  key={item.id}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}
          </form>
        </div>
      </section>
    </div>
  );
};

export default CartList;
