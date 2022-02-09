import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModalFooter.scss';

const CartModalFooter = ({ cartItems, setCartItems, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState();
  useEffect(() => {
    if (cartItems) {
      getTotal(cartItems);
    }
  }, [cartItems]);

  const getTotal = cartItems => {
    let totalPrice = 0;
    cartItems.map(
      product => (totalPrice += parseInt(product.price) * product.quantity)
    );

    setTotal(totalPrice);
  };

  const goToCart = () => {
    setIsOpen(!isOpen);
    navigate('/cart');
  };

  const goToMain = () => {
    navigate('/');
  };
  return (
    <div className="cartModalFooter">
      <div className="miniCartSubTotal">
        <span>Sub total</span>
        <p>USD ${total}</p>
      </div>

      <div className="formActions">
        <div className="formAction" onClick={goToCart}>
          VIEW CART
        </div>
        <div className="formAction" onClick={goToMain}>
          CHECKOUT
        </div>
      </div>

      <p className="footerNote">
        Kindly note there may be delivery delays for online orders.
      </p>
    </div>
  );
};

export default CartModalFooter;
