import React, { useState, useEffect } from 'react';
import './CartModalFooter.scss';

const CartModalFooter = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState();
  useEffect(() => {
    if (cartItems) {
      getTotal(cartItems);
    }
  }, [cartItems]);

  const getTotal = products => {
    let totalPrice = 0;
    products.map(
      product => (totalPrice += parseInt(product.price) * product.quantity)
    );

    setTotal(totalPrice);
  };

  return (
    <div className="cartModalFooter">
      <div className="miniCartSubTotal">
        <span>Sub total</span>
        <p>USD ${total}</p>
      </div>

      <div className="formActions">
        <div className="formAction">VIEW CART</div>
        <div className="formAction">CHECKOUT</div>
      </div>

      <p className="footerNote">
        Kindly note there may be delivery delays for online orders.
      </p>
    </div>
  );
};

export default CartModalFooter;
