import React, { useState, useEffect } from 'react';
import './ProductDetailContent.scss';

const ProductDetailContent = ({ productInfo }) => {
  const [imgArr, setImgArr] = useState([]);
  const [selected, setSelected] = useState('');
  useEffect(() => {
    setImgArr(productInfo.imageUrls);
    if (productInfo.imageUrls) {
      setSelected(productInfo.imageUrls[0]);
    }
  }, [setImgArr, productInfo.imageUrls]);

  const selectImage = (e, img) => {
    const checkSelected = e.target.classList[0] === 'labelCurrent';
    if (checkSelected) {
      setSelected(productInfo[1]);
    }
    setSelected(img);
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
                    onClick={e => selectImage(e, img)}
                  />
                </li>
              ) : (
                <li key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className="productImage"
                    onClick={e => selectImage(e, img)}
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
            <span className="labelCurrent underLine" onClick={selectImage}>
              label
            </span>{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailContent;
