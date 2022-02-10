import React from 'react';
import { CATEGORY_TABLE, CATEGORY_IMAGE } from '../CATEGORY_TABLE';
import './ProductListBanner.scss';

const ProductListBanner = ({ params }) => {
  return (
    <div className="banner">
      <img
        alt="banner"
        src={CATEGORY_IMAGE[CATEGORY_TABLE[params.category_id][0]]}
      />
      <h1>{CATEGORY_TABLE[params.category_id][0]}</h1>
    </div>
  );
};

export default ProductListBanner;
