import React from 'react';
import CartModalItemList from './CartModalItemList/CartModalItemList';
import CartModalFooter from './CartModalFooter/CartModalFooter';
import './CartModal.scss';

const CartModal = ({ cartItems, setCartItems }) => {
  return (
    <div className="cartModal">
      <div className="miniCartWrap">
        <div className="miniCartBody">
          <CartModalItemList
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
        <div className="miniCartFooter">
          <CartModalFooter cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
