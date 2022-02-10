import React, { useState } from 'react';
import OptionModal from './OptionModal/OptionModal';
import './ProductDetailSide.scss';
import { api } from '../../../api/config';

const ProductDetailSide = ({
  productInfo,
  setProductInfo,
  productSize,
  params,
  isOpen,
  setIsOpen,
}) => {
  const [isMore, setIsMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isSizeShow, setIsSizeShow] = useState(false);
  const [isQuantityShow, setIsQuantityShow] = useState(false);
  const isShowModal = e => {
    const checkSize = e.currentTarget.className.includes('sizeInfo');
    const checkQuantity = e.currentTarget.className.includes('quantityInfo');
    if (checkSize) setIsSizeShow(!isSizeShow);
    if (checkQuantity) setIsQuantityShow(!isQuantityShow);
  };

  const toggleShowInfo = () => {
    setIsMore(!isMore);
  };

  const addCart = e => {
    e.preventDefault();

    setIsOpen(prev => !prev);
    fetch(api.fetchAddCart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('loginToken'),
      },
      body: JSON.stringify({
        product_id: productInfo.product_id,
        quantity: Number(quantity),
      }),
    });
  };

  return (
    <div className="productDetailSide">
      <div className="productHead">
        <div>
          <h2>{productInfo.name}</h2>
          <p className="productPrice">USD ${productInfo.price}</p>
        </div>
        <p className="productType">Delicious Wine</p>
        <p className="afterpayParagraph">
          <span>or 4 interest-free payments of $49.50 with</span>
        </p>
      </div>

      <div className="productForm">
        <div className="formRow">
          <p className="productLabel">Size: </p>
          <div className="productInfo sizeInfo" onClick={isShowModal}>
            {isSizeShow && (
              <OptionModal
                productInfo={productInfo}
                setProductInfo={setProductInfo}
                setIsShow={setIsSizeShow}
                isSizeShow={isSizeShow}
                productSize={productSize}
                params={params}
                size
              />
            )}
            <p>
              <input
                type="text"
                value={productInfo.ml || ''}
                readOnly
                className="sizeInput"
              />
            </p>
            {isSizeShow ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </div>
        </div>

        <div className="formRow">
          <p className="productLabel">Quantity: </p>
          <div className="productInfo quantityInfo" onClick={isShowModal}>
            {isQuantityShow && (
              <OptionModal
                setQuantity={setQuantity}
                setIsShow={setIsQuantityShow}
                isQuantityShow={isQuantityShow}
                quan
              />
            )}
            <p>
              <input
                type="text"
                value={quantity}
                readOnly
                className="sizeInput"
              />
            </p>
            {isQuantityShow ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </div>
        </div>

        <div className="cartBtnWrap">
          <button className="addCart" type="submit" onClick={addCart}>
            ADD TO CART
          </button>
        </div>

        <div className="productInfoTextWrap">
          <p className="productInfoText">
            In the same way matcha tea is much more than just a drink in
            Japanese culture, THÉ MATCHA 26 is much more than a scent to us. It
            is a moment of introspection, a moment of self that offers a quiet
            inner celebration of grace and soulful beauty. A simple whiff takes
            us away from the hum of the outside and brings us back “in”.
          </p>

          <div className={isMore ? 'moreInfo hidden' : 'moreInfo'}>
            <p className="productInfoText">
              Matcha tea accord is infused with a creamy fig note, grounded by
              soft vetiver and textural cedar woods and uplifted by enticing
              bitter orange.
            </p>

            <p className="productInfoText">
              Introverted and deep by nature, THÉ MATCHA 26 is a skin scent,
              something meant for, and only those individuals lucky enough to be
              very close to, the wearer. It carries a noble stillness. To us, it
              is a scented reminder of home, of welcomed solitude, and of all
              things familiar and treasured.
            </p>
          </div>
          <p className="viewMoreInfo" onClick={toggleShowInfo}>
            {isMore ? 'view less' : 'view more'}
          </p>
        </div>
        <div className="otherInfo">
          <p>
            Need help? <span>zulabo@wecode.com</span> / <span>143-40</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSide;
