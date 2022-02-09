import React from 'react';
import CartModalItem from './CartModalItem/CartModalItem';
import './CartModalItemList.scss';

const CartModalItemList = ({ cartItems, setCartItems }) => {
  return (
    <div className="CartModalItemList">
      {cartItems &&
        cartItems.map(item => (
          <CartModalItem
            item={item}
            key={item.cart_id}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
    </div>
  );
};

export default CartModalItemList;
