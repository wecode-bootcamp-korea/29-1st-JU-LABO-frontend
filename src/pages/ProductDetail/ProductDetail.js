import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://172.16.100.31:8000/productgroups/${params.id}`)
      .then(res => res.json())
      .then(result => {
        setProductSize(result.mls);
        setProductInfo(result.products[0]);
      });
  }, []);

  console.log(productInfo);

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
