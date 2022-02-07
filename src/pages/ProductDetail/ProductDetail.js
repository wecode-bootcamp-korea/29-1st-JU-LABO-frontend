import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';
import './ProductDetail.scss';
import { fetchDetailProduct } from '../../api/config';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${fetchDetailProduct}/${params.id}`)
      .then(res => res.json())
      .then(result => {
        setProductSize(result);
        setProductInfo(result.products[0]);
      });
  }, []);

  return (
    <section className="productDetail">
      <ProductDetailContent productInfo={productInfo} />
      <ProductDetailSide
        productInfo={productInfo}
        productSize={productSize}
        setProductInfo={setProductInfo}
        params={params}
      />
    </section>
  );
};

export default ProductDetail;
