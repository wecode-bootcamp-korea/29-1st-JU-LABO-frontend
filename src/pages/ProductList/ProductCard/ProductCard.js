import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const addToRecommendation = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('loginToken'),
      },
      body: JSON.stringify({ product_id: data.product_id }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert('추천에 추가 완료~');
        }
      });
  };

  const goToProduct = () => {
    addToRecommendation();
    navigate(`/product/${data.id}`);
  };

  return (
    <li className="productCard" onClick={goToProduct}>
      <img alt={data.name} src={data.image[0]} className="productImg" />
      <h1 className="productName">{data.name}</h1>
      <div className="volumeType">
        <p>{data.ml}ml</p>
        <p>{data.subcategoryname}</p>
      </div>
      <div className="cartPrice">
        <button type="button">Add to Cart</button>
        <strong className="price">
          {'₩ ' +
            data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </strong>
      </div>
    </li>
  );
};

export default ProductCard;
