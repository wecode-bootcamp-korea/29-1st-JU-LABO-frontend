import React, { useState } from 'react';
import OptionModal from './OptionModal/OptionModal';
import './ProductDetailSide.scss';

const ProductDetailSide = ({
  size,
  setSize,
  isSizeShow,
  setIsSizeShow,
  isQuantityShow,
  setIsQuantityShow,
  quantity,
  setQuantity,
}) => {
  const [isMore, setIsMore] = useState(false);

  const isShowModal = e => {
    if (e.currentTarget.className.includes('sizeInfo'))
      setIsSizeShow(!isSizeShow);
    if (e.currentTarget.className.includes('quantityInfo'))
      setIsQuantityShow(!isQuantityShow);
  };

  const toggleShowInfo = () => {
    setIsMore(!isMore);
  };

  return (
    <div className="productDetailSide">
      <div className="productHead">
        <div>
          <h2>THE Chamara 26</h2>
          <p className="productPrice">USD $198.00</p>
        </div>
        <p className="productType">Delicious Wine</p>
        <p className="afterpayParagraph">
          <span>or 4 interest-free payments of $49.50 with</span>
        </p>
      </div>

      <div className="productForm">
        <form action="#" method="post">
          {isSizeShow && (
            <OptionModal
              setSize={setSize}
              setIsShow={setIsSizeShow}
              isSizeShow={isSizeShow}
              size
            />
          )}

          <div className="formRow">
            <p className="productLabel">Size: </p>
            <div className="productInfo sizeInfo" onClick={isShowModal}>
              <p>
                <input
                  type="text"
                  value={size}
                  readOnly
                  className="sizeInput"
                />
              </p>
              <i className="fas fa-chevron-down" />
            </div>
          </div>

          {isQuantityShow && (
            <OptionModal
              setQuantity={setQuantity}
              setIsShow={setIsQuantityShow}
              isQuantityShow={isQuantityShow}
              quan
            />
          )}
          <div className="formRow">
            <p className="productLabel">Quantity: </p>
            <div className="productInfo quantityInfo" onClick={isShowModal}>
              <p>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="sizeInput"
                />
              </p>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          {/* <div className="formRow">
            <p className="productLabel">Label: </p>
            <div className="productInfo">
              <p>
                <input
                  type="text"
                  placeholder="personalize here..."
                  className="sizeInput"
                />
              </p>
              <i className="fas fa-chevron-down" />
            </div>
          </div> */}
          <div className="cartBtnWrap">
            <button className="addCart" type="submit">
              ADD TO CART
            </button>
          </div>
        </form>

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
