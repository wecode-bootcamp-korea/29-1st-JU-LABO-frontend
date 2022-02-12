import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';
import ProductDetailSide from './ProductDetailSide/ProductDetailSide';
import './ProductDetail.scss';
import { api } from '../../api/config';

const ProductDetail = ({ isOpen, setIsOpen }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${api.fetchDetailProduct}/${params.id}`)
      .then(res => res.json())
      .then(result => {
        setProductSize(result);
        setProductInfo(result.products[0]);
      });
  }, [params.id]);

  return (
    <div className="projectDetailWrap">
      <section className="productDetail">
        <ProductDetailContent productInfo={productInfo} />
        <ProductDetailSide
          productInfo={productInfo}
          productSize={productSize}
          setProductInfo={setProductInfo}
          params={params}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </section>
    </div>
  );
};

export default ProductDetail;
