import React from 'react';
import CartRecommendItem from './CartRecommendItem/CartRecommendItem';
import './CartRecommendList.scss';

const CartRecommend = () => {
  return (
    <section className="cartRecommend">
      <h3 className="cartRecommendTitle">Recommendations for you:</h3>
      <ul className="recommendItems">
        {[...Array(4)].map(idx => (
          <CartRecommendItem />
        ))}
      </ul>
    </section>
  );
};

export default CartRecommend;
