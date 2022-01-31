import React from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

const CartList = () => {
  return (
    <div className="cartList">
      <section className="cartListLayout">
        <div className="cartListContent">
          <form action="">
            <div className="formHead">
              <h2 className="sectionTitle">Your Cart</h2>
            </div>
            <CartItem />
          </form>
        </div>
      </section>
    </div>
  );
};

export default CartList;
