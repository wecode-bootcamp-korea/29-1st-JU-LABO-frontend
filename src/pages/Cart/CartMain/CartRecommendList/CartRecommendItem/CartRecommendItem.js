import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartRecommendItem.scss';

const CartRecommendItem = ({ item }) => {
  const navigate = useNavigate();
  const addToCart = () => {
    navigate(`/product/${item.product_id}`);
  };
  return (
    <li className="cartRecommendItem">
      <img src={item.image_url} alt="boston" />
      <div className="recommendItemContent">
        <h3 className="recommendItemTitle">{item.product_name}</h3>
        <div className="recommendItemDetails">
          <p>{item.size}ml</p>
          {item.season}
        </div>
      </div>
      <div className="recommendItemAction">
        <p onClick={addToCart}>Go to Detail</p>
        <p>USD ${item.price}</p>
      </div>
    </li>
  );
};

export default CartRecommendItem;
