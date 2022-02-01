import React from 'react';
import './CartOrder.scss';

const CartOrder = () => {
  return (
    <div className="cartOrder">
      <section className="cartOrderLayout">
        <div className="orderSummary">
          <header className="orderSummaryHead">
            <h2>Order summary:</h2>
          </header>
        </div>
        <div className="orderTotal">
          <div className="orderInfo">
            <div className="orderDate">
              <p>Order Date:</p>
              <p>31 January 2022</p>
            </div>
            <div className="orderDate">
              <p>Sub-total</p>
              <p>USD $3,028.00</p>
            </div>
            <div className="orderDate">
              <p>Tax:</p>
              <p>USD $0.00</p>
            </div>
            <div className="orderDate">
              <p>Shipping:</p>
              <p>USD $0.00</p>
            </div>
            <div className="orderDate">
              <p>Total:</p>
              <p>USD $3,028.00</p>
            </div>
          </div>
        </div>
        <div className="orderInner">
          <div className="tableTotal">
            *Final total will depend on shipping destination
          </div>
          <button>CHECK OUT</button>
        </div>

        <div className="orderNote">
          <p>Need help?</p>
          <p>zulabo@wecode.com</p>
          <p>010-1234-5678</p>
        </div>
      </section>
    </div>
  );
};

export default CartOrder;