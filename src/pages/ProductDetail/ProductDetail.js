import React, { useState, useEffect } from 'react';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';

import './ProductDetail.scss';

const ProductDetail = () => {
  const [imgs, setImgs] = useState([]);
  const [selected, setSelected] = useState('');
  const [size, setSize] = useState('500 ml / 16.9 fl oz');
  const [quantity, setQuantity] = useState(1);
  const [isSizeShow, setIsSizeShow] = useState(false);
  const [isQuantityShow, setIsQuantityShow] = useState(false);

  useEffect(() => {
    fetch('http://10.58.0.180:8000/products')
      .then(res => res.json())
      .then(result => {
        setImgs(result.products[0].image_urls);
        setSelected(result.products[0].image_urls[0]);
      })
  }, []);
  return (
    <section className="productDetail">
      <ProductDetailContent
        selected={selected}
        imgs={imgs}
        setSelected={setSelected}
      />
      <ProductDetailSide
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
