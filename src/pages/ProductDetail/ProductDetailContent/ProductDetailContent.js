import React, { useState, useEffect } from 'react';
import './ProductDetailContent.scss';

const ProductDetailContent = ({ productInfo }) => {
  const [imgArr, setImgArr] = useState([]);
  const [selected, setSelected] = useState('');
  useEffect(() => {
    setImgArr(productInfo.image_urls);
    if (productInfo.image_urls) {
      setSelected(productInfo.image_urls[0]);
    }
  }, [setImgArr, productInfo.image_urls]);
  const selectImage = img => {
    setSelected(img);
  };

  const selectFirstImage = e => {
    const checkSelected = e.target.classList[0] === 'labelCurrent';
    if (checkSelected) {
      setSelected(productInfo.image_urls[0]);
    }
  };

  return (
    <div className="productDetailContent">
      <p className="breadcrumbs">Home / The Redwine</p>
      <img src={selected} className="slideCurrent" alt="SlideCurrentImg" />

      <div className="productsContent">
        <ul>
          {imgArr &&
            imgArr.map((img, idx) =>
              selected === img ? (
                <li key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className="productImage selected"
                    onClick={() => selectImage(img)}
                  />
                </li>
              ) : (
                <li key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className="productImage"
                    onClick={() => selectImage(img)}
                  />
                </li>
              )
            )}
        </ul>
      </div>
      <div className="slideCurrentImageFoot">
        <p>
          <span>
            View personalization:{' '}
            <span className="labelCurrent underLine" onClick={selectFirstImage}>
              label
            </span>{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailContent;
