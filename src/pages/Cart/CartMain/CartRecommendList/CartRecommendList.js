import React, { useEffect, useState } from 'react';
import CartRecommendItem from './CartRecommendItem/CartRecommendItem';
import './CartRecommendList.scss';
import { api } from '../../../../api/config';
const CartRecommend = () => {
  const [recoItems, setRecoItems] = useState([]);
  useEffect(() => {
    fetch(api.fetchOrderRecommendList, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('loginToken'),
      },
    })
      .then(res => res.json())
      .then(res => {
        setRecoItems(res.results);
      });
  }, []);

  return (
    <section className="cartRecommend">
      <h3 className="cartRecommendTitle">Recommendations for you:</h3>
      <ul className="recommendItems">
        {recoItems.map(item => (
          <CartRecommendItem key={item.product_id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default CartRecommend;
