import React from 'react';
import './ProductCard.scss';

// img, name, volume, type, isAvailable, price

const ProductCard = ({ data }) => {
  return (
    <li className="ProductCard">
      <img alt={data.name} src={data.image_url} className="productImg" />
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
