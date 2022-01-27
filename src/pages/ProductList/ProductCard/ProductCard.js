import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ img, name, volume, type, isAvailable, price }) => {
  return (
    <li className="ProductCard">
      <img
        alt="NAME OF THE PRODUCT"
        src="https://images.unsplash.com/photo-1569919659476-f0852f6834b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        className="productImg"
      />
      <h1 className="productName">NAME OF THE PRODUCT</h1>
      <div className="volumeType">
        <p>volume</p>
        <p>type</p>
      </div>
      <div className="cartPrice">
        <button type="button">Add to Cart</button>
        <strong className="price">₩ 10,000</strong>
      </div>
    </li>
  );
};

export default ProductCard;
