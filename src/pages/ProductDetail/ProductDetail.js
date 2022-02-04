import React, { useState, useEffect } from 'react';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(result => {
        if (result) {
          setProductInfo(result[0]);
        }
      });
  }, []);

  return (
    <section className="productDetail">
      <ProductDetailContent productInfo={productInfo} />
      <ProductDetailSide
        productInfo={productInfo}
        setProductInfo={setProductInfo}
      />
    </section>
  );
};

export default ProductDetail;
