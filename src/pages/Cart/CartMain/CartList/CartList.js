import React from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

const CartList = ({ cartItems, setCartItems }) => {
  return (
    <div className="cartList">
      <section className="cartListLayout">
        <div className="cartListContent">
          <form action="">
            <div className="formHead">
              <h2 className="sectionTitle">Your Cart</h2>
            </div>
            {cartItems.map(item => (
              <CartItem
                item={item}
                key={item.cart_id}
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
