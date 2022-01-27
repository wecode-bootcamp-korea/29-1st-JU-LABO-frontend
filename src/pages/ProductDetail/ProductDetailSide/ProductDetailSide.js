import React from 'react';
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
  const isShowModal = e => {
    if (e.currentTarget.className.includes('sizeInfo'))
      setIsSizeShow(!isSizeShow);
    if (e.currentTarget.className.includes('quantityInfo'))
      setIsQuantityShow(!isQuantityShow);
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
        </form>
      </div>
    </div>
  );
};

export default ProductDetailSide;
