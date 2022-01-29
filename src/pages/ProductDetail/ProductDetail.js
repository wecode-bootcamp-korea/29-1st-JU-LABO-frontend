import React, { useState, useEffect } from 'react';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';
import { fetchProduct } from '../../api/config';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [size, setSize] = useState('500 ml / 16.9 fl oz');
  const [quantity, setQuantity] = useState(1);
  const [isSizeShow, setIsSizeShow] = useState(false);
  const [isQuantityShow, setIsQuantityShow] = useState(false);

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
        setSize={setSize}
        isSizeShow={isSizeShow}
        setIsSizeShow={setIsSizeShow}
        setIsQuantityShow={setIsQuantityShow}
        isQuantityShow={isQuantityShow}
        size={size}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </section>
  );
};

export default ProductDetail;
